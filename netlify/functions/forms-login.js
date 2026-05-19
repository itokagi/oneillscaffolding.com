const bcrypt = require("bcryptjs");
const { createHmac, timingSafeEqual } = require("crypto");

const FORMS_USERNAME = "info@oneillscaffolding.com";
const FORMS_PASSWORD_HASH = "$2b$10$UVoZOEAKCFRm34az8Mua3e0mzgLlqrCdsNKid.AOXaPtD0HfCUn/u";
const AUTH_SECRET = process.env.AUTH_SECRET ?? "change-me-in-production";

function signToken(ts) {
  return createHmac("sha256", AUTH_SECRET).update(String(ts)).digest("hex");
}

function makeAuthToken() {
  const ts = Date.now();
  return `${ts}.${signToken(ts)}`;
}

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { username, password } = JSON.parse(event.body || "{}");

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      username.toLowerCase().trim() !== FORMS_USERNAME ||
      !(await bcrypt.compare(password, FORMS_PASSWORD_HASH))
    ) {
      return {
        statusCode: 401,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid credentials" }),
      };
    }

    const token = makeAuthToken();
    const isProd = process.env.NODE_ENV === "production";

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `osg_forms_auth=${token}; HttpOnly; ${isProd ? "Secure; " : ""}SameSite=Strict; Max-Age=86400; Path=/`,
      },
      body: JSON.stringify({ success: true }),
    };
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Bad request" }),
    };
  }
};
