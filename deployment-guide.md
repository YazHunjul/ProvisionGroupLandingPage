# Deployment Guide for Provision Group Landing Page

## 📧 Email Form Setup Options

### Option 1: Netlify Forms (Recommended)

**Best for:** Netlify hosting (easiest setup)

✅ **Current Setup:** Your `index.html` is already configured for Netlify!

**Steps:**

1. Deploy to Netlify (see deployment steps below)
2. Go to your Netlify dashboard → Site settings → Forms
3. Enable form notifications
4. Add your email address for notifications
5. Test the form - submissions will appear in your Netlify dashboard

**Pros:** Free, no additional setup, spam protection included
**Cons:** Only works with Netlify hosting

---

### Option 2: Formspree (Universal)

**Best for:** Any hosting provider (GitHub Pages, Vercel, custom hosting)

**Steps:**

1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account (1000 submissions/month free)
3. Create a new form, get your form ID
4. Replace the contact section in `index.html` with the code from `contact-formspree.html`
5. Replace `YOUR_FORM_ID` with your actual form ID

**Pros:** Works with any hosting, easy setup, good free tier
**Cons:** Limited free submissions

---

### Option 3: EmailJS (Client-Side)

**Best for:** Pure static hosting without backend processing

**Steps:**

1. Go to [emailjs.com](https://emailjs.com)
2. Connect your email service (Gmail, Outlook, etc.)
3. Get your public key and service ID
4. Add EmailJS script to your HTML
5. Update JavaScript to use EmailJS API

**Pros:** Works anywhere, direct to your email
**Cons:** More complex setup, exposes email service

---

## 🚀 Deployment Options for provisiogroup.co

### Option A: Netlify (Recommended)

**Why Netlify:**

- Built-in form handling
- Easy custom domain setup
- Free SSL certificates
- CDN included
- Simple deployments

**Steps:**

1. Push your code to GitHub repository
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Connect your GitHub repo
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. Click "Deploy site"

**Custom Domain Setup:**

1. In Netlify dashboard: Site settings → Domain management
2. Click "Add custom domain"
3. Enter `provisiogroup.co`
4. Netlify will provide DNS records
5. Update your domain registrar's DNS:

   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

---

### Option B: Vercel

**Steps:**

1. Go to [vercel.com](https://vercel.com)
2. Import from GitHub
3. Deploy
4. Add custom domain in settings

---

### Option C: GitHub Pages

**Steps:**

1. Push to GitHub repository
2. Go to repo Settings → Pages
3. Enable GitHub Pages
4. Add custom domain

**Note:** Use Formspree for email functionality with GitHub Pages

---

## 🔧 Pre-Deployment Checklist

### ✅ Required Files:

- `index.html` ✅
- `styles.css` ✅
- `script.js` ✅
- `img/ProvisionLogo.png` ✅
- `README.md` ✅

### ✅ Email Form:

- [ ] Choose email solution (Netlify/Formspree/EmailJS)
- [ ] Configure form according to chosen solution
- [ ] Test form submission

### ✅ Domain Setup:

- [ ] Choose hosting provider
- [ ] Deploy website
- [ ] Configure custom domain DNS
- [ ] Enable SSL certificate

---

## 📱 Testing Before Going Live

1. **Form Testing:**

   - Submit test form
   - Verify email reception
   - Check spam folder

2. **Cross-Device Testing:**

   - Desktop browsers
   - Mobile devices
   - Tablet view

3. **Performance Check:**
   - Page load speed
   - Animation smoothness
   - Mobile responsiveness

---

## 🎯 Recommended Deployment Path

**For provisiogroup.co:**

1. **Choose Netlify** (easiest overall setup)
2. **Use Netlify Forms** (no additional configuration needed)
3. **Deploy from GitHub** (enables easy updates)
4. **Configure custom domain** (provisiogroup.co)
5. **Test everything** before announcing

**Timeline:** 30-60 minutes total setup time

---

## 📧 Email Notification Setup

Once deployed, you'll receive emails like this:

```
New Contact Form Submission - Provision Group

Name: John Smith
Email: john@company.com
Company: ABC Manufacturing
Message: We're interested in automating our HVAC service reports...

Submitted: 2024-01-15 14:30 UTC
```

## 🔒 Security Features Included

- Spam protection (honeypot field)
- Form validation
- HTTPS encryption
- CSRF protection (with proper backend)

Let me know which option you'd like to proceed with!
