const TO = "trey@oneillscaffolding.com.au";

export async function POST(request) {
  try {
    const body = await request.json();
    return Response.json({ ok: true, keys: Object.keys(body) });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
