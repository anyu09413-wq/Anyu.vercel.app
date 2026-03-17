// --- 1. 打字机效果 ---
const msg = "Anyu Zhang: Peer Mediator Leader & Social Science Fan ✨";
let i = 0;
function typeEffect() {
    if (i < msg.length) {
        document.getElementById("typewriter").innerHTML += msg.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

// --- 2. 漂浮背景特效 ---
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

// --- 3. 【核心技巧】照片永久保存与加载 ---
const photoUpload = document.getElementById('photoUpload');
const displayPicture = document.getElementById('display-picture');

// 页面加载时：检查“抽屉”里有没有存过的照片
function loadSavedPhoto() {
    const savedPhoto = localStorage.getItem('anyu_profile_photo');
    if (savedPhoto) {
        displayPicture.src = savedPhoto;
    }
}

// 用户上传照片时：预览并存入“抽屉”
photoUpload.addEventListener('change', function(e) {
    if(this.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
            const base64Image = reader.result;
            displayPicture.src = base64Image; // 预览
            localStorage.setItem('anyu_profile_photo', base64Image); // 保存到本地存储
        };
        reader.readAsDataURL(this.files[0]);
    }
});

// --- 4. 资源上传状态展示 ---
document.getElementById('resInput').addEventListener('change', function() {
    if(this.files[0]) {
        document.getElementById('resStatus').innerText = "File ready: " + this.files[0].name;
    }
});

// --- 5. 紫色爱心小游戏 ---
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

// --- 初始化所有功能 ---
window.onload = () => {
    typeEffect();        // 启动打字机
    createFloatingIcons(); // 启动漂浮特效
    loadSavedPhoto();    // 【读取】之前保存的照片
    moveHeart();         // 初始化游戏位置
};
