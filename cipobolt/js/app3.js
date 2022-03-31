let resultD=document.querySelector('.result'),
    dataD = document.querySelector('.data'),
    hours = GenHours();



DisplayData();
DisplayResults();
function DisplayResults(){
    resultD.innerHTML = "";
    resultD.append(A(), B(), C(), D());
}
function A(){
    let db = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i].h < 20 && hours[i].h > 11){
            db++;
        }
    }
    return MakeP(`a) Összesen ${db} fő vásárolt 12-20 óra között.`);
}
function B(){
    for (let index = 0; index < hours.length; index++) {
        if (hours[index].h>2){
            if (hours[index].h < 4) return MakeP("b) Volt rendelés leadva 3 és 4 között.");
        }
    }     
    return MakeP("b) Nem volt rendelés leadva 3 és 4 között.");
}
function C(){
    for (let i = 0; i < hours.length; i++) {
        if (hours[i].h == 12){
            if (hours[i].m>0) return MakeP(`c) Az első délutáni vásárlás ${hours[i].h.toString().length == 1 ? "0"+hours[i].h : hours[i].h}:${hours[i].m.toString().length == 1 ? "0"+hours[i].m : hours[i].m}-kor volt`);
        }
        else if (hours[i].h>12) return MakeP(`c) Az első délutáni vásárlás ${hours[i].h.toString().length == 1 ? "0"+hours[i].h : hours[i].h}:${hours[i].m.toString().length == 1 ? "0"+hours[i].m : hours[i].m}-kor volt`);
    }
    return MakeP("");
}
function D(){
    let betweens = GetDifference() / 12;
    return MakeP(`d) Átlagosan ${betweens.toFixed(0)} percet kellett várni a rendelések között`);
}
function GetDifference(){
    let all = 0;
    for (let i = 0; i < hours.length-1; i++) {
        all+=Math.abs(hours[i].a - hours[i+1].a);
    }
    return all;
}
function DisplayData(){
    dataD.innerHTML = "";
    for (let index = 0; index < hours.length; index++) {
        dataD.append(MakeP(`${hours[index].h.toString().length == 1 ? "0"+hours[index].h : hours[index].h}:${hours[index].m.toString().length == 1 ? "0"+hours[index].m : hours[index].m}`));
    }
}
function MakeP(text){
    let p = document.createElement('p');
    p.innerText=text;
    return p;
}
function GenHours(){
    let tomb = [];
    for (let index = 0; index < 12; index++) {
        tomb.push(Hour());
    }
    return TombCheck(tomb) ? tomb: GenHours();
}
function TombCheck(array){
    return Order(array) && NoSame(array)
}
function Order(array){
    for (let i = 0; i < array.length; i++) {
        for (let g = i; g < array.length; g++) {
            if (array[i].a>array[g].a){
                let temp = array[i];
                array[i]=array[g];
                array[g]=temp;
            }            
        }        
    }
    for (let index = 0; index < array.length-1; index++) {
        if (Math.abs(array[index].a - array[index+1].a) > 180) return false;
    }
    return true;
}
function NoSame(array){
    for (let i = 0; i < array.length; i++) {
        for (let g = 0; g < array.length; g++) {
            if (i!=g && array[i].a==array[g].a) return false;            
        }        
    }
    return true;
}
function Hour(){
    let hours = Math.floor(Math.random()*24),
        minutes = Math.floor(Math.random()*60);
    return {
        h: hours,
        m: minutes,
        a: hours*60 + minutes
    };
}