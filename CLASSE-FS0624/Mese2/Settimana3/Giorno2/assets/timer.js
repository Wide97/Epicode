const timerCount = document.getElementById('time-counter')

const startCount = sessionStorage.getItem('startCount') ? parseInt(sessionStorage.getItem('startCount')) :Date.now()

function updateCounter (){
    const currentTime = Date.now()
    const seconds = Math.floor((currentTime - startCount) / 1000)
    timerCount.textContent =  seconds
}

window.onload = function () {
    setInterval(updateCounter, 1000)
}


    sessionStorage.setItem('startCount', startCount)