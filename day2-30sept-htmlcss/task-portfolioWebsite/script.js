// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Adjust for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');
    
    function highlightNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('user-name');
            const email = formData.get('mail-id');
            const message = formData.get('msg');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields!', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address!', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">×</button>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        `;
        
        notification.querySelector('button').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // Project filter functionality
    const projects = document.querySelectorAll('.cards');
    
    // Only add filter buttons if projects exist
    if (projects.length > 0) {
        const filterButtons = document.createElement('div');
        filterButtons.className = 'project-filters';
        filterButtons.innerHTML = `
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="react">React</button>
            <button class="filter-btn" data-filter="vue">Vue</button>
            <button class="filter-btn" data-filter="node">Node</button>
        `;
        
        const projectsHeader = document.querySelector('.container1 .section-header');
        if (projectsHeader) {
            projectsHeader.insertAdjacentElement('afterend', filterButtons);
            
            // Add styles for filter buttons
            const style = document.createElement('style');
            style.textContent = `
                .project-filters {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                    flex-wrap: wrap;
                }
                
                .filter-btn {
                    padding: 0.5rem 1.5rem;
                    border: 2px solid #334155;
                    background: transparent;
                    color: #cbd5e1;
                    border-radius: 25px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: 500;
                }
                
                .filter-btn:hover,
                .filter-btn.active {
                    background: #667eea;
                    border-color: #667eea;
                    color: white;
                    transform: translateY(-2px);
                }
                
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Filter functionality
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    projects.forEach(project => {
                        if (filter === 'all') {
                            project.style.display = 'block';
                            setTimeout(() => {
                                project.style.opacity = '1';
                                project.style.transform = 'translateY(0)';
                            }, 50);
                        } else {
                            const techs = project.querySelectorAll('.tech-tag');
                            let hasTech = false;
                            
                            techs.forEach(tech => {
                                if (tech.textContent.toLowerCase().includes(filter)) {
                                    hasTech = true;
                                }
                            });
                            
                            if (hasTech) {
                                project.style.display = 'block';
                                setTimeout(() => {
                                    project.style.opacity = '1';
                                    project.style.transform = 'translateY(0)';
                                }, 50);
                            } else {
                                project.style.opacity = '0';
                                project.style.transform = 'translateY(20px)';
                                setTimeout(() => {
                                    project.style.display = 'none';
                                }, 300);
                            }
                        }
                    });
                });
            });
        }
    }

    // Add hover effects to project cards
    projects.forEach(card => {
        card.style.transition = 'all 0.3s ease';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        z-index: 999;
        display: none;
    `;
    
    document.body.appendChild(scrollBtn);
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.cards, .about-section, .contact-wrapper');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    console.log('Portfolio JavaScript loaded successfully! 🚀');
});