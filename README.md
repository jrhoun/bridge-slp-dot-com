# Bridge Speech Therapy Website Migration (Vercel Ready)

This repository contains the complete 7-page modern replacement website for **Bridge Speech Therapy** ([bridgeslp.com](https://www.bridgeslp.com/)), optimized for zero-cost, blazing-fast hosting on **Vercel**.

---

## 🚀 Quick Start (Local Preview)

To run the site locally:

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser to preview all pages.

---

## ⚡ How to Deploy to Vercel (100% Free)

### Option 1: Vercel GitHub Integration (Recommended)
1. Push this folder to a new GitHub repository (e.g. `bridge-slp-website`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New" → "Project"**.
3. Select your GitHub repository.
4. Vercel will automatically detect **Vite** as the framework.
5. Click **"Deploy"**. Your site will be live on a `.vercel.app` URL within ~20 seconds!

### Option 2: Deploy directly via Vercel CLI
```bash
npx vercel
```

---

## 🌐 Custom Domain Setup (`bridgeslp.com`)

1. In your Vercel Dashboard, go to your project → **Settings → Domains**.
2. Add `bridgeslp.com` and `www.bridgeslp.com`.
3. Vercel will show the DNS records to add at your domain registrar (e.g., Squarespace Domains, Namecheap, Cloudflare, or GoDaddy):
   - **A Record**: Point `@` to `76.76.21.21`
   - **CNAME Record**: Point `www` to `cname.vercel-dns.com`
4. SSL certificates will automatically generate for free.

---

## ✉️ Contact Form Setup (Web3Forms / Email)

The contact form in `contact-us.html` is pre-configured with AJAX submission and automatic `mailto:hello@bridgeslp.com` fallback.

To receive submissions directly to `hello@bridgeslp.com` via Web3Forms (Free 250 submissions/month):
1. Get a free API access key at [web3forms.com](https://web3forms.com) (enter `hello@bridgeslp.com`).
2. Open [contact-us.html](file:///home/jrhoun/projects/bridge-slp-dot-com/contact-us.html) and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key on line 78:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACTUAL_ACCESS_KEY">
   ```

---

## 📂 Project Structure

- `index.html` — Home page (Hero, 4 Pillars, "Does my child need help?", CTAs)
- `about.html` — About Alicia (Bio, credentials, philosophy)
- `services.html` — Speech & Language services breakdown
- `payment.html` — Private pay policy, superbills, & CMS Good Faith Estimate
- `faq.html` — Accordion FAQ (service area, insurance, evaluations)
- `resources.html` — Parent developmental resources (ASHA, CDC, GLP links)
- `contact-us.html` — Consultation form & contact details
- `src/style.css` — Modern design system (Poppins & Esteban fonts, custom variables)
- `src/main.js` — Accordion logic, mobile navigation drawer, AJAX form submission
- `vercel.json` — Vercel security headers and clean URL routing
