import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  // Optionally, validate or process the data here

  // Forward to Netlify (required for Netlify Forms detection)
  const data = new URLSearchParams();
  formData.forEach((value, key) => {
    data.append(key, value.toString());
  });

  // Replace with your Netlify site form endpoint if needed
  const NETLIFY_FORM_ENDPOINT = "https://lpscrimv2.netlify.app";

  try {
    await fetch(NETLIFY_FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}