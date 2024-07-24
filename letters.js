document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const doneButton = document.getElementById('done-button');
    const grid = document.getElementById('grid');
    const gridImage = document.getElementById('grid-image');

    // Close the pop-up and show the grid when the "Done" button is clicked
    doneButton.addEventListener('click', () => {
        popup.style.display = 'none';
        grid.style.display = 'flex';
    });

    // Close the pop-up when clicking outside of the pop-up content
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
            grid.style.display = 'flex';
        }
    });

    // Show the pop-up again when the top-left grid image is clicked
    gridImage.addEventListener('click', () => {
        popup.style.display = 'flex';
        grid.style.display = 'none';
    });
});
