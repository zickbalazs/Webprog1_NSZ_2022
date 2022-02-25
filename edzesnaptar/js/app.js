let edzesek = ["Váll-, hátedzés", "Karedzés",  "Melledzés", "Lábedzés"]
let now = new Date();
let g = 3;
let napok = 3;
for (let i = 0;i < 30; i++){
    if (i == 0){
        let Month = MonthSetter();
        let Day = DaySetter();
        CreateRow(`${Month}.${Day}`, "Pihenőnap");
        napok = 1;
    }
    else{
        let Month = MonthSetter();
        let Day = DaySetter();
        now.setDate(now.getDate()+1);
        if (g==edzesek.length) g=0;
        if (napok==4){
            CreateRow(`${Month}.${Day}`,"Pihenőnap");
            napok=0;
        }
        else{
            CreateRow(`${Month}.${Day}`, edzesek[g]);
            g++;
        }
        napok++;
    }
}
function MonthSetter(){
    let month = now.getMonth()+1;
    if (month.toString().length==1){
        month = "0"+month;
    }
    return month;
}
function DaySetter(){
    let day = now.getUTCDate();
    if (day.toString().length==1){
        day = "0"+day;
    }
    return day;
}
function CreateRow(datum, edzesfajta){
    let date = CreateDatumCell(datum, edzesfajta);
    let edzestipus = CreateEdzesCell(edzesfajta);
    let row = AppendCells(date, edzestipus, now);
    row.id = `_${now.getDay()}`
    document.querySelector('tbody').appendChild(row);
}
function CreateDatumCell(datum){
    let cell = document.createElement('td');
    cell.innerText = datum;
    return cell;
}
function CreateEdzesCell(edzesfajta){
    let cell = document.createElement('td');
    if (edzesfajta!="Pihenőnap"){
        cell.innerText=edzesfajta;
    }
    else {
        cell.innerText="";
        cell.id="athuzas";
    }
    return cell;
}
function AppendCells(cell1, cell2){
    let r = document.createElement('tr');
    r.appendChild(cell1);
    r.appendChild(cell2);
    return r;
}