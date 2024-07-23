const timerCount = document.getElementById('time-counter');

const startCount = sessionStorage.getItem('startCount') ? parseInt(sessionStorage.getItem('startCount')) : Date.now();

function updateCounter() {
    const currentTime = Date.now();
    const seconds = Math.floor((currentTime - startCount) / 1000);
    timerCount.textContent = seconds;
}

function animateCounter() {
    timerCount.classList.add('scale-up');
    
    setTimeout(() => {
        timerCount.classList.remove('scale-up');
    }, 500); // Durata dell'animazione
}

window.onload = function() {
    setInterval(updateCounter, 1000); 
    setInterval(animateCounter, 1000); 
    
    sessionStorage.setItem('startCount', startCount);
}
