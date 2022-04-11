let button = document.querySelector('#submitB'),
    form = document.querySelector('form');
    formObj = {
        category: form.category,
        manufacturer: form.manufacturer,
        type: form.type,
        year: form.year,
        color: form.color,
        km: form.km,
        fueltype: form.Fuel,
        desc: form.desc,
        condition: form.allapot,
        extras: [
            {attr: form.extra[0].name, van: form.extra[0].checked}
            {attr: form.extra[1].name, van: form.extra[1].checked},
            {attr: form.extra[0].name, van: form.extra[0].checked},
            {attr: form.extra[0].name, van: form.extra[0].checked},
            {attr: form.extra[0].name, van: form.extra[0].checked},
            {attr: form.extra[0].name, van: form.extra[0].checked},
            {attr: form.extra[0].name, van: form.extra[0].checked}
        ],
        price: form.price,
        pic: form.picture
    }



button.addEventListener('click', ()=>{
    alert('Felvéve!');
});