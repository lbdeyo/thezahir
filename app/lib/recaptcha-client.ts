const RECAPTCHA_ACTION = "contact";
const LOAD_TIMEOUT_MS = 10000;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

function waitForRecaptcha(): Promise<void> {
  return new Promise((resolve, reject) => {
    const deadline = Date.now() + LOAD_TIMEOUT_MS;

    const tick = () => {
      if (window.grecaptcha?.execute) {
        window.grecaptcha.ready(() => resolve());
        return;
      }

      if (Date.now() >= deadline) {
        reject(new Error("reCAPTCHA failed to load"));
        return;
      }

      window.setTimeout(tick, 100);
    };

    tick();
  });
}

export async function executeRecaptcha(siteKey: string): Promise<string> {
  await waitForRecaptcha();
  return window.grecaptcha!.execute(siteKey, { action: RECAPTCHA_ACTION });
}
