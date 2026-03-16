// --- 1. Typewriter Animation ---
const msg = "Anyu Zhang: Peer Mediator Leader & Social Science Fan ✨";
let i = 0;
function typeEffect() {
    if (i < msg.length) {
        document.getElementById("typewriter").innerHTML += msg.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

// --- 2. Floating Background Elements ---
function createFloatingIcons() {
    const icons = ['🏓', '📚', '🎵', '💜', '🧠', '🤝', '✨'];
    const bg = document.getElementById('floating-bg');
    setInterval(() => {
        const item = document.createElement('div');
        item.className = 'floating-emoji';
        item.innerText = icons[Math.floor(Math.random() * icons.length)];
        item.style.left = Math.random() * 100 + 'vw';
        item.style.animationDuration = (Math.random() * 5 + 6) + 's';
        bg.appendChild(item);
        setTimeout(() => item.remove(), 11000);
    }, 2500);
}

// --- 3. Profile Image Live Update ---
document.getElementById('photoUpload').addEventListener('change', function(e) {
    if(this.files[0]) {
        const reader = new FileReader();
        reader.onload = () => document.getElementById('display-picture').src = reader.result;
        reader.readAsDataURL(this.files[0]);
    }
});

// --- 4. File Upload Status Update ---
document.getElementById('resInput').addEventListener('change', function() {
    if(this.files[0]) {
        document.getElementById('resStatus').innerText = "File ready: " + this.files[0].name;
    }
});

// --- 5. Purple Heart Game ---
let score = 0;
const heart = document.getElementById('game-target');
const scoreSpan = document.getElementById('score');

heart.addEventListener('mousedown', () => {
    score++;
    scoreSpan.innerText = score;
    moveHeart();
});

function moveHeart() {
    const box = document.querySelector('.game-container');
    const maxX = box.clientWidth - 70;
    const maxY = box.clientHeight - 70;
    heart.style.left = Math.random() * maxX + 'px';
    heart.style.top = Math.random() * maxY + 'px';
}

// Initialize on page load
window.onload = () => {
    typeEffect();
    createFloatingIcons();
    moveHeart();
};
