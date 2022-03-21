let dice1, dice2,
    dice1Img = document.getElementById('_1d'),
    dice2Img = document.getElementById('_2d'),
    resSpan = document.getElementById('result'),
    results = document.querySelector('.result'),
    totalthrows = 0,
    throws = [];
Dice();
document.querySelector('button').addEventListener('click', Dice);
function Dice(){
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
    dice1Img.src = `img/${dice1}.png`;
    dice2Img.src = `img/${dice2}.png`;
    resSpan.innerText = dice1+dice2;
    throws.push(dice1+dice2);
    totalthrows++;
    UpdateResults();
}
function UpdateResults(){
    let divs = document.createElement('div');
    let last = document.createElement('div');
    let lastD = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = totalthrows + ".";
    let d1 = document.createElement('img'),
        spanP = document.createElement('span'),
        d2 = document.createElement('img'),
        spanEq = document.createElement('span');
    d1.src = `img/${dice1}.png`
    d2.src = `img/${dice2}.png`
    spanP.innerText = "+";
    spanEq.innerText = "=";
    lastD.append(p, d1, spanP, d2, spanEq);
    lastD.id="last";
    lastD.style.width = '11fr';
    last.append(lastD);
    for (let i = 2; i < 13; i++) {
        let div = document.createElement('div');
        div.id="res";
        let diagram = document.createElement('div');
        diagram.id="diagram";
        diagram.style.height = `calc(300px * ${GetStat(i)})`;
        let summer = document.createElement('p');
        summer.id = dice1 + dice2 == i ? "current" : "ossz";
        summer.innerText = i+'.';
        let percent = document.createElement('p');
        percent.innerText = (GetStat(i)*100).toFixed(1)+"%";
        div.append(diagram, summer, percent);
        divs.append(div);
    }
    results.innerHTML = last.innerHTML + divs.innerHTML;
}
function GetStat(sum){
    let db = 0;
    for (let i = 0; i<throws.length;i++){
        if (throws[i]==sum){
            db++;
        }
    }
    return db/throws.length;
}