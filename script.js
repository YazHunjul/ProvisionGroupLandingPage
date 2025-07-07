// Smooth scrolling function
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize website functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initHeroInteractions();
    initContactForm();
    initCaseStudies();
    initTeamInteractions();
    initTestimonialCarousel();
    initParallaxEffects();
    initMobileMenu();
    initStatCounters();
    
    console.log('🚀 Provision Group website initialized successfully!');
});

// Navigation functionality
function initNavigation() {
    // Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                const mobileNav = document.querySelector('.nav-links');
                if (mobileNav.classList.contains('mobile-open')) {
                    mobileNav.classList.remove('mobile-open');
                    document.querySelector('.mobile-menu-btn').classList.remove('active');
                }
                
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active navigation link
                updateActiveNavLink(targetId);
            }
        });
    });

    // Navigation scroll effect
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Change nav background based on scroll position
        if (scrollTop > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
        
        // Update active section in navigation
        updateActiveSection();
        
        lastScrollTop = scrollTop;
    });
}

// Update active navigation link
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
        }
    });
}

// Update active section based on scroll position
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Enhanced scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation to child elements
                const animatableChildren = entry.target.querySelectorAll(
                    '.feature-card, .case-study-card, .industry-card, .team-member, .testimonial-card, .result-stat, .process-step'
                );
                
                animatableChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.animationDelay = `${index * 0.1}s`;
                        child.classList.add('animate');
                    }, index * 100);
                });
                
                // Trigger stat counters if this is the results section
                if (entry.target.id === 'results') {
                    animateStatCounters();
                }
            }
        });
    }, observerOptions);

    // Observe all sections and titles
    const elementsToAnimate = document.querySelectorAll('.section, .section-title, .hero-content');
    elementsToAnimate.forEach(element => {
        element.classList.add('scroll-animate');
        observer.observe(element);
    });
}

// Hero interactions
function initHeroInteractions() {
    // CTA button interactions
    const primaryCTA = document.querySelector('.cta-button.primary');
    const secondaryCTA = document.querySelector('.cta-button.secondary');
    
    if (primaryCTA) {
        primaryCTA.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToContact();
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
    
    if (secondaryCTA) {
        secondaryCTA.addEventListener('click', function(e) {
            e.preventDefault();
            const caseStudiesSection = document.getElementById('case-studies');
            if (caseStudiesSection) {
                caseStudiesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Hero stats animation on load
    setTimeout(() => {
        const statNumbers = document.querySelectorAll('.hero-stats .stat-number');
        statNumbers.forEach((stat, index) => {
            setTimeout(() => {
                stat.style.animation = 'statPop 0.6s ease';
            }, index * 200);
        });
    }, 1000);
}

// Enhanced contact form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Form submission handling
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('_replyto');
        const company = formData.get('company');
        const industry = formData.get('industry');
        const message = formData.get('message');
        
        // Enhanced validation
        const validationErrors = validateForm({ name, email, company, industry, message });
        
        if (validationErrors.length > 0) {
            showNotification(validationErrors.join('<br>'), 'error');
            return;
        }
        
        // Get reCAPTCHA token
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            showNotification('Please complete the reCAPTCHA verification.', 'error');
            return;
        }
        formData.append('g-recaptcha-response', recaptchaResponse);
        
        // Enhanced form submission with loading state
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.innerHTML = '<span>Sending...</span> ⏳';
        submitButton.disabled = true;
        submitButton.style.transform = 'scale(0.98)';
        
        try {
            // Submit to Formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const result = await response.json();
            
            if (response.ok) {
                showNotification(
                    `Thank you, ${name}! We'll get back to you within 24 hours with a customized automation strategy for ${company}.`,
                    'success'
                );
                
                contactForm.reset();
                grecaptcha.reset(); // Reset reCAPTCHA
                
                // If _next URL is specified, redirect after a short delay
                const nextUrl = contactForm.querySelector('input[name="_next"]')?.value;
                if (nextUrl) {
                    setTimeout(() => {
                        window.location.href = nextUrl;
                    }, 2000);
                }
            } else {
                throw new Error(result.error || 'Form submission failed. Please try again.');
            }
        } catch (error) {
            showNotification(error.message, 'error');
            grecaptcha.reset(); // Reset reCAPTCHA on error
        } finally {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.transform = '';
            
            // Success animation
            contactForm.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                contactForm.style.animation = '';
            }, 500);
        }
    });

    // Enhanced form field interactions
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    formInputs.forEach(input => {
        // Focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            this.style.animation = 'inputGlow 0.3s ease';
        });
        
        // Blur effects
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
            this.style.animation = '';
        });
        
        // Real-time validation
        input.addEventListener('input', function() {
            validateField(this);
        });
    });
}

// Form validation
function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name (at least 2 characters)');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.company || data.company.trim().length < 2) {
        errors.push('Please enter a valid company name');
    }
    
    if (!data.industry) {
        errors.push('Please select your industry');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a detailed message (at least 10 characters)');
    }
    
    return errors;
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Remove existing error styles
    field.classList.remove('error');
    
    // Validate based on field type
    switch (field.type) {
        case 'email':
            isValid = isValidEmail(value);
            break;
        case 'text':
            if (field.name === 'name' || field.name === 'company') {
                isValid = value.length >= 2;
            }
            break;
        case 'textarea':
            isValid = value.length >= 10;
            break;
    }
    
    // Apply error styling if invalid
    if (!isValid && value.length > 0) {
        field.classList.add('error');
    }
    
    return isValid;
}

// Case studies interactions
function initCaseStudies() {
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    
    caseStudyCards.forEach(card => {
        const viewButton = card.querySelector('.view-case-btn');
        
        if (viewButton) {
            viewButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const title = card.querySelector('.case-study-title').textContent;
                showCaseStudyModal(title, card);
            });
        }
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Case study modal (placeholder - you can expand this)
function showCaseStudyModal(title, cardElement) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title} - Full Case Study</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>This is where the detailed case study would be displayed.</p>
                <p>Including project timeline, challenges, solutions, and detailed results.</p>
                <div class="modal-cta">
                    <button class="cta-button primary" onclick="scrollToContact(); closeModal()">
                        Discuss Your Project
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Close functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => closeModal());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    // Make closeModal globally accessible
    window.closeModal = closeModal;
}

// Team interactions
function initTeamInteractions() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        const socialLinks = member.querySelectorAll('.social-link');
        
        // Add click tracking for social links
        socialLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const memberName = member.querySelector('.member-name').textContent;
                const platform = this.textContent;
                
                console.log(`📊 Social link clicked: ${memberName} - ${platform}`);
                
                // Here you would typically open the actual social profile
                showNotification(`Opening ${memberName}'s ${platform} profile...`, 'info');
            });
        });
        
        // Enhanced hover animations
        member.addEventListener('mouseenter', function() {
            const photo = this.querySelector('.member-photo');
            photo.style.transform = 'scale(1.05)';
        });
        
        member.addEventListener('mouseleave', function() {
            const photo = this.querySelector('.member-photo');
            photo.style.transform = '';
        });
    });
}

// Testimonial carousel (basic implementation)
function initTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    // Auto-rotate testimonials (subtle effect)
    setInterval(() => {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.opacity = index === currentTestimonial ? '1' : '0.7';
            testimonial.style.transform = index === currentTestimonial ? 'scale(1.02)' : 'scale(1)';
        });
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }, 5000);
}

// Parallax effects
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Hero parallax
        const heroParticles = document.querySelector('.hero-particles');
        const heroContent = document.querySelector('.hero-content');
        
        if (heroParticles && scrolled < window.innerHeight) {
            heroParticles.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
        
        // Background parallax for sections with background images
        const bgSections = document.querySelectorAll('.contact-section');
        bgSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const bgImage = section.querySelector('.contact-bg-image');
                if (bgImage) {
                    bgImage.style.transform = `translateY(${(rect.top - window.innerHeight) * 0.5}px)`;
                }
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && mobileNavLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNavLinks.classList.toggle('mobile-open');
            this.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileNavLinks.contains(e.target)) {
                mobileNavLinks.classList.remove('mobile-open');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// Animated stat counters
function initStatCounters() {
    // This will be triggered by scroll animation
}

function animateStatCounters() {
    const statNumbers = document.querySelectorAll('.result-stat .stat-number, .hero-stats .stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent.trim();
        const isPercentage = finalValue.includes('%');
        const isTime = finalValue.includes('/');
        const isNumber = !isNaN(parseFloat(finalValue));
        
        if (isNumber && !isTime) {
            const numericValue = parseFloat(finalValue);
            stat.textContent = '0' + (isPercentage ? '%' : '');
            animateCounter(stat, 0, numericValue, 2000, isPercentage);
        }
    });
}

function animateCounter(element, start, end, duration, isPercentage = false) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easeOutCubic for smooth animation
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * easeProgress);
        
        element.textContent = isPercentage ? `${current}%` : current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Ensure final value is exactly what was intended
            element.textContent = isPercentage ? `${end}%` : end;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Enhanced icon hover effects
function initIconEffects() {
    const icons = document.querySelectorAll('.icon, .feature-icon, .industry-icon, .benefit-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'iconPulse 0.6s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#ff4757' : type === 'success' ? '#2ed573' : '#5352ed'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for mobile menu animation and error states
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    .nav-links.mobile-open {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        padding: 20px;
        animation: slideDown 0.3s ease;
    }
    
    .form-group input.error,
    .form-group textarea.error,
    .form-group select.error {
        border-color: #ff4757 !important;
        box-shadow: 0 0 0 3px rgba(255, 71, 87, 0.1) !important;
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes iconPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes inputGlow {
        0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
        100% { box-shadow: 0 0 0 8px rgba(212, 175, 55, 0); }
    }
    
    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
    }
`;

document.head.appendChild(dynamicStyles);

// Initialize everything when the script loads
console.log('🎯 Provision Group enhanced functionality loaded!');

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            if (window.closeModal) window.closeModal();
        });
    }
});

// Add smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@v2.0.0/dist/smoothscroll.min.js';
    document.head.appendChild(script);
} 