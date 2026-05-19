const { createHmac, timingSafeEqual } = require("crypto");

const AUTH_SECRET = process.env.AUTH_SECRET ?? "change-me-in-production";

function signToken(ts) {
  return createHmac("sha256", AUTH_SECRET).update(String(ts)).digest("hex");
}

function verifyAuthToken(token) {
  if (typeof token !== "string") return false;
  const dot = token.lastIndexOf(".");
  if (dot === -1) return false;
  const ts = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = signToken(ts);
  try {
    return timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

function parseCookies(cookieHeader = "") {
  return Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [k, ...v] = c.trim().split("=");
      return [k.trim(), v.join("=").trim()];
    })
  );
}

exports.handler = async function (event) {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const cookies = parseCookies(event.headers.cookie || "");
  const authorized = verifyAuthToken(cookies.osg_forms_auth);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ authorized }),
  };
};
