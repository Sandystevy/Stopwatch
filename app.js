const watch = document.querySelector('#watch');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
let timer, hours, minutes, seconds;
 
initialise();

function increaseSeconds(){
    counter++;
    // calculate h,m,s
    hours = parseInt(Math.floor(counter / 3600));
    minutes = parseInt(Math.floor(counter % 3600) / 60);
    seconds = parseInt(Math.floor(counter % 60));

    // add zeros if < 10

    hours < 10 ? hours = `0${hours}`: hours = hours;
    minutes < 10 ? minutes = `0${minutes}`: minutes = minutes;
    seconds < 10 ? seconds = `0${seconds}`: seconds = seconds;

    // add the wath numbers to the HTML
    watch.innerHTML = `${hours}:${minutes}:${seconds} `
}


function startWatch(){
    timer = setInterval(increaseSeconds, 1000);
    start.removeEventListener('click', startWatch);
    start.style.color = 'grey'
    pause.style.color = 'beigek'
}
function pauseWatch(){
    clearInterval(timer);
    start.addEventListener('click', startWatch);
    start.style.color = 'beige'
    pause.style.color = 'grey'
}

function resetWatch(){
    clearInterval(timer);
    counter = 0;
    start.style.color = 'beige'
    pause.style.color = 'beige';
    start.addEventListener('click', startWatch);
    watch.innerHTML = '00:00:00';
}

function initialise() {
    counter = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    start.addEventListener('click', startWatch);
}

start.addEventListener('click', startWatch);
pause.addEventListener('click', pauseWatch );
reset.addEventListener('click', resetWatch );

