// --- 1. Typewriter Effect ---
const welcomeText = "Hi, I'm Anyu Zhang! ✨";
let charIndex = 0;
function type() {
    if (charIndex < welcomeText.length) {
        document.getElementById("typewriter").innerHTML += welcomeText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
}

// --- 2. Floating Emojis Background ---
function spawnEmoji() {
    const emojis = ['🏓', '📚', '🎵', '💜', '🧠', '🤝'];
    const bg = document.getElementById('floating-bg');
    setInterval(() => {
        const div = document.createElement('div');
        div.className = 'floating-emoji';
        div.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        div.style.left = Math.random() * 100 + 'vw';
        div.style.animationDuration = (Math.random() * 4 + 8) + 's';
        bg.appendChild(div);
        setTimeout(() => div.remove(), 12000);
    }, 2500);
}

// --- 3. Profile Photo Preview ---
document.getElementById('photoUpload').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('display-picture').src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});

// --- 4. Resource Upload Status ---
document.getElementById('resInput').addEventListener('change', function() {
    if(this.files[0]) {
        document.getElementById('resStatus').innerText = "Selected: " + this.files[0].name;
    }
});

// --- 5. Mini Game Logic ---
let score = 0;
const target = document.getElementById('game-target');
const scoreDisplay = document.getElementById('score');

target.addEventListener('mousedown', () => {
    score++;
    scoreDisplay.innerText = score;
    moveTarget();
});

function moveTarget() {
    const container = document.querySelector('.game-container');
    const x = Math.random() * (container.clientWidth - 60);
    const y = Math.random() * (container.clientHeight - 60);
    target.style.left = x + 'px';
    target.style.top = y + 'px';
}

// Initialize Everything
window.onload = () => {
    type();
    spawnEmoji();
    moveTarget();
};
