//Added a clock:
(function(){
setInterval(function() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
    }, 1000);
})();