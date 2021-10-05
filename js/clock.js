//Added a clock:
setInterval(function() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
    }, 1000);