export default function handler(req, res) {
  const { code, location } = req.query;

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "Authorization code not received",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Zoho authorization successful",
    location,
  });
}