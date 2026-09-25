/* global process */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, subject, message, recaptchaToken } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return res.status(400).json({
        success: false,
        message: "reCAPTCHA verification required.",
      });
    }

    const captchaParams = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
    });

    const captchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: captchaParams.toString(),
      },
    );

    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      console.error(
        "reCAPTCHA verification failed:",
        captchaData["error-codes"],
      );

      return res.status(400).json({
        success: false,
        message: "reCAPTCHA verification failed.",
      });
    }

    // 1. Get a fresh Zoho access token
    const tokenParams = new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type: "refresh_token",
    });

    const tokenResponse = await fetch(
      `https://accounts.zoho.com/oauth/v2/token?${tokenParams.toString()}`,
      {
        method: "POST",
      },
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      console.error("Zoho access token error:", tokenData);

      return res.status(500).json({
        success: false,
        message: "Unable to authenticate with Zoho CRM.",
      });
    }

    const accessToken = tokenData.access_token;

    // 2. Create the Lead in Zoho CRM
    const zohoResponse = await fetch("https://www.zohoapis.com/crm/v8/Leads", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Last_Name: name,
            Email: email,
            Phone: phone || "",
            Description: [
              subject ? `Subject: ${subject}` : "",
              message ? `Message: ${message}` : "",
            ]
              .filter(Boolean)
              .join("\n\n"),
            Lead_Source: "Portfolio Website",
          },
        ],
      }),
    });

    const zohoData = await zohoResponse.json();

    // 3. Check Zoho response
    const leadResult = zohoData?.data?.[0];

    if (!zohoResponse.ok || !leadResult || leadResult.status !== "success") {
      console.error("Zoho Lead creation error:", zohoData);

      return res.status(500).json({
        success: false,
        message: "Unable to create lead in Zoho CRM.",
      });
    }

    // 4. Return success to React
    return res.status(200).json({
      success: true,
      message: "Form submitted successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}
