document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popup2 = document.getElementById('popup2');
    const doneButton = document.getElementById('done-button');
    const grid = document.getElementById('grid');
    const gridImage1 = document.getElementById('grid-image1');
    const gridImage2 = document.getElementById('grid-image2');

    // Close the pop-up and show the grid when the "Done" button is clicked
    doneButton.addEventListener('click', () => {
        popup.style.display = 'none';
        grid.style.display = 'flex';
    });

    // Show the original pop-up again when the top-left grid image is clicked
    gridImage1.addEventListener('click', () => {
        popup.style.display = 'flex';
        grid.style.display = 'none';
    });

    // Show the new pop-up when the top-middle grid image is clicked
    gridImage2.addEventListener('click', () => {
        popup2.style.display = 'flex';
        grid.style.display = 'none';
    });

    // Close the pop-ups when clicking outside of the pop-up content
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
            grid.style.display = 'flex';
        } else if (e.target === popup2) {
            popup2.style.display = 'none';
            grid.style.display = 'flex';
        }
    });
});
