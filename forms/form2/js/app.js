let form = document.querySelector('form'),
    submit = document.querySelector('#Submit');
    
submit.addEventListener('click', ()=>{
    if (Filled()){
        let phone = {
            Manufacturer: form.Manufacturer.value,
            Modell: form.Modell.value,
            Memory: form.Memory.value,
            Camera: form.Camera.value,
            OS: getCheck(form.OS).value,
            Carrier: getCheck(form.Carrier).value,
            Price: form.Price.value,
            Description: form.Description.value
        };
        ph_s.push(phone);
        localStorage.setItem('phones', JSON.stringify(ph_s));
        GetCount();
        alert('Adatok feltöltve')
    }
    else alert('Nem töltött ki minden adatot!');
})
function Filled(){
    return (form.Manufacturer.value!=""&& form.Modell.value!="" && form.Memory.value!="" && form.Camera.value!="" && form.Price.value!="");
}
function getCheck(List){
    for (let i = 0; i < List.length; i++) {
        if (List[i].checked) return List[i];
    }
}

