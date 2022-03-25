let dates2Div = document.querySelector('.dates2'),
    result2Div = document.querySelector('.result2'),
    N = GenerateSizes('N'),
    F = GenerateSizes('F');


function Results(){

}
function DrawSizes(){
    dates2Div.innerHTML = "";
    let divN = document.createElement('div'),
        divF = document.createElement('div');
    for (let g = 0; g < N.length; g++) {
        let text = document.createElement('p');
        text.innerText=N[g];
        divN.append(text);
        text.innerText=F[g];
        divF.append(text);
    }
    dates2Div.append(div);
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