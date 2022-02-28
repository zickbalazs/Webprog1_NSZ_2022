let stopper = document.querySelector('.stopper');
let start_stop = document.querySelector('#starter');
let stopBtn = document.querySelector('#stopper');
let hoursSpan = document.querySelector('#hours');
let minutesSpan = document.querySelector('#minutes');
let secondsSpan = document.querySelector('#seconds');
let msSpan = document.querySelector('#ms');
let time = [];


let h = 0;
let min = 0;
let s = 0;
let ms = 0;

let Started = false;

AddEvents();

function AddEvents(){
    start_stop.addEventListener('click', Timer_Start)
    stopBtn.addEventListener('click', Clear);
}


function Timer_Start(){
    Started = !Started;
    if (Started){
        for (let i = 0; i < 10; i++) {
            time[i] = setInterval(Timer, 10);
        }
    }
    else{
        for (let i = 0; i < 10; i++) {
            clearInterval(time[i]);
        }
    }
}

function Timer(){
    ms++;
    if (ms>999){
        s++;
        ms = 0;
    }
    if (s==60){
        min++;
        s=0;
    }
    if (min==60){
        h++;
        min=0;
    }
    UpdateDisplay();
}

function Clear(){
    for (let i = 0; i < 10; i++) {
        clearInterval(time[i]);
    }
    h = 0;
    min = 0;
    s = 0;
    ms = 0;
    UpdateDisplay();
}

function UpdateDisplay(){
    hoursSpan.innerText = h.toString().length == 1 ? `0${h}` : h;
    minutesSpan.innerText = min.toString().length == 1 ? `0${min}` : min;
    secondsSpan.innerText = s.toString().length==1 ? `0${s}` : s;
    msSpan.innerText = ms.toString().length==1 ? `00${ms}` : ms.toString().length==2 ? `0${ms}` : ms;
}