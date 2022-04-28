let phones = document.querySelector('#phones');
let ph_s = [];
if (localStorage.getItem('phones')!=null){
    ph_s = JSON.parse(localStorage.getItem('phones'));
}


GetCount();
function GetCount(){
    document.querySelector('#count').innerText= ph_s.length==0 ? `Jelenleg nincs telefon!` : `Jelenleg ${ph_s.length} telefon áll rendelkezésre`;
    ShowPhones();
}
function ShowPhones(){
    let container = document.createElement('div');
    if (document.querySelector('.phones')!=null){
        document.querySelector('.phones').innerHTML="";
    }
    container.classList.add('phones');
    for (let i = 0; i < ph_s.length; i++) {
        container.appendChild(CreatePhone(ph_s[i]));
    }
    document.querySelector('#phones').append(container);
}
function CreatePhone(phone){
    let div = document.createElement('div'),
        h3 = document.createElement('h3'),
        desc = document.createElement('p'),
        ul = document.createElement('ul')
        price = document.createElement('p');
    h3.innerText=`${phone.Manufacturer} ${phone.Modell}`;
    desc.innerText=phone.Description;
    ul.innerHTML = `<li>${phone.Memory} Gb memória</li> <li>${phone.Camera} MP-es kamera</li> <li>${phone.OS} operációs rendszer</li> <li>${phone.Carrier}</li>`
    price.innerText= `${phone.Price} Ft`;
    div.append(h3, price, ul, desc);
    return div;
}