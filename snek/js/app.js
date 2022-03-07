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
    result = document.querySelector('#score'),
    difficulty = 0,
    table = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    snek = [],
    snekHead = {},
    dir,
    Game;

//game variables
let obstacle = 0,
speed = DecideDiff();

AddEventListeners();
function AddEventListeners(){
    startbt.addEventListener('click', StartGame);
    document.addEventListener('keydown', (event) => {
        ChangeDir(event.keyCode);
    });
    for (let i = 0; i < buttons.length; i++)
        buttons[i].addEventListener('click', function() {ChangeColorDiff(this)});
}
function ChangeDir(keycode){
    switch (keycode){
        case DIR.UP: {
            if (dir!=keycode)
        }
        case DIR.DOWN : {}
        case DIR.LEFT : {}
        case DIR.RIGHT : {}
        case DIR.W: {
            if (dir!=keycode)
        }
        case DIR.S : {}
        case DIR.A : {}
        case DIR.D : {}
    }
}
function MakeApple(){
    GenerateElement(4);
}
function MakeObstacel(){
    GenerateElement(1);
}
function MakeGoldApple(){
    GenerateElement(5);
}
function MakeGreen(){
    GenerateElement(6);
}
function GenerateElement(index){
    let x, y;
    do{
        x = Math.floor(Math.random()*17+1);
        y = Math.floor(Math.random()*17+1);
    }
    while (table[x][y] != 0);
    if (index==3){
        snekHead.x = x;
        snekHead.y = y;
    }
    table[x][y] = index;
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
        MakeTable();
        MakeApple();
        GenerateThem();
        MakeSnek();
        DrawTable();
        Game=setInterval(GameEngine, speed);
    }
}


function MakeSnek(){
    GenerateElement(3);
    snek.push({'x': snekHead.x, 'y': snekHead.y});
    dir = Math.floor(Math.random()*3);
    do{
        switch (dir){
            case 0:{
                if (table[snekHead.x-1][snekHead.y]==0){
                    table[snekHead.x-1][snekHead.y]=2;
                    snek.push({'x': snekHead.x-1, 'y': snekHead.y})
                    dir = 2;
                    
                }
                break;
            }
            case 1:{
                if (table[snekHead.x][snekHead.y+1]==0){
                    table[snekHead.x][snekHead.y+1]=2;
                    snek.push({'x': snekHead.x, 'y': snekHead.y+1})
                    dir = 2;
                    
                }
                break;
            }
            case 2:{
                if (table[snekHead.x][snekHead.y-1]==0){
                    table[snekHead.x][snekHead.y-1]=2;
                    snek.push({'x': snekHead.x, 'y': snekHead.y-1})
                    dir = 2;
                    
                }
                break;
            }
            case 3:{
                if (table[snekHead.x+1][snekHead.y]==0){
                    table[snekHead.x+1][snekHead.y]=2;
                    snek.push({'x': snekHead.x+1, 'y': snekHead.y})
                    dir = 2;
                    
                }
                break;
            }
        }
    }
    while (snek.length!=2);
}
function GenerateThem(){
    switch (difficulty){
        case "Easy":
            break;
        case "Normal":
            for (let i = 0; i < 5; i++)
                MakeObstacel();
            break;
        case "Hard":
            for (let i = 0; i < 10; i++)
                MakeObstacel();
            break;
        case "Extreme":
            for (let i = 0; i < 15; i++)
                MakeObstacel();
            break;
    }
}
function DrawTable(){
    let tabel = document.createElement('table');
    for (let i = 0; i < 20; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < 20; j++){
            let td = document.createElement('td');
            td.id = ELEMENTS[table[i][j]];
            if (ELEMENTS[table[i][j]]=="snekhead"){
                td.innerText=":";
            }
            tr.appendChild(td);
        }
        tabel.appendChild(tr);
    }
    document.querySelector('#game').appendChild(tabel);
    result.innerText = snek.length;
    let sh = document.querySelector('#snekhead');
    sh.style.transform = `rotate(${dir*90} deg)`;
}
function MakeTable(){
    for (let i = 0; i < 20; i++) {
        for (let g = 0; g < 20; g++) {
            if (i==19 || i==0 || g==19 || g==0){
                table[i][g]=1;
            }
            else{
                table[i][g]=0;
            }
        }
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
            return 0;
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