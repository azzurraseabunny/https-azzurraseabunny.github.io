function changePage(newContent) {
    const main = document.querySelector('main');

    // Fade out current content
    main.classList.add('hidden');

    setTimeout(() => {
        // Replace content and fade in
        main.innerHTML = newContent;
        main.classList.remove('hidden');
    }, 500); // Match the CSS transition duration
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        changePage('<h1>New Page Content</h1><p>This is the new content after the transition.</p>');
    }, 2000);
});
