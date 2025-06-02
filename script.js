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

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const navigationLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navigation
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Enhanced Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation to child elements
                const children = entry.target.querySelectorAll('.feature-card, .benefit-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.animationDelay = `${index * 0.1}s`;
                        child.classList.add('animate');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe section titles for animation
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('scroll-animate');
        observer.observe(title);
    });

    // Observe sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact form handling with enhanced animations
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const company = formData.get('company');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !company || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission with enhanced animation
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        submitButton.style.transform = 'scale(0.95)';
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            
            // Reset button with animation
            submitButton.style.transform = 'scale(1)';
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Add success animation to form
            contactForm.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                contactForm.style.animation = '';
            }, 500);
        }, 2000);
    });

    // Add focus effects to form inputs
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            this.style.animation = 'inputGlow 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
            this.style.animation = '';
        });
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNavLinks.classList.toggle('mobile-open');
            this.classList.toggle('active');
        });
    }

    // Ensure Let's Talk button works
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToContact();
        });
    }

    // Parallax effect for hero elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroParticles = document.querySelector('.hero-particles');
        const heroContent = document.querySelector('.hero-content');
        
        if (heroParticles && scrolled < window.innerHeight) {
            heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });

    // Enhanced icon hover effects
    const icons = document.querySelectorAll('.icon');
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

    // AI nodes interactive effect
    const aiNodes = document.querySelectorAll('.ai-node');
    aiNodes.forEach((node, index) => {
        node.addEventListener('mouseenter', function() {
            // Make all nodes pulse faster when one is hovered
            aiNodes.forEach(n => {
                n.style.animationDuration = '1.5s, 1s';
            });
        });
        
        node.addEventListener('mouseleave', function() {
            // Reset to normal speed
            aiNodes.forEach(n => {
                n.style.animationDuration = '3s, 2s';
            });
        });
    });

    // Add smooth reveal animation for benefit items on scroll
    const benefitObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.benefit-item').forEach(item => {
        benefitObserver.observe(item);
    });
});

// Helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element with enhanced animation
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#D4AF37' : '#dc3545'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        font-weight: 500;
        opacity: 0;
        transform: translateX(100%) scale(0.8);
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in with bounce effect
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Remove after delay with smooth animation
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Add CSS for mobile menu (inject styles)
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav-links.mobile-open {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            gap: 16px;
            animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

// Inject mobile menu styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet); 