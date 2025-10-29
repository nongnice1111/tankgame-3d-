// ==================== Loading Screen ====================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Immediately hide loading screen and attempt to play music
    loadingScreen.classList.add('hidden');
    playBackgroundMusic();
});

// ==================== Background Music ====================
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
let isPlaying = false;

function playBackgroundMusic() {
    bgMusic.play().then(() => {
        isPlaying = true;
        musicToggle.classList.add('playing');
        musicIcon.textContent = '🔊';
    }).catch(error => {
        console.log('Auto-play prevented:', error);
        isPlaying = false;
        musicIcon.textContent = '🔇';
    });
}

musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
        musicToggle.classList.remove('playing');
        musicIcon.textContent = '🔇';
    } else {
        playBackgroundMusic();
    }
});

// ==================== Particle Animation ====================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 50;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(76, 175, 80, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
        // Connect particles
        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                ctx.strokeStyle = `rgba(76, 175, 80, ${0.2 - distance / 750})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
    }
    
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// ==================== Download Button ====================
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Show notification
    showNotification('กำลังเริ่มดาวน์โหลด TankGame 3D... 🎮');
    
    // Play sound effect
    playClickSound();
    
    // Add shake effect
    downloadBtn.style.animation = 'shake 0.5s';
    setTimeout(() => {
        downloadBtn.style.animation = '';
    }, 500);
    
    // Simulate download (replace with actual download link)
    setTimeout(() => {
        showNotification('ดาวน์โหลดเสร็จสิ้น! สนุกกับเกมนะ! 🚀');
    }, 2000);
});

// ==================== Notification System ====================
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ==================== Sound Effect ====================
function playClickSound() {
    const audio = new Audio('data:audio/wav;base64,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');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Sound play failed:', e));
}

// ==================== Scroll Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .team-member').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// ==================== Title Typing Effect ====================
const titleElement = document.getElementById('gameTitle');
const titleText = 'TANKGAME 3D';
let titleIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        titleElement.textContent = titleText.substring(0, titleIndex + 1);
        titleIndex++;
        setTimeout(typeTitle, 150);
    }
}

// Start typing after loading
titleElement.textContent = '';
typeTitle();

// ==================== Mouse Trail Effect ====================
let mouseX = 0;
let mouseY = 0;
const trail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createTrailParticle() {
    const particle = {
        x: mouseX,
        y: mouseY,
        size: Math.random() * 3 + 1,
        life: 1
    };
    trail.push(particle);
    
    if (trail.length > trailLength) {
        trail.shift();
    }
}

function animateTrail() {
    const trailCanvas = document.createElement('canvas');
    trailCanvas.style.position = 'fixed';
    trailCanvas.style.top = '0';
    trailCanvas.style.left = '0';
    trailCanvas.style.pointerEvents = 'none';
    trailCanvas.style.zIndex = '999';
    trailCanvas.width = window.innerWidth;
    trailCanvas.height = window.innerHeight;
    document.body.appendChild(trailCanvas);
    
    const trailCtx = trailCanvas.getContext('2d');
    
    function drawTrail() {
        trailCtx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
        
        createTrailParticle();
        
        trail.forEach((particle, index) => {
            particle.life -= 0.05;
            const opacity = particle.life * 0.5;
            
            trailCtx.fillStyle = `rgba(76, 175, 80, ${opacity})`;
            trailCtx.beginPath();
            trailCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            trailCtx.fill();
        });
        
        requestAnimationFrame(drawTrail);
    }
    
    drawTrail();
}

animateTrail();

// ==================== Shake Animation ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// ==================== Welcome Message ====================
showNotification('ยินดีต้อนรับสู่ TankGame 3D! 🎮');

// ==================== Console Easter Egg ====================
console.log('%c🎮 TankGame 3D', 'font-size: 30px; color: #4CAF50; font-weight: bold;');
console.log('%cพัฒนาโดยทีม TankGame 3D', 'font-size: 14px; color: #888;');
console.log('%c- นายชัยณรงค์ ชัยสงค์ (6610070)', 'color: #4CAF50;');
console.log('%c- นายสุภากร บัวชัยชิต (6610076)', 'color: #4CAF50;');
console.log('%c- นายกิตติพงศ์ อุดมลาภ (6610068)', 'color: #4CAF50;');
console.log('%c- นายเฉลิมชัย คำแหงพล (6610104)', 'color: #4CAF50;');
