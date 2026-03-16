// --- Photo Preview Logic ---
const photoUpload = document.getElementById('photoUpload');
const displayPicture = document.getElementById('display-picture');

photoUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => displayPicture.src = e.target.result;
        reader.readAsDataURL(file);
    }
});

// --- Resource Upload Logic (Simulation) ---
const resUpload = document.getElementById('resourceUpload');
const resStatus = document.getElementById('resStatus');

resUpload.addEventListener('change', function() {
    if (this.files[0]) {
        resStatus.innerText = `Ready to share: ${this.files[0].name}`;
        resStatus.style.color = "#9b59b6";
    }
});

// --- Mini Game Logic ---
let score = 0;
const target = document.getElementById('game-target');
const scoreSpan = document.getElementById('score');
const gameBox = document.querySelector('.game-box');

target.addEventListener('mousedown', () => {
    score++;
    scoreSpan.innerText = score;
    moveTarget();
});

function moveTarget() {
    const maxX = gameBox.clientWidth - 50;
    const maxY = gameBox.clientHeight - 50;
    
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    
    target.style.left = x + 'px';
    target.style.top = y + 'px';
}

// Start game position
moveTarget();
