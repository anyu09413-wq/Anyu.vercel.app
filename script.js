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
// 在 script.js 底部添加
const text = "Welcome to Anyu's Creative Space! ✨";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('h1').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // 调整速度
    }
}

// 修改 index.html 里的 h1，先让它为空 <h1></h1>
// 然后在 window.onload 里调用这个函数
window.onload = () => {
    document.querySelector('h1').innerHTML = ""; // 先清空
    typeWriter();
};
// --- 巧思 1: 打字机效果 ---
const text = "Hi, I'm Anyu Zhang! ✨";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// --- 巧思 2: 动态背景表情 ---
function createFloatingEmojis() {
    const emojis = ['🏓', '📚', '🎵', '💜', '✨'];
    const container = document.getElementById('floating-bg');
    
    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = (Math.random() * 5 + 5) + 's';
        container.appendChild(emoji);
        
        // 10秒后自动移除，防止页面卡顿
        setTimeout(() => emoji.remove(), 10000);
    }, 2000);
}

// --- 基础功能：图片上传预览 ---
document.getElementById('photoUpload').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => document.getElementById('display-picture').src = e.target.result;
        reader.readAsDataURL(file);
    }
});

// --- 游戏逻辑 ---
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

// 初始化
window.onload = () => {
    typeWriter();
    createFloatingEmojis();
    moveTarget();
};
