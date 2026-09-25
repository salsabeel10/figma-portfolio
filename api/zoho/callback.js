/* global process */

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "Authorization code not received",
    });
  }

  try {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      redirect_uri: process.env.ZOHO_REDIRECT_URI,
      code,
    });

    const response = await fetch(
      `https://accounts.zoho.com/oauth/v2/token?${params.toString()}`,
      {
        method: "POST",
      }
    );

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error("Zoho token error:", data);

      return res.status(400).json({
        success: false,
        message: "Failed to get Zoho tokens",
        error: data.error,
      });
    }

    console.log("Zoho refresh token generated successfully");

    return res.status(200).json({
      success: true,
      message: "Zoho tokens generated successfully",
      refresh_token: data.refresh_token,
      api_domain: data.api_domain,
    });
  } catch (error) {
    console.error("Zoho OAuth error:", error);

    return res.status(500).json({
      success: false,
      message: "Zoho OAuth failed",
    });
  }
}