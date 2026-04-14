// Theme toggle helpers for all pages
function getThemeStylesheetPath(theme) {
    const path = window.location.pathname;
    const isWeeks = path.includes('/weeks/');
    if (theme === 'light') {
        return isWeeks ? '../Lighttheme.css' : 'Lighttheme.css';
    } else if (theme === 'dark') {
        return isWeeks ? '../darktheme.css' : 'darktheme.css';
    } else if (theme === 'gothic') {
        return isWeeks ? '../goththeme.css' : 'goththeme.css';
    } else if (theme === 'scifi') {
        return isWeeks ? '../scifitheme.css' : 'scifitheme.css'; // Ensure this path is correct
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
        if (currentTheme === 'light') {
            toggleButton.textContent = 'Dark Theme';
        } else if (currentTheme === 'dark') {
            toggleButton.textContent = 'Gothic Theme';
        } else if (currentTheme === 'gothic') {
            toggleButton.textContent = 'Sci-Fi Theme';
        } else if (currentTheme === 'scifi') {
            toggleButton.textContent = 'Light Theme';
        }
    }
}

function setTheme(theme) {
    if (theme === 'light') {
        ensureThemeStylesheet('light');
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark', 'theme-gothic', 'theme-sci-fi');
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('homeschool-theme', 'light');
    } else if (theme === 'dark') {
        ensureThemeStylesheet('dark');
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light', 'theme-gothic', 'theme-sci-fi');
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('homeschool-theme', 'dark');
    } else if (theme === 'gothic') {
        ensureThemeStylesheet('gothic');
        document.body.classList.add('theme-gothic');
        document.body.classList.remove('theme-light', 'theme-dark', 'theme-sci-fi');
        document.documentElement.dataset.theme = 'gothic';
        localStorage.setItem('homeschool-theme', 'gothic');
    } else if (theme === 'scifi') {
        ensureThemeStylesheet('scifi');
        document.body.classList.add('theme-sci-fi');
        document.body.classList.remove('theme-light', 'theme-dark', 'theme-gothic');
        document.documentElement.dataset.theme = 'scifi';
        localStorage.setItem('homeschool-theme', 'scifi');
    } else {
        // Default to light theme
        ensureThemeStylesheet('light');
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark', 'theme-gothic', 'theme-sci-fi');
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
    } else if (stored === 'gothic') {
        setTheme('gothic');
    } else if (stored === 'scifi') {
        setTheme('scifi');
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
            let newTheme;
            if (currentTheme === 'light') {
                newTheme = 'dark';
            } else if (currentTheme === 'dark') {
                newTheme = 'gothic';
            } else if (currentTheme === 'gothic') {
                newTheme = 'scifi';
            } else {
                newTheme = 'light';
            }
            setTheme(newTheme);
        });
    }
    initializeThemeFromStorage();
}

// Load footer dynamically on all pages
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