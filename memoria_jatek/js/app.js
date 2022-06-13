let game = false,
    gamer,
    diff,
    timer,
    found = 0,
    total,
    tiles = [],
    min,
    sec,
    hrs,
    check1,
    check2
    cols=0,
    rows=0;


$(document).ready(()=>{
    gamer = $('#name').val();
    diff = $('#diff').val();
    min=0;
    hrs=0;
    sec=0;
});

function Timer(){
    sec++;
    if (sec==60){
        min++;
        sec=0;
    }
    if (min==60){
        hrs++;
        sec=0;
        min=0;
    }
    UpdateTimer();
}
function UpdateTimer(){
    $('#time').val(`${hrs<10?"0"+hrs:hrs}:${min<10?"0"+min:min}:${sec<10?"0"+sec:sec}`)
}
$('#Schtarten').click(()=>{
    found = 0;
    gamer = $('#name').val();
    diff = $('#diff').val();
    if (gamer!=""){
        game = true;
        $('#Start').fadeOut(()=>{
            $('#Game').fadeIn();
        });
        $('#lore').html(`<p>Név: ${gamer}</p> <p>|</p> <p>Nehézség: ${diff==1?"Könnyű":diff==2?"Közepes":"Nehéz"}</p>`);
        $('#time').val(`${hrs<10?"0"+hrs:hrs}:${min<10?"0"+min:min}:${sec<10?"0"+sec:sec}`)
        switch(diff){
            case "1":
                cols=2;
                rows=2;
                break;
            case "2":
                cols=4;
                rows=4;
                break;
            case "3":
                cols=6;
                rows=6;
                break;
        }
        total = Math.round((cols*rows)/2);
        UpdateTotals();
        genTable();
        timer = setInterval(Timer, 1000);
    }
    else alert('Írd be a neved!');
});
function UpdateTotals(){
    $("#found").val(`${found}/${total}`);
    if (total==found){
        clearInterval(timer);
        alert("Vége");
    }
}
$('#reset').click(()=>{
    if (confirm('Biztosan újrakezdi?')){
        game = false;
        clearTimeout(timer);
        hrs=0;
        min=0;
        sec=0;
        $('#Game').hide();
        $('#Start').show();
    }

})

function genTable(){
    let values = [];
    for (let i = 1; i <= cols*rows / 2; i++) {
        values.push(i);
        values.push(i);
    }
    $('#Tiles').html("");
    for (let i = 0; i < rows; i++) {
        for (let g = 0; g < cols; g++) {
            let index = Math.floor(Math.random()*values.length);
            tiles.push({
                "x": i,
                "y": g,
                "value": values[index],
                "status": 0
            })
            values.splice(index, 1);
        }     
    }
    DisplayTable();
}
function DisplayTable(){
    tiles.forEach(e=>{
        $('#Tiles').append(`<div class="col-md-1 tile" id="_${e.x}${e.y}" onclick="ClickOn(${e.x}, ${e.y})"><img src="img/${e.value}.png"></div>`)
        $(`#_${e.x}${e.y}`).children().hide();
    })
}


function ClickOn(x,y){
    $(`#_${x}${y}`).children().show();
    $(`#_${x}${y}`).css('transform', 'rotate3d(0,1,0,360deg)');
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].x==x&&tiles[i].y==y) {
            tiles[i].status = 1;
            if (check1==undefined){
                check1=tiles[i];
            }
            else if (check2==undefined && tiles[i]!=check1){
                check2=tiles[i];
                CheckDemTiles();
            }
            break;
        }

    }
    
}
function CheckDemTiles(){
    if (check1.value==check2.value) {
        tiles[tiles.indexOf(check1)].status=2;
        tiles[tiles.indexOf(check2)].status=2;
        found++;
        check1 = undefined;
        check2 = undefined;
        UpdateTotals();
    }
    else{
        tiles[tiles.indexOf(check1)].status=0;
        tiles[tiles.indexOf(check2)].status=0;
        $(`#_${check1.x}${check1.y}`).css('transform', 'rotate3d(0,0,0,0deg)');
        $(`#_${check2.x}${check2.y}`).css('transform', 'rotate3d(0,0,0,0deg)');
        $(`#_${check1.x}${check1.y}`).children().hide();
        $(`#_${check2.x}${check2.y}`).children().hide();
        check1 = undefined;
        check2 = undefined;
    }
}
//tile = {
//    "x": 0,
//    "y": 0,
//    "value": 3,
//    "status": "",
//}