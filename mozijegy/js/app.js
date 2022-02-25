let hely = new Array()
if (localStorage.getItem('szinhaz')!=null){
    hely = localStorage.getItem('szinhaz');
    document.body.innerHTML=(localStorage.getItem('szinhaz_tabla'));
}
else{
    //táblázat_rajzolás
    document.write('<div id="szinhazterem">')
    for( i=1; i<=15; i++ )
    {
        if(i == 1)  document.write("<span class='helyar'>7500.- Ft</span>")
        if(i == 6)  document.write("<span class='helyar'>5900.- Ft</span>")
        if(i == 11)  document.write("<span class='helyar'>4500.- Ft</span>")
        hely[i] = new Array()
        document.write("<span class='sorszam'>" + i + ".</span>")
        for( j=1; j<=24; j++ )
        {
            hely[i][j] = Math.floor( (1-Math.random()*Math.random())*2 )     
            if( hely[i][j]==1 )
            {
                document.write("<span class='szek foglalt' title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
            }
            else
            {
                document.write("<span class='szek szabad'  title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
            }
        }
        document.write("<br>")
        if(i%5==0) document.write("<hr size=1 color=#880000>")
    }
    localStorage.setItem('szinhazak', hely);
    localStorage.setItem('szinhazak_tabla', document.querySelector('#szinhazterem'));
    document.write('</div>')
}

AllFeladatok();

function AllFeladatok(){
    try {
        document.querySelector('#Eredmenyek').remove();
        
    } catch (error) {
        
    }
    let div = document.createElement('div');
    div.id="Eredmenyek";
    div.innerHTML+=('Szabad helyek száma: '+ElsoFeladat()+' db');
    div.innerHTML+=(`<br>Eladott jegyek százaléka: ${MasodikFeladat()}%`);
    div.innerHTML+=(`<br>Összbevétel: ${HarmadikFeladat()} Ft.`);
    div.innerHTML += NegyedikFeladat();
    if (OtodikFeladat()!=undefined){
        div.innerHTML += OtodikFeladat();
    }
    if (HatodikFeladat()!=undefined){
        div.innerHTML+=HatodikFeladat();
    }
    div.innerHTML += HetedikFeladat();
    if (NyolcadikFeladat()!=undefined){
        div.innerHTML += NyolcadikFeladat();
    }
    document.body.appendChild(div);
}
//1.: hány hely szabad?
function ElsoFeladat(){
    let count = 0;
    for (let i = 1; i < 16; i++) {
        for (let g = 1; g < 25; g++) {
            if (hely[i][g]!=1) {
                count++;
            }
        }        
    }
    return count;
}
//2.: Jegyek hány százaléka off?
function MasodikFeladat(){
 return (100 - ( ElsoFeladat() / (15*24) ) * 100).toFixed(2);
}
//3.:Jegyárbevétel mennyi?
function HarmadikFeladat(){
    let bevetel = 0;
    for (let i = 1; i < 16; i++) {
        for (let g = 1; g < 25; g++) {
            if (hely[i][g]==1){
                if (i<6) {
                    bevetel+=7500;
                    continue;
                }
                else if (i<11){
                    bevetel+=5900; 
                    continue;
                } 
                else{
                    bevetel+=4500;
                    continue;
                } 
            }
        }        
    }
    return bevetel;
}
//4.: Melyik kategória hozta a legtöbbet?
function NegyedikFeladat(){
    let kategoriak = [];
    let kategoria = 0;
    let kategoria_jegyei = 0;
    for (let i = 1; i < 16; i++) {
        if (i%5==0){
            kategoriak.push([kategoria, kategoria_jegyei]);
            kategoria++;
            kategoria_jegyei=0;
        }
        for (let g = 1; g < 25; g++) {
            if (hely[i][g]==1) kategoria_jegyei++;
        }
    } 
    let maxjegyek = 0;
    let legjobb;
    for (let i = 0; i < kategoriak.length; i++) {
        if (kategoriak[i][1]>maxjegyek){
            legjobb=kategoriak[i];
            maxjegyek=kategoriak[i][1];
        } 

    }
    return (`<br>A legtöbb jegy a ${legjobb[0]+1}. kategóriából kelt el.`)
}
//5.: Van-e üres sor?
function OtodikFeladat(){
    for (let i = 1; i < 16; i++) {
        guudsor = 0;
        for (let g = 1; g < 25; g++) {
            if (hely[i][g]==1) guudsor++;
        }
        if (guudsor==24){
            return (`<br>Üres a ${i}. sor`);
        } 
    }
}
//6.: Van-e ahol négy szabad hely van egymás mellet?
function HatodikFeladat(){
    let szabadhelyek = 4;
    for (let i = 1; i < 16; i++) {
        for (let g = 1; g < 25-4; g++) {
            if (hely[i][g]==0) {
                szabadhelyek--;
                if (szabadhelyek==0){
                    return (`<br>Van négy egymás melletti hely a ${i}. sorban`)
                }
            }
            else {
                szabadhelyek=4;
            }
        }
    }
}   
//7.: Hány párnak lehet jegyet eladni? 
function HetedikFeladat(){
    let parok = 0;
    for (let i = 1; i < 16; i++) {
        for (let g = 1; g < 25; g++) {
            if (hely[i][g]==0 && hely[i][g+1]==0){
                parok++;
                g++;
            } 
        }
    }
    return (`<br>Összesen ${parok} párnak van hely.`)
}
//8.: Oldalsó legolcsóbb jegy
function NyolcadikFeladat(){
    let kategoria = 4;
    let ureshelyek = 0;
    for (let i = 15; i > 0; i--) {
        if (i%5==0) {
            if (ureshelyek>0){
                return LegkisebbSor(kategoria)
            }
            kategoria--;
        }
        if (hely[i][1] == 0 || hely[i][24] == 0){
            ureshelyek++;
        }
    }
}
function LegkisebbSor(kategoria){
    let legelol = kategoria*5+1;
    let hu = 0;
    for (let i = kategoria*5; i > (kategoria*5)-5; i--) {
        if (hely[i][1]==0 && i < legelol){
            legelol = i;
            hu = 1;
        }
        else if (hely[i][24]==0 && i<legelol){
            legelol = i;
            hu = 24;
        }
    }
    return (`<br>A ${legelol}. sor ${hu}. hely az üres oldalsó legolcsóbb jegy.`)
}
GetUresHely();
function GetUresHely(){
    let spanok = document.getElementsByTagName('span');
    for (let i = 0; i < spanok.length; i++) {
        spanok[i].addEventListener('click', function(){
            let sor = GetSor(spanok[i]);
            let szek = GetSzek(spanok[i]);
            if (hely[sor][szek]==1){
                Ureser(spanok[i]); spanok[i].classList.replace("foglalt", "szabad");
            }
            else{
                Ureser(spanok[i]); spanok[i].classList.replace("szabad", "foglalt");
            }
            
        })
    }
}
function Ureser(span){
    let sor = span.title.split('[')[1].split(']')[0];
    let szek = span.title.split('[')[2].split(']')[0];
    if (hely[sor][szek]==0){
        hely[sor][szek]=1;
    }
    else hely[sor][szek]=0;
    AllFeladatok();     
}
function GetSor(span){
    return span.title.split('[')[1].split(']')[0];
}
function GetSzek(span){
    return span.title.split('[')[2].split(']')[0];
}