// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const navButtons = document.querySelectorAll('.nav-button');
const contentSections = document.querySelectorAll('.content-section');
const backButtons = document.querySelectorAll('.back-button');
const hero = document.querySelector('.hero');

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Navigation functionality
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Hide hero section
        hero.classList.add('hidden');

        // Show corresponding content
        const viewName = button.dataset.view;
        contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === viewName) {
                section.classList.add('active');
            }
        });
    });
});

// Back button functionality
backButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Show hero section
        hero.classList.remove('hidden');

        // Remove active state from nav buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
    });
});