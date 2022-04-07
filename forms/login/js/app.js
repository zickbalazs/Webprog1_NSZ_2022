let btn = document.querySelector('#regBtn'),
    username=document.querySelector('#username'),
    address=document.querySelector('#address'),
    email=document.querySelector('#email'),
    tel=document.querySelector('#telephone'),
    password=document.querySelector('#password'),
    passagai=document.querySelector('#passwordagain');
btn.addEventListener('click', ()=>{
    CheckData();
    Check
});
function CheckData(){
    let alerted = false;
    let forms = [username, email, passagai, password];
    forms.forEach(e=>{
        if (e.value=="") {
            alerted = true;
            e.classList.add('bad');
        }
        else{
            e.classList.remove('bad');
        }
    });
    if (alerted) alert('Nem jó')
}