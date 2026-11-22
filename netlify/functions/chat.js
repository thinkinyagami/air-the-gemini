
const ALLOWED_ORIGIN = "https://air-the-gemini.netlify.app";

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Cache-Control": "no-store",
  };

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // Keep the email-sending workflow disconnected until
  // visitor authentication and rate limits are configured.
  return {
    statusCode: 503,
    headers,
    body: JSON.stringify({
      error: "Live AI chat is not enabled yet.",
    }),
  };
};
