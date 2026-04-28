// Load footer dynamically on all pages
// Footer HTML is embedded here to avoid CORS issues when opening files directly from file system
document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `<footer>
    <div class="container">
        <p>Designed in year 2025 by:</p>
        <p>Ilona Arias - Student star<br>
            Manuel Nino - Student star<br>
            Francisco Nino - Master Instructor</p>
    </div>
</footer>`;

    // Find the placeholder and replace it
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.outerHTML = footerHTML;
    }
});
