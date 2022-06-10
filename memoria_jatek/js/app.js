let game = false,
    gamer,
    diff,
    timer,
    found,
    tiles = [],
    min,
    sec,
    hrs,
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
                cols=4;
                rows=4;
                break;
            case "2":
                cols=6;
                rows=6;
                break;
            case "3":
                cols=6;
                rows=10;
                break;
        }
        genTable();
        timer = setInterval(Timer, 1000);
    }
    else alert('Írd be a neved!');
});
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
    for (let i = 0; i < rows; i++) {
        for (let g = 0; g < cols; g++) {
            tiles.push({
                "x": i,
                "y": g,
                "value": Math.floor(Math.random()*3),
                "status": 0
            })
        }     
    }
    DisplayTable();
    console.log(tiles);
}
function DisplayTable(){
    tiles.forEach(e=>{
        $('#Tiles').append('<div class="tile col-1"></div>')
    })
}
//tile = {
//    "x": 0,
//    "y": 0,
//    "value": 3,
//    "status": "",
//}