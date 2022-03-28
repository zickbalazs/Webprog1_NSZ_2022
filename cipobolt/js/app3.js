let hours = GenHours(),
    resultDiv = document.querySelector('.result'),
    dateDiv = document.querySelector('.date');
console.log(hours);
function GenHours(){
    let tomb = [];
    for (let i = 0; i < 11; i++) {
        tomb.push(GenHour());
    }
    return CheckTomb(tomb) ? tomb : GenHours();
}
function CheckTomb(array){
    for (let i = 0; i < array.length; i++) {
        let count = 0
        for (let g = 0; g < array.length; g++) {
            if (i!=g && array[i].alltime-array[g].alltime < 181 && array[i].alltime!=array[g].alltime){
                count++;
            }
        }
        if (count<2) return false;
    }
    return true;
}
function GenHour(){
    let h = Math.floor(Math.random()*24);
    let m = Math.floor(Math.random()*60);
    let all = h*60 + m;
    return{
        hour: h,
        minute: m,
        alltime: all
    };
}
//function DisplayHours(){
//    hours.forEach(time =>{
//        MakeP(time.hour);
//    });
//}
function CheckTimes(array, time){
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(time.alltime - array[i].alttime) < 181) return true;
    }
    return false;
}
function MakeP(text){
    let p = document.createElement('p');
    p.innerText = text;
    return p;
}