This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

React + Node.js Auth0 Authentication Project

This project is a React frontend with Auth0 authentication and a Node.js backend. It uses Bootstrap for styling and supports role-based authentication.

🚀 Project Setup

1️⃣ Clone the Repository

git clone https://github.com/your-repo.git
cd your-repo

2️⃣ Install Dependencies

Backend:

cd server
npm install

Frontend:

cd ../frontend-react
npm install

🔐 Auth0 Configuration

3️⃣ Create an Auth0 Application

Sign up or log in to Auth0.

Navigate to Applications → Create Application.

Select Single Page Web Applications.

In the Settings tab, note down the Domain, Client ID, and Client Secret.

4️⃣ Configure Allowed URLs

Add these URLs in Auth0 Settings:

Allowed Callback URLs: http://localhost:5173

Allowed Logout URLs: http://localhost:5173

Allowed Web Origins: http://localhost:5173

5️⃣ Set Up Environment Variables

Backend (server/.env):

PORT=5000
MONGO_URI=your-mongodb-uri
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
AUTH0_AUDIENCE=https://your-auth0-domain/api/v2/
EMAIL_FROM=your-email@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password

Frontend (frontend-react/.env):

VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_AUDIENCE=https://your-auth0-domain/api/v2/

▶️ Running the Project

Start Backend

cd server
npm run dev

Start Frontend

cd frontend-react
npm run dev

Now, open http://localhost:5173 in your browser.

📌 Features

✅ Login & Logout with Auth0
✅ Fetch & Display User Roles
✅ Secure API with JWT Authentication
✅ Role-Based Access Control
✅ Email Notifications (SMTP / Nodemailer)
✅ Bootstrap UI
