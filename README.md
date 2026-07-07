# Raj Chaudhary — Premium Portfolio

A premium Apple-inspired personal portfolio built with **React.js**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📁 Adding Your Content

### Profile Photo
Drop your photo as: `public/images/profile.jpg`

### Certificate Images
Add to: `public/images/certificates/cert1.jpg`, `cert2.jpg`, etc.
Then update the list in `src/components/Certificates.jsx`.

### Project Screenshot
Add to: `public/images/projects/farmvaani.jpg`

### Resume
Drop as: `public/resume.pdf`

### Update Social Links
- **GitHub & LeetCode**: Update in `src/components/GitHubSection.jsx` and `Footer.jsx`
- **Email**: Update in `Contact.jsx` and `Footer.jsx`

## 📧 EmailJS Setup

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create a Service, Email Template, and get your Public Key
3. Copy `.env.example` → `.env`
4. Fill in your keys:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**EmailJS Template Variables** (use in your template):
- `{{name}}` — sender's name
- `{{email}}` — sender's email
- `{{message}}` — message content

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo in vercel.com
3. Add environment variables in Vercel dashboard
4. Deploy!

## 🎨 Tech Stack

- React.js + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React Icons
- EmailJS
# myportfolio
