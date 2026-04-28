

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
