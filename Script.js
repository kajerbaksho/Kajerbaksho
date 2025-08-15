// script.js for KajerBaksho

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });

    // Tool search functionality
    const toolSearch = document.getElementById('toolSearch');
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        toolCards.forEach(card => {
            const toolName = card.getAttribute('data-tool-name').toLowerCase();
            const toolTitle = card.querySelector('h4').textContent.toLowerCase();
            const toolDesc = card.querySelector('p').textContent.toLowerCase();
            
            if (toolName.includes(searchTerm) || 
                toolTitle.includes(searchTerm) || 
                toolDesc.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });

    // Tool button functionality - would be expanded for each tool
    const toolButtons = document.querySelectorAll('.use-tool-btn');
    
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolCard = this.closest('.tool-card');
            const toolName = toolCard.querySelector('h4').textContent;
            
            // In a real implementation, this would redirect to the specific tool page
            // For now, we'll just show an alert
            alert(`You clicked on "${toolName}". In the full implementation, this would open the specific tool.`);
            
            // You could also add analytics tracking here
            // trackToolUsage(toolName);
        });
    });

    // Sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    const navbarOffset = navbar.offsetTop;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= navbarOffset) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar-container') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Function to track tool usage (example)
function trackToolUsage(toolName) {
    // In a real implementation, this would send data to your analytics platform
    console.log(`Tool used: ${toolName}`);
    // Example: send data to Google Analytics
    // gtag('event', 'tool_usage', { 'tool_name': toolName });
}
