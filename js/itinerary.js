(function (){

const clockContainer = document.querySelector('.clock-iti');

setInterval(updateClock, 1000);

function updateClock() { 
clockContainer.innerText = new Date ().toLocaleTimeString();
}
})(); 