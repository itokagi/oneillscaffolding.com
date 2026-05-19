exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "osg_forms_auth=; HttpOnly; SameSite=Strict; Max-Age=0; Path=/",
    },
    body: JSON.stringify({ success: true }),
  };
};
