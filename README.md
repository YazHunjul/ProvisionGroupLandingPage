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
