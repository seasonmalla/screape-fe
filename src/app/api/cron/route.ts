import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
    console.log("Daily POST triggered");
    try {
        const secretKey = process.env.SECRET_KEY_SCRAPE;
        console.log("Environment variable loaded:", secretKey ? "Yes" : "No");
    
        if (!secretKey) {
            console.log("Secret key is not set in environment variables");
            throw new Error('SECRET_KEY_SCRAPE environment variable is not set');
        }

        console.log("Making request to scraping endpoint with key:", secretKey.substring(0, 5) + "...");
        const response = await fetch('https://scrape-git-main-season-mallas-projects.vercel.app/api/v1/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                secret_key_scrape: secretKey
            }),
        });

        console.log("Response status:", response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.log("Error response:", errorText);
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        }

        const data = await response.json();
        console.log("Success response:", data);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Cron job failed:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to execute cron job' },
            { status: 500 }
        );
    }
} 