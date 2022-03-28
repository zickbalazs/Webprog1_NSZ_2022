let dates2Div = document.querySelector('.dates2'),
    result2Div = document.querySelector('.result2'),
    N = GenerateSizes('N'),
    F = GenerateSizes('F');

DrawSizes();
function Results(){

}
function DrawSizes(){
    dates2Div.innerHTML = "";
    let divN = document.createElement('div'),
        divF = document.createElement('div');
    divN.id="N";
    divF.id="F";
    for (let g = 0; g < N.length; g++) {
        divN.append(MakePa(N[g]));
        divF.append(MakePa(F[g]));
    }
    dates2Div.appendChild(divF);
    dates2Div.appendChild(divN);
}
function MakePa(text){
    let p = document.createElement('p');
    p.innerText=text;
    return p;
}
function GenerateSizes(nem){
    let sizeMin, diff, sizes = [];
    if (nem = 'N'){
        sizeMin = 35;
        diff = 7;
    }
    else{
        sizeMin = 38;
        diff = 8;
    }
    for (let i = 0; i < 12; i++) {
        sizes.push(sizeMin + Math.floor(Math.random()*diff) + 1)
    }
    return sizes;
}


function ShRes(){
    result2Div.append(_());
    result2Div.append(__());
    result2Div.append(___());
    result2Div.append(____());
}
ShRes();
function _(){
    let max = 0;
    for (let i = 0; i < 12; i++) {
        if (N[i]>max){
            max = N[i];
        }
    }
    return MakePa(`a) A legnagyobb rendelt női cipő ${max} méretű`);
}
function __(){
    let Fatlag = 0, Natlag = 0;
    for (let i = 0; i < N.length; i++) {
        Fatlag+=F[i];
        Natlag+=N[i];
    }
    Fatlag /= 12;
    Natlag /= 12;
    return MakePa(`b) A két átlag közötti különbség ${Math.abs(Fatlag-Natlag)}`);
}
function ___(){
    let db = 0;
    for (let i = 0; i < N.length; i++) {
        if (N[i]>40) db++;
    }
    return MakePa(`c) A női cipők ${((db/12)*100).toFixed(2)} %-a 40-es méret feletti`);
}
function ____(){
    let Common = 0,
        Count = 0;
    for (let i = 35; i < 47; i++) {
        if (N.includes(i) || F.includes(i)){
            let db = 0;
            for (let g = 0; g < N.length; g++) {
                if (N[g] == i) db++;
                if (F[g] == i) db++;
            }
            if (db>Count){
                Count = db;
                Common = i;
            }
        }
    } 
    return MakePa(`d) A legtöbbet rendelt méret a ${Common} (${Count} db) volt`);
}