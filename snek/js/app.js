const ELEMENTS = ['field', 'block', 'snekbody', 'snekhead', 'appel', 'golden-appel', 'green-appel'],
      BUTTON = {
          LEFT: 37,
          RIGHT: 39,
          UP: 38,
          DOWN: 40,
          W: 87,
          A: 65,
          S: 83,
          D: 68
      }
      ,
      DIR = {
          UP: 0,
          RIGHT: 1,
          DOWN: 2,
          LEFT: 3
      };
let buttons = document.getElementsByTagName('button'),
    startbt = document.querySelector('#startbt'),
    difficulty = 0,
    table = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    snek = [],
    Game;

//game variables
let obstacle = 0,
speed = DecideDiff();

AddEventListeners();
function AddEventListeners(){
    startbt.addEventListener('click', StartGame);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {ChangeColorDiff(this)});
    }
}

function GenerateElement(index){
    return ELEMENTS[index];
}

function ChangeColorDiff(button){
    button.classList.add('selected');
    difficulty = button.innerText;
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i]!=button){
            buttons[i].classList.remove('selected')
        }
    }
}

function StartGame(){
    if (DecideDiff()!=0){
        HideMenu();
        Game=setInterval(GameEngine, speed);
    }
}

function GameEngine(){

}

function DecideDiff(){
    switch (difficulty){
        case "Easy":
            return 1000;
        case "Normal":
            return 500;
        case "Hard":
            return 100;
        case "Extreme":
            return 10;
        default:
            return 0
    }
}

function HideMenu(){
    document.querySelector('.menu').style.opacity = "0%";
    setTimeout(DisplaySwitch, 500);
}
function DisplaySwitch(){
    document.querySelector('.menu').style.zIndex = "-1";
    document.querySelector('.gamebg').style.zIndex = "0";
    console.log('offed');
    document.querySelector('.gamebg').style.opacity = "100%";
}