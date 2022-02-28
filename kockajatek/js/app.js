let a = []
let b = []
let c = []

let results = document.querySelector('.megoldasok');
let field = document.querySelector('.kockak');

GenerateResults();
DrawField(field);
WriteResults();

function WriteResults(){
    results.appendChild(Drawlist());
}
function Drawlist(){
    let ol = document.createElement('ol');
    //appendChild() helyett append(), így egyszerre pakol bele mindent, így nincs +8 sor kód.
    ol.append(AvgRoll(), MaxRoll(), TheNumber6(), AllSixes(), Ace(), TotalSames(), TotalDistinct(), StatisticEven(), KockakOsszege(), RareNumber(), CommonSum(), SameRoll());
    return ol;
}
//<p> nodeok létrehozása az eredményekhez
function AvgRoll(){
    let li = document.createElement('li')
    let avg = AvgRolled();
    li.innerText=`A dobások átlaga ${avg}`;
    return li;
}
function MaxRoll(){
    let li = document.createElement('li');
    let max = MaxRolled();
    li.innerText=`A dobások maximuma ${max}`;
    return li;
}
function TheNumber6(){
    let li = document.createElement('li');
    let sixes = Sixes();
    li.innerText=`Összesen ${sixes} alkalommal volt 6-os egy dobásban`;
    return li;
}
function AllSixes(){
    let li = document.createElement('li');
    let allsix = CountAllSix();
    li.innerText=`Összesen ${allsix} alkalommal fordult elő a 6.`
    return li;
}
function Ace(){
    let li = document.createElement('li');
    li.innerText = IsThereAnAce() ? "Van teljesen hatos dobás!" : "Nincs teljesen hatos dobás!";
    return li;
}
function TotalSames(){
    let li = document.createElement('li');
    let Sames = CountSames();
    li.innerText = `Összesen ${Sames} alkalommal volt ugyanolyan számból dobás`;
    return li;
}
function TotalDistinct(){
    let li = document.createElement('li');
    let Distincts = CountDistincts();
    li.innerText = `Összesen ${Distincts} alkalommal volt teljesen különböző dobás`;
    return li;
}
function StatisticEven(){
    let li = document.createElement('li');
    let Evens = CalculateStatistics();
    li.innerText = `A dobások ${Evens}%-ában fordult elő 2-es, 4-es, vagy 6-os`
    return li;
}
function KockakOsszege(){
    let li = document.createElement('li');
    let Szum = GetKockaSum();
    li.innerText = Szum == "" ? "Nem volt olyan dobás amivel két szám összegét kaptuk!" : `Voltak dobás(ok), amiben két szám összegét kaptuk!\n${GetKockaSum()}`;
    return li;
}
function RareNumber(){
    let li = document.createElement('li');
    let Rare = GetRarestNumber();
    li.innerText = `A legkevesebbszer a ${Rare} szám fordult elő`;
    return li;
}
function CommonSum(){
    let li = document.createElement('li');
    let Commons = GetCommonSum();
    li.innerText = `A legtöbbször előforduló összeg ${Commons}`;
    return li;
}
function SameRoll(){
    let li = document.createElement('li');
    let same = IsThereSameRoll();
    li.innerText = same ? "Volt megyegyező dobás!":"Nem volt megegyező dobás."
    return li;
}
//Konkrét feladatok
function IsThereSameRoll(){
    for (let i = 1; i < 21; i++) {
        for (let g = 1; g < 21; g++) {
            if (Check(i, g))
            {
                console.log(i);
                console.log(g);
                return true; 
            } 
                
        }        
    }
    return false;
}
function Check(i1, i2){
    if (i1==i2) return false;
    if (a[i1]==a[i2]){
        if (b[i1]==b[i2]){
            if (c[i1]==c[i2]){
                return true;
            }
        }   
        else if (b[i1]==c[i2]){
            if (c[i1]==b[i2]){
                return true;
            }
        } 
    }
    else if (a[i1]==b[i2]){
        if (b[i1]==c[i2]){
            if (c[i1]==a[i2]){
                return true;
            }
        }
        else if (b[i1]==a[i2]){
            if (c[i1]==c[i2]){
                return true;
            }
        }
    }
    else if (a[i1]==c[i2]){
        if (b[i1]==a[i2]){
            if (c[i1]==b[i2]){
                return true;
            }
        }
        else if (b[i1]==b[i2]){
            if(a[i1]==a[i2]){
                return true;
            }
        }
    }
    return false;
}
function GetCommonSum(){
    let sums = [];
    for (let i = 1; i < 21; i++){
        sums[i] = a[i]+b[i]+c[i];
    }
    let Distinct_elemek = [];
    sums.forEach(element=>{
        if (!Distinct_elemek.includes(element)) Distinct_elemek.push(element);
    });
    let index = 0;
    let num = Number.MIN_VALUE;
    for (let i = 0; i < Distinct_elemek.length; i++) {
        let count = 0;
        for (let g = 1; g < 21; g++) {
            count += Distinct_elemek.includes((a[i]+b[i]+c[i])) ? 1 : 0;
        }        
        if (count>num){
            num=count;
            index = i;
        }
    }
    return Distinct_elemek[index];
}
function GetRarestNumber(){
    let tomb = [];
    for (let i = 1; i < 7; i++) {
        let count = 0;
        for (let g = 1; g < 21; g++){
            count+=a[g]==i?1:0;
            count+=b[g]==i?1:0;
            count+=c[g]==i?1:0;
        }
        tomb[i] = [i, count];
    }
    let num = 1;
    let ritkaszam = Number.MAX_VALUE;
    tomb.forEach(element=>{
        if (element[1]<ritkaszam){
            ritkaszam = element[1];
            num = element[0];
        }        
    });
    return `${num} (${ritkaszam})`;
}
function GetKockaSum(){
    let string = "";
    for (let i = 1; i < 21; i++) {
        if (a[i]+b[i]==c[i]) string +=`${i}. dobás: ${a[i]} + ${b[i]} = ${c[i]}\n`
        else if (c[i]+b[i]==a[i]) string +=`${i}. dobás: ${c[i]} + ${b[i]} = ${a[i]}\n`
        else if (a[i]+c[i]==b[i]) string +=`${i}. dobás: ${a[i]} + ${c[i]} = ${b[i]}\n`
    }
    return string;
}
function CalculateStatistics(){
    let total_evens = 0;
    for (let i = 1; i < 21; i++) {
        total_evens+=a[i]%2==0 ? 1:0;
        total_evens+=b[i]%2==0 ? 1:0;
        total_evens+=c[i]%2==0 ? 1:0;
    }
    return ((total_evens/60)*100).toFixed(2);
}
function CountDistincts(){
    let count = 0;
    for (let i = 1; i < 21; i++) {
        count+=(a[i]!=b[i] && a[i]!=c[i] && b[i]!=c[i]) ? 1:0;
    }
    return count;
}
function CountSames(){
    let count = 0;
    for (let i = 1; i < 21; i++) {
        count+=(a[i]==b[i]&&a[i]==c[i]) ? 1:0;
    }
    return count;
}
function IsThereAnAce(){
    for (let i = 1; i < 21; i++) {
        if (a[i]==6 && b[i]==6 && c[i]==6) return true;
    }
    return false;
}
function Sixes(){
    let count = 0;
    for (let i = 1; i < 21; i++) {
        if (a[i]==6 || b[i]==6 || c[i]==6){
            count++;
        }        
    }
    return count;
}
function CountAllSix(){
    let count = 0;
    for (let i = 1; i<21; i++){
        count += a[i]==6 ? 1:0;
        count += b[i]==6 ? 1:0;
        count += c[i]==6 ? 1:0;
    }
    return count;
}
function AvgRolled(){
    let sum = 0;
    a.forEach(element => {
        sum+=element;
    });
    b.forEach(element => {
        sum+=element;
    });
    c.forEach(element => {
        sum+=element;
    });
    return sum/20;
}
function MaxRolled(){
    let max = a[1]+b[1]+c[1];
    for (let i = 1; i < 21; i++) {
        if (a[i]+b[i]+c[i]>max){
            max=a[i]+b[i]+c[i];
        }        
    }
    return max;
}
//Játékmező létrehozása
function GenerateResults(){
    for (let i = 1; i < 21; i++) {
        a[i] = GenDobas();
        b[i] = GenDobas();
        c[i] = GenDobas();
    }
}
function GenDobas(){
    return Math.floor(Math.random()*6)+1;
}
function DrawField(field){
    for (let i = 1; i < 21; i++){
        field.appendChild(GenDices(i));        
    }
}
function GenDices(index){
    let dices = GenDiv(a[index], b[index], c[index], index);
    return dices;
}
function GenDiv(roll_a, roll_b, roll_c, index){
    let div = document.createElement('div');
    div.id="dices";
    div.appendChild(Create_A_Dice(roll_a));
    div.appendChild(Create_A_Dice(roll_b));
    div.appendChild(Create_A_Dice(roll_c));
    return div;
}
function Create_A_Dice(number){
    let image = document.createElement('img');
    image.src=`img/${number}.PNG`;
    return image;
}