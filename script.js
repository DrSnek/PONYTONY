document.addEventListener('DOMContentLoaded', () => {
    const passwordLock = document.getElementById('password-lock');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const errorMessage = document.getElementById('error-message');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const actionButton = document.getElementById('action-button');
    const showPopupTime = 1000; // Time in milliseconds to wait before showing the pop-up

    const correctPassword = "june21";

    // Show the password prompt
    passwordLock.style.display = 'flex';

    // Handle password submission
    passwordSubmit.addEventListener('click', () => {
        if (passwordInput.value === correctPassword) {
            passwordLock.style.display = 'none';
            setTimeout(() => {
                popup.style.display = 'flex';
            }, showPopupTime);
        } else {
            errorMessage.style.display = 'block';
        }
    });

    // Change the image and trigger the confetti effect once the animation completes
    popup.addEventListener('animationend', () => {
        setTimeout(() => {
            popupImage.src = 'dancingdog.gif';
            actionButton.style.display = 'inline-block'; // Show the button
            // Trigger the confetti effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 1000); // Small delay to ensure the image changes after the animation ends
    });

    // Navigate to the new page when the button is clicked
    actionButton.addEventListener('click', () => {
        window.location.href = 'letters.html';
    });

    // Close the pop-up when clicking outside of the pop-up content
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
