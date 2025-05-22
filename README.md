# Scraping Cron Job

This Next.js application is configured to make daily API calls to a scraping endpoint using Vercel's cron jobs feature.

## Features

- Daily automated API calls to the scraping endpoint
- Edge runtime for optimal performance
- Error handling and logging
- Vercel deployment ready

## Deployment

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add the following environment variable in your Vercel project settings:
   - `SECRET_KEY_SCRAPE`: Your secret key for the scraping API
4. Deploy the project

The cron job will automatically run once per day at midnight UTC.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following content:
```
SECRET_KEY_SCRAPE="your-secret-key-here"
```

3. Run the development server:
```bash
npm run dev
```

4. Test the cron endpoint:
```bash
curl http://localhost:3000/api/cron
```

## Environment Variables

The following environment variable is required:

- `SECRET_KEY_SCRAPE`: The secret key used for authenticating with the scraping API

Make sure to set this environment variable in your Vercel project settings before deploying.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
