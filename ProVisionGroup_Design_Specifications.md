# Pro Vision Group Website Design Specifications

## Brand Analysis
- **Logo**: Elegant gold typography with serif font
- **Brand Colors**: 
  - Primary: Gold (#D4AF37 or similar)
  - Background: Clean white/light backgrounds
  - Text: Dark grays/blacks for contrast
- **Brand Personality**: Professional, prestigious, visionary, trustworthy

## Design System Based on BladeAir Aesthetic

### Color Palette
```css
:root {
  /* Primary Brand Colors */
  --color-primary: #D4AF37;        /* Gold from logo */
  --color-primary-light: #E5C558;  /* Lighter gold */
  --color-primary-dark: #B8941F;   /* Darker gold */
  
  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-100: #F8F9FA;
  --color-gray-200: #E9ECEF;
  --color-gray-300: #DEE2E6;
  --color-gray-400: #CED4DA;
  --color-gray-500: #ADB5BD;
  --color-gray-600: #6C757D;
  --color-gray-700: #495057;
  --color-gray-800: #343A40;
  --color-gray-900: #212529;
  
  /* Accent Colors */
  --color-accent-blue: #0066CC;
  --color-accent-green: #28A745;
  --color-accent-red: #DC3545;
  
  /* Shadows & Effects */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 16px rgba(0,0,0,0.15);
  --shadow-xl: 0 16px 32px rgba(0,0,0,0.2);
}
```

### Typography
```css
:root {
  /* Font Families */
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-heading: 'Playfair Display', Georgia, serif; /* For headings to match logo style */
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 4rem;
  
  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Spacing System
```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
}
```

## Website Structure

### 1. Navigation (Inspired by BladeAir)
- **Fixed header** with transparent-to-solid scroll effect
- **Logo** on the left (Pro Vision Group in gold)
- **Menu items** on the right with hover effects
- **Mobile menu** with elegant hamburger animation
- **CTA button** with gold accent

### 2. Hero Section
- **Full-screen height** with gradient overlay
- **Large headline** with serif font (matching logo style)
- **Subheadline** in clean sans-serif
- **Dual CTA buttons** (primary gold, secondary outlined)
- **Subtle animation** on scroll (parallax or fade-in)
- **Background options**: Professional office imagery or abstract patterns

### 3. Services Section
- **Grid layout** (3 columns on desktop, 1 on mobile)
- **Icon boxes** with gold accents
- **Hover effects** with subtle shadows
- **Brief descriptions** with "Learn More" links

### 4. About Section
- **Split layout**: Image on one side, content on the other
- **Company values** in elegant cards
- **Timeline** or milestones with gold accents
- **Team preview** with professional headshots

### 5. Portfolio/Case Studies
- **Masonry grid** or card layout
- **Hover overlays** with project details
- **Filter categories** with smooth transitions
- **Modal or dedicated pages** for full case studies

### 6. Contact Section
- **Split design**: Contact form + Company info
- **Interactive map** integration
- **Social media links** with gold hover effects
- **Professional contact details**

### 7. Footer
- **Multi-column layout** with company info
- **Quick links** organized by category
- **Newsletter signup** with gold accent
- **Copyright and legal links**

## Component Specifications

### Buttons
```css
.btn {
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: white;
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 8px;
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

### Navigation
```css
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.nav.scrolled {
  box-shadow: var(--shadow-md);
}

.nav-link {
  color: var(--color-gray-700);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

## Animations & Interactions

### Scroll Animations
- **Fade in up** for content sections
- **Parallax** for hero backgrounds
- **Number counters** for statistics
- **Progress bars** for skills/achievements

### Hover Effects
- **Scale transform** for images
- **Color transitions** for links
- **Shadow elevation** for cards
- **Gradient shifts** for buttons

### Loading States
- **Skeleton screens** for content
- **Shimmer effects** for placeholders
- **Progress indicators** for forms

## Responsive Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 768px) { /* Small Desktop */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

## Accessibility Features
- **ARIA labels** for all interactive elements
- **Keyboard navigation** support
- **Focus indicators** with gold outline
- **Alt text** for all images
- **Semantic HTML** structure
- **Color contrast** meeting WCAG AA standards

## Performance Optimization
- **Lazy loading** for images
- **Code splitting** for JavaScript
- **CSS purging** for unused styles
- **Image optimization** (WebP with fallbacks)
- **Caching strategies** for assets
- **Progressive enhancement** approach

## Next Steps
1. Create wireframes based on this specification
2. Develop component library
3. Build page templates
4. Implement responsive layouts
5. Add animations and interactions
6. Test across devices and browsers
7. Optimize for performance
8. Deploy and monitor