let DataD = document.querySelector('.data'),
    ReslD = document.querySelector('.result'),
    Prices = GenPrices();



DisplayData();
DisplayRes();
function DisplayRes(){
    ReslD.innerHTML="";
    ReslD.append(MakeP(`a) ${Avg().toFixed(1)} az átlagos kosárérték`));
    ReslD.append(MakeP(`b) ${Arany()}x a legnagyobb rendelési érték az átlagosnak`));
    ReslD.append(Draga());
    ReslD.append(MakeP(`c) ${Tobbek()}% vett több cipőt.`));
}
function DisplayData(){ 
    Prices.forEach(a => {
        DataD.appendChild(MakeP(`${a.ar}.-`));
    });
}
function MakeP(text){
    let p = document.createElement('p');
    p.innerText=text;
    return p;
}
function GenPrices(){
    let tomb = [];
    for (let i = 0; i < 12; i++){
        let price = (Math.floor((Math.random()*19) + 5) * 1000) + 990;
        let chance = RNG();
        const obj = {
            ar: price*chance,
            db: chance
        }
        tomb.push(obj);
    }
    return tomb;
}
function RNG(){
    let num = Math.random()*16 + 1;
    return Math.floor(Math.random()*2)==0? 1 : num%2==0 ? 2 : Math.floor(Math.random()*4+1) % 4 == 0 ? 4 : Math.floor(Math.random()*4+1);
}

function Avg(){
    let sum = 0;
    for (let i = 0; i < Prices.length; i++) {
        sum+=Prices[i].ar;
    }
    return sum / Prices.length;
}
function Arany(){
    let max = 0;
    for (let i = 0; i < Prices.length; i++) {
        if (Prices[i].ar>max) max = Prices[i].ar;
    }
    return (max / Avg()).toFixed(2);
}

function Draga(){
    for (let i = 0; i < Prices.length; i++) {
        if (Prices[i].ar>50000) return MakeP('c) Volt 50 ezer forint fölötti rendelés');
    }
    return MakeP('c) Nem volt 50 ezer fölötti rendelés');
}
function Tobbek(){
    let db = 0;
    for (let i = 0; i < Prices.length; i++) {
        if (Prices[i].db>1) db++;
    }
    return ((db / Prices.length) * 100).toFixed(2);
}