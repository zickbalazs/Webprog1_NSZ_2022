let table = document.querySelector('table'),
    gameB = document.querySelector('button'),
    stepsI = document.querySelector('#punktz'),
    steps = 0,
    timerI = document.querySelector('#timer'),
    time,
    game = false,
    s=0,
    m=0,
    h=0,
    sT,
    mT,
    hT,
    pics = [1,2,3,4,5,7,8,9],
    aktelem = 0;


document.addEventListener('keydown', (event)=> {
    switch(event.code){
        case 'KeyA':
            console.log('KeyA');
            steps++;
            break;
        case 'KeyD':
            console.log('KeyD');
            steps++;
            break;
        case 'KeyW':
            console.log('KeyW');
            steps++;
            break;
        case 'KeyS':
            console.log('KeyS');
            steps++;
            break;
        case 'ArrowUp':
            console.log('KeyW');
            steps++;
            break;
        case 'ArrowDown':
            console.log('KeyS');
            steps++;
            break;
        case 'ArrowLeft':
            console.log('KeyA');
            steps++;
            break;
        case 'ArrowRight':
            console.log('KeyD');
            steps++;
            break;
    }
    if (!game){
        game = true;
        time = setInterval(Timer, 1000);
    }
    UpdateDisplay();
})
function Timer(){
    s++;
    if (s==60){
        s=0;
        m++;
    }
    if (m==60){
        m=0;
        h++;
    }
    sT = s.toString().length==1 ? '0'+s : s;
    mT = m.toString().length==1 ? '0'+m : m;
    hT = h.toString().length==1 ? '0'+h : h;
    UpdateDisplay();
}
function UpdateDisplay(){
    stepsI.value = steps;
    timerI.value = `${hT}:${mT}:${sT}`
}
function DrawTable(){
    for (let i = 0; i < 3; i++){
        let tr = document.createElement('tr');
        for (let g = 0; g < 3; g++) {
            let td = document.createElement('td');
            let img = document.createElement('img');
            img.src=`img/miceh-${g}-${i}.png`
            td.id=`i${g}${i}`
            td.appendChild(img);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
DrawTable();