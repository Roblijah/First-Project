// script.js

// Function to toggle the navigation menu's visibility
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('visible');
}

// Add event listener to the hamburger icon
document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);

// Function to implement smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Add event listeners to filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterProjects(category);
    });
});

// Function to display images in a modal view (lightbox effect)
function showLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.classList.add('visible');
}

// Add event listeners to project images
document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', function() {
        showLightbox(this.src);
    });
});

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target.id === 'lightbox') {
        this.classList.remove('visible');
    }
});

// Form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    if (!name) {
        valid = false;
        alert('Please enter your name.');
    }
    if (!email) {
        valid = false;
        alert('Please enter your email.');
    }
    if (!message) {
        valid = false;
        alert('Please enter your message.');
    }

    if (valid) {
        alert('Form submitted successfully!');
        // You can add code here to actually submit the form
    }
});