/**
 * Helper function to initiate Stripe Checkout
 * @param priceId - The Stripe Price ID
 * @param metadata - Optional metadata to pass to the checkout session
 * @param successUrl - Optional custom success URL (defaults to /donate)
 * @param cancelUrl - Optional custom cancel URL (defaults to /donate)
 */
export async function startCheckout(
  priceId: string,
  metadata?: Record<string, any>,
  successUrl?: string,
  cancelUrl?: string
) {
  try {
    const baseUrl = window.location.origin;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId,
        successUrl: successUrl || `${baseUrl}/donate?success=true`,
        cancelUrl: cancelUrl || `${baseUrl}/donate?canceled=true`,
        metadata: metadata || {},
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to create checkout session");
    }

    const data = await response.json();
    
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error("No checkout URL returned");
    }
  } catch (error) {
    console.error("Error starting checkout:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    alert(`Failed to start checkout: ${errorMessage}`);
  }
}

