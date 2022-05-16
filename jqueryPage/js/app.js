let animals = [
    {
        "type":"cat",
        "name":"Miceh",
        "age":2,
        "gender":"female",
        "picture":"img/miceh.png",
        "description":"Lorem ipsum dolor sit amet consictetudor adispiscing elit",
        "price": 0
    },
    {
        "type":"cat",
        "name":"Miceh2",
        "age":2,
        "gender":"female",
        "picture":"img/miceh2.png",
        "description":"Lorem ipsum dolor sit amet consictetudor adispiscing elit",
        "price": 5000
    },
    {
        "type":"cat",
        "name":"Sanyi",
        "age":2,
        "gender":"female",
        "picture":"img/shalomander.png",
        "description":"Lorem ipsum dolor sit amet consictetudor adispiscing elit",
        "price": 25000
    },
    {
        "type":"dog",
        "name":"Doci",
        "age":7,
        "gender":"female",
        "picture":"img/doci_raw.png",
        "description":"Lorem ipsum dolor sit amet consictetudor adispiscing elit",
        "price": 30000
    },
    {
        "type":"dog",
        "name":"Blöki",
        "age":1,
        "gender":"male",
        "picture":"img/doci_raw.png",
        "description":"Lorem ipsum dolor sit amet consictetudor adispiscing elit",
        "price": 25000
    }
]
let info = {
    'address': '6500 Baja, Bácska tér 1.',
    'email':'menhely@mail.com',
    'phone':'06-23-12345678'
}
document.onload=contentLoad('main.html', '');
function DisplayInfo(){
    document.querySelector('#count').innerHTML = `Hirdetések száma: ${animals.length} db`;
    document.querySelector('#info').querySelectorAll('p')[0].innerHTML=`<h5>Cím:</h5>${info.address}`;
    document.querySelector('#info').querySelectorAll('p')[1].innerHTML=`<h5>E-Mail:</h5> ${info.email}`;
    document.querySelector('#info').querySelectorAll('p')[2].innerHTML=`<h5>Telefon:</h5>${info.phone}`;
}
$('document').ready(()=>{
    DisplayInfo();
})
function activeChange(to){
    document.querySelector('.active').classList.toggle('active');
    document.querySelector(to).classList.toggle('active');
}
function contentLoad(filename, animal){
    $('#content').fadeOut(300, ()=>{
        $('#content').load('html/'+filename, ()=>{
            $('#animals').html(GetAnimals(animal));
        });
        $('#content').fadeIn();
    });
}
function GetAnimals(animal){
    let div = document.createElement('div');
    div.classList.add('container');
    let row = document.createElement('div');
    row.classList.add('row');
    let i = 0;
    animals.forEach(e=>{
        if (i%3==0){
            div.append(row);
            row.innerHTML="";
        }
        if (e.type==animal){
            let card = document.createElement('div');
            card.classList.add('col-lg-4', 'gx-3','card')
            card.innerHTML=`<img src=${e.picture} class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${e.name}</h5>
                    <p class="card-text">
                        <ul>
                            <li>Életkor: ${e.age} év</li>
                            <li>Ár: ${e.price}</li>
                        </ul>${e.description}
                    </p>
                </div>`;
            i++;
            row.append(card);
        }
    })
    return div;
}