let xinp = document.querySelector('#x');
let yinp = document.querySelector('#y');
let table = document.querySelector('table');
let x = 3, y = 3;
let cells = [];


CreateTable(x,y);

xinp.addEventListener('change', function(){
    x=xinp.value;
    y=yinp.value;
    CreateTable(x,y);
})
yinp.addEventListener('change', function(){
    x=xinp.value;
    y=yinp.value;
    CreateTable(x,y)
})

function CreateTable(z, t){
    table.innerHTML="";
    for (let i = 0; i < z; i++) {
        let row = document.createElement('tr');
        for (let g = 0; g < t; g++) {
            let td = document.createElement('td');
            td.innerText = (g+1)*(i+1);
            td.title = `${g+1}*${i+1}=${(i+1) * (g+1)}`
            row.appendChild(td);
        }        
        table.appendChild(row);
    }
    CreateEvents();
}


function CreateEvents(){
    cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function(){HighlightDem(cells[i])})
        cells[i].addEventListener('mouseout', function(){ResetColors(cells[i])})
    }

}
function ResetColors(cell){
    let col = cell.title.split('*')[0];
    let rw = cell.title.split('*')[1].split('=')[0];
    let rows = document.getElementsByTagName('tr')[rw-1].getElementsByTagName('td')[0];
    let cols = document.getElementsByTagName('tr')[0].getElementsByTagName('td')[col-1];
    rows.style.background="";
    cols.style.background="";
}
function HighlightDem(cell){
    let col = cell.title.split('*')[0];
    let rw = cell.title.split('*')[1].split('=')[0];
    let rows = document.getElementsByTagName('tr')[rw-1].getElementsByTagName('td')[0];
    let cols = document.getElementsByTagName('tr')[0].getElementsByTagName('td')[col-1];
    rows.style.background="yellow";
    cols.style.background="yellow";
}