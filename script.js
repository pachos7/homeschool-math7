document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
    const body = document.body;

    button.addEventListener('click', () => {
        // Toggle between 'theme-gothic' and 'theme-space'
        if (body.classList.contains('theme-gothic')) {
            body.classList.remove('theme-gothic');
            body.classList.add('theme-space');
        } else {
            body.classList.remove('theme-space');
            body.classList.add('theme-gothic');
        }
    });
});