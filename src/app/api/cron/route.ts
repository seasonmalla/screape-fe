import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  console.log("Daily POST triggered!!");

  const secretKey = process.env.SECRET_KEY_SCRAPE;

  if (!secretKey) {
    console.log("Secret key is not set in environment variables");
    return NextResponse.json(
      {
        success: false,
        error: "SECRET_KEY_SCRAPE environment variable is not set",
      },
      { status: 500 }
    );
  }

  const endpoints = [
    "https://scrape-git-main-season-mallas-projects.vercel.app/api/v1/scrape",
    "https://scrape-git-main-season-mallas-projects.vercel.app/api/v1/sector-summary",
    "https://scrape-git-main-season-mallas-projects.vercel.app/api/v1/company-list",
  ];

  try {
    const results = [];

    for (const url of endpoints) {
      console.log(`Calling endpoint: ${url}`);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ secret_key_scrape: secretKey }),
      });

      console.log(`Response from ${url} - Status: ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.log(`Error from ${url}:`, errorText);
        throw new Error(`Failed on ${url}: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      results.push({ url, data });
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error("Cron job failed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to execute one or more cron jobs" },
      { status: 500 }
    );
  }
}
