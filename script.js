function handleResponse(isYes) {
    if (isYes) {
        // If 'Yes' is clicked, create heart animations
        showHearts();
    } else {
        // If 'No' is clicked, show the spooky popup
        document.getElementById('popup').style.display = 'block';
    }
}

// Function to show hearts when 'Yes' is clicked
function showHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const numHearts = 50; // Adjust the number of hearts

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Randomize the position and animation delay for each heart
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        const animationDelay = Math.random() * 2;
        
        heart.style.left = `${xPos}px`;
        heart.style.top = `${yPos}px`;
        heart.style.animationDelay = `${animationDelay}s`;
        
        heartsContainer.appendChild(heart);
    }
}

// Function to close the spooky popup
setTimeout(() => {
    const popup = document.getElementById('popup');
    popup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}, 3000); // Close the popup after 3 seconds if the user doesn't click it
