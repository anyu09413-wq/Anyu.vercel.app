// --- 1. Typewriter Animation ---
const msg = "Anyu Zhang: Peer Mediator Leader & Tech Enthusiast ✨";
let idx = 0;
function type() {
    if (idx < msg.length) {
        document.getElementById("typewriter").innerHTML += msg.charAt(idx);
        idx++;
        setTimeout(type, 100);
    }
}

// --- 2. Floating Symbols ---
function initFloaters() {
    const icons = ['🏓', '📚', '🎵', '💜', '🧠', '🤝', '✨'];
    const bg = document.getElementById('floating-bg');
    setInterval(() => {
        const item = document.createElement('div');
        item.className = 'floating-emoji';
        item.innerText = icons[Math.floor(Math.random() * icons.length)];
        item.style.left = Math.random() * 100 + 'vw';
        item.style.animationDuration = (Math.random() * 5 + 7) + 's';
        bg.appendChild(item);
        setTimeout(() => item.remove(), 11000);
    }, 2500);
}

// --- 3. Profile Photo Preview ---
document.getElementById('photoUpload').addEventListener('change', function(e) {
    if(this.files[0]) {
        const reader = new FileReader();
        reader.onload = () => document.getElementById('display-picture').src = reader.result;
        reader.readAsDataURL(this.files[0]);
    }
});

// --- 4. Resource Upload Simulation ---
document.getElementById('resInput').addEventListener('change', function() {
    if(this.files[0]) {
        document.getElementById('resStatus').innerText = "Uploaded: " + this.files[0].name;
    }
});

// --- 5. Purple Heart Game ---
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
    const x = Math.random() * (container.clientWidth - 70);
    const y = Math.random() * (container.clientHeight - 70);
    target.style.left = x + 'px';
    target.style.top = y + 'px';
}

// Initialize Everything
window.onload = () => {
    type();
    initFloaters();
    moveTarget();
};
