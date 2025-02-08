function openCard() {
    document.querySelector('.card').style.transform = 'perspective(1000px) rotateX(0deg)';
    document.querySelector('.card-content').style.opacity = '1';
}

function answer(response) {
    if (response === 'yes') {
        createHearts();
        document.querySelector('.card').style.display = 'none';
    } else if (response === 'no') {
        showPopup();
        setTimeout(() => {
            document.getElementById('popup').style.display = 'none';
        }, 2000);
        document.querySelector('.card').style.display = 'none';
    }
}

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function createHearts() {
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        document.getElementById('hearts-container').appendChild(heart);
    }
}


