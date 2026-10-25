const SITEVERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const MAX_TOKEN_LENGTH = 4096;
const MIN_SCORE = 0.5;

type SiteverifyResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

export type RecaptchaResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

/**
 * Verifies an invisible reCAPTCHA v3 token.
 * Production requires RECAPTCHA_SECRET_KEY. The contact page reads
 * NEXT_PUBLIC_RECAPTCHA_SITE_KEY. Create a v3 key, not a checkbox key.
 * Local development skips this check when the secret is unset.
 */
export async function verifyRecaptcha(
  token: unknown,
  remoteIp?: string,
  expectedAction = "contact"
): Promise<RecaptchaResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "RECAPTCHA_SECRET_KEY is not set; skipping reCAPTCHA verification in development."
      );
      return { ok: true };
    }

    console.error("RECAPTCHA_SECRET_KEY is not configured.");
    return {
      ok: false,
      status: 503,
      error: "Contact form is temporarily unavailable.",
    };
  }

  if (
    typeof token !== "string" ||
    token.length === 0 ||
    token.length > MAX_TOKEN_LENGTH
  ) {
    return {
      ok: false,
      status: 400,
      error: "reCAPTCHA verification failed. Please try again.",
    };
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteIp) {
    params.set("remoteip", remoteIp);
  }

  let response: Response;
  try {
    response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });
  } catch (error) {
    console.error("reCAPTCHA siteverify request failed:", error);
    return {
      ok: false,
      status: 502,
      error: "Could not verify reCAPTCHA. Please try again.",
    };
  }

  if (!response.ok) {
    console.error("reCAPTCHA siteverify request failed:", response.status);
    return {
      ok: false,
      status: 502,
      error: "Could not verify reCAPTCHA. Please try again.",
    };
  }

  const data = (await response.json()) as SiteverifyResponse;
  const assessment = assessRecaptchaResponse(data, expectedAction);
  if (!assessment.ok) {
    console.error("reCAPTCHA verification failed:", {
      errors: data["error-codes"],
      action: data.action,
      score: data.score,
    });
  }
  return assessment;
}

export function assessRecaptchaResponse(
  data: SiteverifyResponse,
  expectedAction: string
): RecaptchaResult {
  const scoreTooLow =
    typeof data.score !== "number" || data.score < MIN_SCORE;

  if (!data.success || data.action !== expectedAction || scoreTooLow) {
    return {
      ok: false,
      status: 400,
      error: "reCAPTCHA verification failed. Please try again.",
    };
  }

  return { ok: true };
}

export function remoteIpFromHeaders(headers: Headers): string | undefined {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }

  const realIp = headers.get("x-real-ip")?.trim();
  return realIp || undefined;
}
