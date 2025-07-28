# InqueriumWebsite: Full Setup & Deployment Guide

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Cloning the Repository](#cloning-the-repository)
- [Installing Dependencies](#installing-dependencies)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the App (Development)](#running-the-app-development)
- [Building & Running in Production](#building--running-in-production)
- [Email Notifications Setup](#email-notifications-setup)
- [Directory Structure](#directory-structure)
- [Updating Social Links & Images](#updating-social-links--images)
- [Common Commands](#common-commands)
- [Troubleshooting](#troubleshooting)
- [Deployment Notes](#deployment-notes)
- [Security](#security)

---

## Project Overview
This project is a professional-grade React SPA with a robust Express backend, PostgreSQL database, secure admin, dynamic content (blogs, careers), and production deployment capabilities. It features:
- Modern React (Vite, React Router, Framer Motion, Tailwind CSS)
- PostgreSQL via Prisma ORM
- Secure admin authentication (JWT, bcrypt)
- Email notifications (Gmail OAuth2 or SMTP)
- Full-featured blog, careers, and contact forms
- Production-ready deployment (EC2, Render, Railway, etc.)

---

## Prerequisites
- **Node.js** (v18+ recommended): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git**: [Download Git](https://git-scm.com/)
- **PostgreSQL** (v13+): [Download PostgreSQL](https://www.postgresql.org/download/)
- **(Optional) PM2** for production: `npm install -g pm2`

---

## Cloning the Repository
```sh
git clone <YOUR_REPO_URL>
cd InqueriumWebsite/inquerium_web
```

---

## Installing Dependencies
```sh
npm install
```

---

## Environment Variables
Create a `.env` file in `inquerium_web/` with the following content (edit values as needed):

```env
# Database
DATABASE_URL="postgresql://zacharynowroozi:GodSaveMe3$@localhost:5432/postgres"

# JWT
JWT_SECRET="supersecret"

# Admin user (for seeding)
ADMIN_USER="ruzimane"
ADMIN_PASSWORD="inquerium-GodSaveMe3$"

# Email (Gmail OAuth2 or SMTP)
GMAIL_CLIENT_ID="your-google-client-id"
GMAIL_CLIENT_SECRET="your-google-client-secret"
GMAIL_REFRESH_TOKEN="your-google-refresh-token"
GMAIL_USER="your-gmail-address@gmail.com"
RECIPIENT_EMAIL="team@inquerium.com"

# CORS
CORS_ORIGIN="http://localhost:5175"
```

**Note:**
- For Gmail OAuth2, see [Email Notifications Setup](#email-notifications-setup).
- For SMTP, use `SMTP_USER`, `SMTP_PASS`, `SMTP_HOST`, `SMTP_PORT` instead.

---

## Database Setup

### 1. Start PostgreSQL
- On Mac: `brew services start postgresql`
- On Linux: `sudo service postgresql start`
- On Windows: Use pgAdmin or services

### 2. Create the Database (if not exists)
```sh
psql -U zacharynowroozi
# In psql shell:
CREATE DATABASE postgres;
\q
```

### 3. Run Prisma Migrations
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Seed the Database (Admin User)
```sh
node prisma/seed.js
```

---

## Running the App (Development)

### 1. Start the Backend (Express API)
```sh
node server.js
```
- Runs on port 3001 by default.

### 2. Start the Frontend (Vite React App)
```sh
npm run dev
```
- Runs on port 5175 by default.

### 3. Access the App
- Open [http://localhost:5175](http://localhost:5175) in your browser.

---

## Building & Running in Production

### 1. Build the Frontend
```sh
npm run build
```
- This creates a `dist/` folder with the production build.

### 2. Serve the App in Production
```sh
NODE_ENV=production node server.js
```
- The backend will serve the static frontend from `dist/`.

### 3. (Optional) Use PM2 for Process Management
```sh
pm2 start server.js --name inquerium-backend
```

---

## Email Notifications Setup

### 1. Gmail OAuth2 (Recommended)
- Run the provided `oauth2_generate_tokens.js` script to get your refresh token.
- Update `.env` with the new token.
- Make sure your Google Cloud project has Gmail API enabled and the correct redirect URI.

### 2. SMTP (Alternative)
- Use SMTP credentials in `.env`:
  - `SMTP_USER`, `SMTP_PASS`, `SMTP_HOST`, `SMTP_PORT`

---

## Directory Structure
```
InqueriumWebsite/
  inquerium_web/
    app/                  # (Legacy Next.js, can ignore)
    components/           # React components (Navbar, Footer, etc.)
    lib/                  # Utility functions
    prisma/               # Prisma schema, migrations, seed script
    public/               # Static assets (SVGs, images)
    src/                  # Main React app (pages, components, assets)
      assets/             # Images (logo, headshots, etc.)
      components/         # UI and section components
      pages/              # React Router pages (Home, Blog, Careers, Admin, etc.)
    styles.css            # Tailwind base styles
    tailwind.config.js    # Tailwind config
    postcss.config.mjs    # PostCSS config
    vite.config.js        # Vite config (proxy, etc.)
    server.js             # Express backend
    .env                  # Environment variables (not committed)
    package.json          # Project dependencies and scripts
```

---

## Updating Social Links & Images
- **Social Links:**
  - Edit the relevant URLs in `src/components/sections/Team.jsx`, `Footer.jsx`, or `Contact.jsx`.
- **Images:**
  - Replace or add images in `src/assets/`.
  - Update imports in components as needed, e.g.:
    ```js
    import MyImage from "../assets/my_image.png";
    <img src={MyImage} alt="..." />
    ```

---

## Common Commands
- **Install dependencies:** `npm install`
- **Run dev server:** `npm run dev`
- **Run backend:** `node server.js`
- **Build for production:** `npm run build`
- **Run Prisma migrations:** `npx prisma migrate dev`
- **Open Prisma Studio:** `npx prisma studio`
- **Seed database:** `node prisma/seed.js`
- **Start with PM2:** `pm2 start server.js --name inquerium-backend`

---

## Troubleshooting
- **Vite not found:**
  - Make sure you run `npm install` before building.
- **CORS errors:**
  - Ensure `CORS_ORIGIN` in `.env` matches your frontend URL.
- **Database errors:**
  - Check your `DATABASE_URL` and that PostgreSQL is running.
- **Email errors:**
  - Double-check Gmail OAuth2 credentials and refresh token.
- **500 Internal Server Error:**
  - Check backend logs for details.

---

## Deployment Notes
- **EC2/Render/Railway:**
  - Clone repo, set up `.env`, install dependencies, run migrations, build frontend, start backend.
- **Domain & SSL:**
  - Use Cloudflare for DNS and SSL.
- **Process Management:**
  - Use PM2 or systemd for backend.

---

## Security
- Never commit `.env` or secrets to git.
- Use strong passwords and rotate tokens regularly.
- Use HTTPS in production.

---

## End-to-End Setup Example

```sh
# 1. Clone and enter project
git clone <YOUR_REPO_URL>
cd InqueriumWebsite/inquerium_web

# 2. Install dependencies
npm install

# 3. Set up .env (see above for template)

# 4. Set up database
npx prisma migrate dev --name init
npx prisma generate
node prisma/seed.js

# 5. Start backend
node server.js

# 6. Start frontend
npm run dev

# 7. Build for production
npm run build

# 8. Serve in production
NODE_ENV=production node server.js
```

---

**For any issues, check the Troubleshooting section or open an issue in the repository.**
