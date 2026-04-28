// Theme toggle helpers for all pages
function getThemeStylesheetPath() {
    const path = window.location.pathname;
    if (path.includes('/weeks/')) {
        return '../Lighttheme.css';
    }
    return 'Lighttheme.css';
}

function ensureThemeStylesheet() {
    let themeLink = document.getElementById('theme-stylesheet');
    if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.id = 'theme-stylesheet';
        themeLink.rel = 'stylesheet';
        themeLink.href = getThemeStylesheetPath();
        document.head.appendChild(themeLink);
    }
    return themeLink;
}

function updateThemeButton() {
    const button = document.getElementById('theme-toggle-button');
    if (!button) return;
    const active = document.body.classList.contains('theme-light');
    button.textContent = active ? 'Switch to default theme' : 'Switch to light theme';
}

function setThemeLight(enabled) {
    if (enabled) {
        ensureThemeStylesheet();
        document.body.classList.add('theme-light');
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('homeschool-theme', 'light');
    } else {
        document.body.classList.remove('theme-light');
        document.documentElement.dataset.theme = '';
        localStorage.setItem('homeschool-theme', 'default');
    }
    updateThemeButton();
}

function initializeThemeFromStorage() {
    const stored = localStorage.getItem('homeschool-theme');
    if (stored === 'light') {
        setThemeLight(true);
    }
}

function smoothScrollLinks() {
    const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
    anchorLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function revealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    const windowHeight = window.innerHeight;
    revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight - 80) {
            element.classList.add('revealed');
        }
    });
}

function registerScrollRevealTargets() {
    const targets = document.querySelectorAll('.content-section, .part-card, .week-link, section, article');
    targets.forEach((element) => {
        element.classList.add('reveal-on-scroll');
    });
}

function createPageTransitionOverlay() {
    let overlay = document.getElementById('page-transition-overlay');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'page-transition-overlay';
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);
    return overlay;
}

function animatePageExit(callback) {
    const overlay = createPageTransitionOverlay();
    document.body.classList.add('page-exiting');
    overlay.classList.add('visible');
    setTimeout(callback, 650);
}

function handleLinkTransitions() {
    document.body.addEventListener('click', function (event) {
        const anchor = event.target.closest('a[href]');
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        if (anchor.target === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        const url = new URL(href, window.location.href);
        if (url.href === window.location.href) return;

        event.preventDefault();
        animatePageExit(() => {
            window.location.href = url.href;
        });
    });
}

let scrollRequested = false;
function handleScroll() {
    if (!scrollRequested) {
        scrollRequested = true;
        window.requestAnimationFrame(() => {
            revealOnScroll();
            scrollRequested = false;
        });
    }
}

function initializeScrollBehavior() {
    smoothScrollLinks();
    registerScrollRevealTargets();
    revealOnScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
}

function initializeThemeToggle() {
    const button = document.getElementById('theme-toggle-button');
    if (!button) return;
    button.addEventListener('click', function () {
        const hasLight = document.body.classList.contains('theme-light');
        setThemeLight(!hasLight);
    });
    initializeThemeFromStorage();
}

// Load footer dynamically on all pages
// Footer HTML is embedded here to avoid CORS issues when opening files directly from file system
document.addEventListener('DOMContentLoaded', function () {
    const newLocal = `<footer>
    <div class="container">
        <button id="theme-toggle-button" class="theme-toggle-button" type="button">Switch to light theme</button>
        <p>Designed in 2026 by:</p>
        <p>Ilona Arias - Student<br>
            Manuel Nino - Student, a guy who likes to code and poo<br>
            Francisco Nino - Instructor</p>
    </div>
</footer>`;
    const footerHTML = newLocal;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.outerHTML = footerHTML;
    }

    initializeThemeToggle();
    initializeScrollBehavior();
    handleLinkTransitions();
});
