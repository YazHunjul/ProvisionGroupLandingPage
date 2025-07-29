// Pro Vision Solutions Page Scripts

// Page transition on load
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});

// Smooth page transitions for navigation
document.querySelectorAll('a[href^="index.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.includes('#')) {
            // Let the browser handle anchor links
            return;
        }
        
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// Form handling for solutions contact form
const solutionsContactForm = document.getElementById('solutionsContactForm');
if (solutionsContactForm) {
    solutionsContactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(solutionsContactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        console.log('Solutions form submitted:', data);
        
        // Show success message
        alert(`Thank you for your interest in ${data.service}! We'll contact you within 24 hours to discuss your project.`);
        
        // Reset form
        solutionsContactForm.reset();
    });
}

// Animate service blocks on scroll
const serviceBlocks = document.querySelectorAll('.service-block');
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            serviceObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

serviceBlocks.forEach((block, index) => {
    block.style.opacity = '0';
    block.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
    block.style.transition = 'all 0.8s ease';
    serviceObserver.observe(block);
});

// Animate tech tags on hover
const techTags = document.querySelectorAll('.tech-tag');
techTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animate process steps
const processSteps = document.querySelectorAll('.process-step');
const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            processObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

processSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';
    step.style.transition = 'all 0.6s ease';
    processObserver.observe(step);
});

// Code preview typing effect
const codeLines = document.querySelectorAll('.code-line');
codeLines.forEach((line, index) => {
    line.style.opacity = '0';
    setTimeout(() => {
        line.style.opacity = '1';
        line.style.transition = 'opacity 0.3s ease';
    }, 200 + (index * 150));
});

// Neural network animation
const nodes = document.querySelectorAll('.node');
nodes.forEach((node, index) => {
    node.style.animationDelay = `${index * 0.2}s`;
});

// Add parallax effect to hero pattern
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroPattern = document.querySelector('.hero-pattern');
    if (heroPattern) {
        heroPattern.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current nav link
const currentPage = window.location.pathname.split('/').pop();
if (currentPage === 'solutions.html') {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.textContent === 'Solutions') {
            link.classList.add('active');
        }
    });
}

console.log('Pro Vision Solutions page initialized');