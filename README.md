# Provision Group Landing Page

A modern, minimal landing page for Provision Group - a software company that builds custom automation tools for businesses, starting with the HVAC industry.

## Features

- **Modern Design**: Clean, professional layout with white and gold color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle hover effects and smooth transitions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper HTML structure and meta tags

## Sections

1. **Hero Section**: Eye-catching headline with clear value proposition
2. **What We Do**: Three key service offerings with icons
3. **AI Integration**: Detailed section about AI capabilities with animated visual
4. **Why Choose Us**: Five key benefits and differentiators
5. **Contact Form**: Clean, responsive contact form
6. **Footer**: Simple footer with logo and copyright

## Setup Instructions

1. **Logo**: Replace `logo.png` with your actual Provision Group gold logo
2. **Customize Content**: Update any text content in `index.html` as needed
3. **Colors**: Modify the CSS custom properties in `styles.css` to adjust colors
4. **Contact Form**: Integrate with your preferred form handling service

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactions and animations
├── logo.png           # Placeholder for your logo (replace this)
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with Grid, Flexbox, and CSS Variables
- **JavaScript**: Vanilla JS for interactions and animations
- **Inter Font**: Clean, modern typography from Google Fonts

## Color Palette

- **Primary Gold**: #D4AF37
- **Light Gold**: #F4E4A6
- **Dark Gold**: #B8941F
- **White**: #FFFFFF
- **Off White**: #FAFAFA
- **Gray Light**: #F8F9FA
- **Gray Medium**: #6C757D
- **Gray Dark**: #343A40
- **Black**: #1A1A1A

## Customization

### Updating Colors

To change the color scheme, modify the CSS custom properties in `styles.css`:

```css
:root {
  --primary-gold: #d4af37;
  --gold-light: #f4e4a6;
  --gold-dark: #b8941f;
  /* Add or modify colors as needed */
}
```

### Adding Your Logo

1. Save your logo as `logo.png` in the root directory
2. Ensure it's optimized for web (preferably under 100KB)
3. The logo should work well at 40px height for desktop navigation

### Form Integration

The contact form currently shows a success message on submission. To integrate with a real backend:

1. Replace the form submission code in `script.js`
2. Add your API endpoint or service (e.g., Netlify Forms, Formspree, etc.)
3. Update the form action and method attributes in `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal unused styles
- Lazy loading animations using Intersection Observer
- Minimal JavaScript for enhanced performance
- Web fonts loaded efficiently with preconnect

## Deployment

This is a static website that can be deployed to any hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a GitHub repository
- **Traditional hosting**: Upload files via FTP

## License

This landing page template is created for Provision Group. All rights reserved.

---

_Built with ❤️ for modern web standards and optimal user experience._

# ProvisionGroup-LandingPage

# ProvisionGroupLandingPage

# ProvisionGroupLandingPage

# ProvisionGroupLandingPage

# Provision Group Website - Image Implementation Guide

## 🎯 Image Requirements & File Naming

### **1. Hero Section**

- **File:** `hero-background.jpg` (1920x1080px)
- **Current placeholder:** `https://via.placeholder.com/1920x1080/1a1a1a/C5A572?text=Modern+Industrial+Automation+Facility`
- **Replace in:** `index.html` line ~45

### **2. Trust Section - Client Logos**

- **Files:** `client-logo-1.png` to `client-logo-5.png` (180x60px)
- **Current placeholders:** `https://via.placeholder.com/180x60/f8f9fa/6c757d?text=Company+Logo+1`
- **Replace in:** `index.html` lines ~85-89

### **3. Feature Images**

- **File 1:** `ai-document-processing.jpg` (400x250px)
- **File 2:** `custom-erp-dashboard.jpg` (400x250px)
- **File 3:** `automated-reporting.jpg` (400x250px)
- **Replace in:** `index.html` lines ~110, 125, 140

### **4. Case Study Images**

- **File 1:** `case-study-hvac.jpg` (500x300px)
- **File 2:** `case-study-construction.jpg` (500x300px)
- **File 3:** `case-study-manufacturing.jpg` (500x300px)
- **Replace in:** `index.html` lines ~185, 210, 235

### **5. Team Photos**

- **File 1:** `team-ceo.jpg` (300x300px)
- **File 2:** `team-cto.jpg` (300x300px)
- **File 3:** `team-vp-engineering.jpg` (300x300px)
- **File 4:** `team-business-dev.jpg` (300x300px)
- **Replace in:** `index.html` lines ~320, 340, 360, 380

### **6. Industry Images**

- **File 1:** `industry-hvac.jpg` (400x200px)
- **File 2:** `industry-construction.jpg` (400x200px)
- **File 3:** `industry-manufacturing.jpg` (400x200px)
- **File 4:** `industry-energy.jpg` (400x200px)
- **Replace in:** `index.html` lines ~275, 290, 305, 320

### **7. Process Step Images**

- **File 1:** `process-discovery.jpg` (150x150px)
- **File 2:** `process-design.jpg` (150x150px)
- **File 3:** `process-build.jpg` (150x150px)
- **File 4:** `process-deploy.jpg` (150x150px)
- **Replace in:** `index.html` lines ~420, 435, 450, 465

### **8. Testimonial Photos**

- **File 1:** `client-photo-1.jpg` (80x80px)
- **File 2:** `client-photo-2.jpg` (80x80px)
- **File 3:** `client-photo-3.jpg` (80x80px)
- **Replace in:** `index.html` lines ~510, 530, 550

### **9. Results Section Icons**

- **File 1:** `stat-icon-time.png` (100x100px)
- **File 2:** `stat-icon-accuracy.png` (100x100px)
- **File 3:** `stat-icon-roi.png` (100x100px)
- **File 4:** `stat-icon-247.png` (100x100px)
- **Replace in:** `index.html` lines ~580, 590, 600, 610

### **10. Contact Section**

- **File 1:** `contact-background.jpg` (1920x600px)
- **File 2:** `office-photo.jpg` (400x250px)
- **Replace in:** `index.html` lines ~635, 670

## 🚀 Quick Replace Instructions

1. **Save all images** in the `img/` folder
2. **Find and replace** placeholder URLs with your image paths:

```html
<!-- BEFORE -->
<img src="https://via.placeholder.com/..." alt="..." />

<!-- AFTER -->
<img src="img/your-image-name.jpg" alt="..." />
```

## 📱 Image Optimization Tips

- **File formats:** Use JPG for photos, PNG for logos/graphics
- **File sizes:** Keep under 500KB for fast loading
- **Dimensions:** Follow the sizes listed above for best quality
- **Compression:** Use tools like TinyPNG to optimize file sizes

## 🎨 ChatGPT Image Generation Prompts

### Hero Background:

"Modern industrial automation facility with sleek machinery, digital displays, and warm golden lighting. Professional, high-tech atmosphere. Wide panoramic view, photorealistic style."

### Case Studies:

"Professional HVAC dashboard interface showing automation controls, charts, and data analytics. Clean UI design with golden accents. Screenshot style."

### Team Photos:

"Professional headshot of confident [description] in modern business attire. Clean background, executive portrait style."

### Industry Images:

"Modern [industry] environment with advanced technology, clean professional setting, and digital monitoring systems."

## 📧 Contact Information to Update

Don't forget to update these placeholder contact details:

- **Email:** hello@provisiongroup.ae
- **Phone:** +971 4 XXX XXXX
- **Address:** Dubai Internet City, UAE

---

## 🎯 Priority Order for Implementation

1. **Hero background** (most impactful)
2. **Team photos** (builds trust)
3. **Case study images** (shows results)
4. **Industry images** (demonstrates expertise)
5. **Client logos** (social proof)
6. **Remaining images** (polish and details)

Once you have the images, simply replace the placeholder URLs with your image file paths and your website will look absolutely professional and amazing! 🚀
