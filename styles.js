// Theme toggle helpers for all pages
function getThemeStylesheetPath(theme) {
    const path = window.location.pathname;
    const isWeeks = path.includes('/weeks/');
    if (theme === 'light') {
        return isWeeks ? '../Lighttheme.css' : 'Lighttheme.css';
    } else if (theme === 'dark') {
        return isWeeks ? '../darktheme.css' : 'darktheme.css';
    }
    return '';
}

function ensureThemeStylesheet(theme) {
    let themeLink = document.getElementById('theme-stylesheet');
    const path = getThemeStylesheetPath(theme);
    if (path) {
        if (!themeLink) {
            themeLink = document.createElement('link');
            themeLink.id = 'theme-stylesheet';
            themeLink.rel = 'stylesheet';
            themeLink.href = path;
            document.head.appendChild(themeLink);
        } else {
            themeLink.href = path;
        }
    } else {
        // remove if no theme
        if (themeLink) {
            themeLink.remove();
        }
    }
    return themeLink;
}

function updateThemeButtons() {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('homeschool-theme') || 'light';
    if (toggleButton) {
        toggleButton.textContent = currentTheme === 'light' ? 'Dark Theme' : 'Light Theme';
    }
}

function setTheme(theme) {
    if (theme === 'light') {
        ensureThemeStylesheet('light');
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('homeschool-theme', 'light');
    } else if (theme === 'dark') {
        ensureThemeStylesheet('dark');
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('homeschool-theme', 'dark');
    } else {
        // default to light
        ensureThemeStylesheet('light');
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('homeschool-theme', 'light');
    }
    updateThemeButtons();
}

function initializeThemeFromStorage() {
    const stored = localStorage.getItem('homeschool-theme');
    if (stored === 'light') {
        setTheme('light');
    } else if (stored === 'dark') {
        setTheme('dark');
    } else {
        setTheme('light');
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
    setTimeout(callback, 500);
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
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            const currentTheme = localStorage.getItem('homeschool-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }
    initializeThemeFromStorage();
}

// Load footer dynamically on all pages
// Footer HTML is embedded here to avoid CORS issues when opening files directly from file system
document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `<footer>
    <div class="container">
        <button id="theme-toggle" class="theme-toggle-button" type="button">Dark Theme</button>
        <p>Designed in 2026 by:</p>
        <p>Ilona Arias - Student<br>
            Manuel Nino - Student<br>
            Francisco Nino - Instructor</p>
    </div>
</footer>`;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.outerHTML = footerHTML;
    }

    initializeThemeToggle();
    initializeScrollBehavior();
    handleLinkTransitions();
});
