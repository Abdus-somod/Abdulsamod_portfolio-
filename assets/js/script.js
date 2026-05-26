/* ============================================================
   PORTFOLIO – VANILLA JS
   File: assets/js/script.js

   SECTIONS
   A. Mobile Menu
   B. Auto-close Mobile Menu on Resize
   C. Header Scroll Shadow
   D. Projects Data & Dynamic Card Rendering
   E. Footer Copyright Year
   ============================================================ */


/* ── A. Mobile Menu ───────────────────────────────────────── */

const hamburger = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

function closeMobileMenu() {
    mobileNav.hidden = true;
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
        closeMobileMenu();
    } else {
        mobileNav.hidden = false;
        hamburger.setAttribute('aria-expanded', 'true');
    }
});

const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
});


/* ── B. Auto-close Mobile Menu on Resize ─────────────────── */

const DESKTOP_BREAKPOINT = 768;

window.addEventListener('resize', function () {
    if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        closeMobileMenu();
    }
}, { passive: true });


/* ── C. Header Scroll Shadow ──────────────────────────────── */

const header = document.getElementById('site-header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
}, { passive: true });


/* ── D. Projects Data & Dynamic Card Rendering ────────────── */
/*
   All five projects are real client sites Abdulsamod built.
   To add a new project: add an object to the array below.
   To update a link: replace the '#' with the live URL.
*/
const projects = [
    {
        title: 'Pepper Home',
        description: 'An e-commerce website for a home goods brand, built on Wix. Features a full product catalogue, shopping cart, and a clean, warm visual identity that matches the brand.',
        image: 'assets/images/project-pepper.svg',
        tags: ['Wix', 'E-Commerce', 'UI Design', 'SEO'],
        link: '#'  // ← replace with live URL
    },
    {
        title: 'Redworm Depot',
        description: 'A WordPress site for a vermiculture and composting supplier. Includes a product shop, blog, and SEO-optimised content pages — all responsive and easy for the client to manage.',
        image: 'assets/images/project-redworm.svg',
        tags: ['WordPress', 'WooCommerce', 'Responsive Design'],
        link: '#'  // ← replace with live URL
    },
    {
        title: 'Camascope',
        description: 'A professional SaaS landing page built on Webflow for a healthcare technology company. Focuses on conversion-driven layout, clean animations, and clear feature communication.',
        image: 'assets/images/project-camascope.svg',
        tags: ['Webflow', 'SaaS', 'Landing Page', 'Animation'],
        link: '#'  // ← replace with live URL
    },
    {
        title: 'PremierTutor.ca',
        description: 'A tutoring marketplace platform built on WordPress, connecting students with qualified tutors across Canada. Includes user profiles, subject filtering, and a booking inquiry flow.',
        image: 'assets/images/project-premier.svg',
        tags: ['WordPress', 'Web App', 'UX Design'],
        link: '#'  // ← replace with live URL
    },
    {
        title: 'Prewitt Designs by Renee',
        description: 'A visual portfolio site for an interior designer, built on Wix. Showcases project galleries with full-width imagery, elegant typography, and a minimal layout that lets the work speak.',
        image: 'assets/images/project-prewitt.svg',
        tags: ['Wix', 'Portfolio', 'Visual Design'],
        link: '#'  // ← replace with live URL
    }
];

/**
 * Creates and returns a project card DOM element.
 * @param  {Object} project
 * @returns {HTMLElement}
 */
function createProjectCard(project) {
    const tagsHTML = project.tags
        .map(function (tag) {
            return '<span class="tag">' + tag + '</span>';
        })
        .join('');

    const card = document.createElement('article');
    card.className = 'project-card';

    card.innerHTML = `
    <div class="project-img-wrap">
      <img
        src="${project.image}"
        alt="${project.title} website screenshot"
        width="800"
        height="480"
        loading="lazy"
      />
      <a href="${project.link}" class="project-link-icon" aria-label="View ${project.title} project" target="_blank" rel="noopener noreferrer">
        <img src="assets/icons/icon-external-link.svg" alt="" width="20" height="20" aria-hidden="true" />
      </a>
    </div>
    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${tagsHTML}</div>
    </div>
  `;

    return card;
}

const projectsGrid = document.getElementById('projects-grid');
projects.forEach(function (project) {
    projectsGrid.appendChild(createProjectCard(project));
});


/* ── E. Footer Copyright Year ─────────────────────────────── */

const footerCopy = document.getElementById('footer-copy');
footerCopy.textContent = '© ' + new Date().getFullYear() + ' Abdulsamod. All rights reserved.';
