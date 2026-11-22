
const ALLOWED_ORIGIN = "https://air-the-gemini.netlify.app";

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Cache-Control": "no-store",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // Keep the Gmail workflow disconnected from public visitors.
  // A real connection requires visitor authentication and rate limits.
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      output:
        "Air The Gemini demo is online. You can preview the interface, but live AI responses and email sending are not enabled for public visitors.",
    }),
  };
};
