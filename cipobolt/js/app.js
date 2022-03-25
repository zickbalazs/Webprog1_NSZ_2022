
let resultDiv = document.querySelector('.result'),
    datesDiv = document.querySelector('.dates'),
    datumok = [];
GenDates();
LaunchResults();
function GenDates(){
    for (let i = 0; i < 6; i++) {
        datumok.push(SetRandom());
    }
    DisplayDates();
}
function SetRandom(){
    let d = new Date();
    if (Math.floor(Math.random()*10)%2==0){
        let maxdays = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
        let date = new Date(d.getFullYear(), d.getMonth(), Math.floor(Math.random()*maxdays)+1);
        return date;
    }
    else{
        let maxdays = new Date(d.getFullYear(), d.getMonth(), 0).getDate();
        let date = new Date(d.getFullYear(), d.getMonth()-1, Math.floor(Math.random()*maxdays)+1);
        return date;
    }
}
function DisplayDates(){
    datesDiv.innerHTML = "";
    for (let i = 0; i < datumok.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<p>${("0"+(datumok[i].getMonth()+1)).slice(-2)}.${("0"+datumok[i].getDate()).slice(-2)}</p>`;        
        datesDiv.append(div);
    }
}
function _1(){
    let diff = 900000,
        dathuum;
    datumok.forEach(element =>{
        if (new Date() > element){
            if ((new Date()-element) /1000/60/60/24 < diff){
                diff = (new Date()-element) /1000/60/60/24;
                dathuum = element;
            }
        }
    });
    return MakeP(`a) Az eddigi utolsó beszállítás ${dathuum.getMonth()+1}.${dathuum.getDate()}-kor volt`)
}
function _2(){
    let true_e = false;
    datumok.forEach(e => {
        if (new Date().getMonth()==e.getMonth() && new Date().getDate()>e.getDate()){
            true_e = true;
        }
    });
    return MakeP(true_e ? "b) Ebben a hónapban már történt beszállítás." : "b) Ebben a hónapban még nem történt beszállítás");
}
function _3(){
    let db = 0;
    datumok.forEach(e =>{
        if (e>new Date()) db++;
    });
    return MakeP(`c) ${db>0?`Ebben a hónapban még ${db} beszállítás van` : "Ebben a hónapban nincs több beszállítás"}`);
}
function _4(){
    let yes = false;
    for (let i = 0; i < datumok.length; i++) {
        for (let g = 0; g < datumok.length; g++) {
            if (datumok[g].getMonth()==datumok[i].getMonth() && datumok[g].getDate()==datumok[i].getDate() &&i != g){
                yes = true;
                break;
            }
        }
    }    
    return MakeP(yes ? "d) Van szállítás ugyanazon a napon!" : "d) Nincs szállítás ugyanazon a napon.");
}
function MakeP(text){
    let p = document.createElement('p');
    p.innerText = text;
    return p;
}
function LaunchResults(){
    resultDiv.innerHTML = "";
    resultDiv.append(_1());
    resultDiv.append(_2());
    resultDiv.append(_3());
    resultDiv.append(_4());
}