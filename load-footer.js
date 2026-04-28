// Load footer dynamically on all pages
// Footer HTML is embedded here to avoid CORS issues when opening files directly from file system
document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `<footer>
    <div class="container">
        <p>Designed in hell by:</p>
        <p>ILONA MATH-WITCH - A Lab-rat who tests this project (it has made her explote a couple of times......)<br>
            Mango Melon Maracuya - Lab-rat<br>
            Uncle Pato - A VERY Mad Scientist who is actually a DUCK!</p>
    </div>
</footer>`;
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.outerHTML = footerHTML;
    }
});
