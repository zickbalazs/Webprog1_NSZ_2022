let btn = document.querySelector('#regBtn'),
    username=document.querySelector('#username'),
    address=document.querySelector('#address'),
    email=document.querySelector('#email'),
    tel=document.querySelector('#telephone'),
    password=document.querySelector('#password'),
    passagai=document.querySelector('#passwordagain'),
    users;
if (localStorage.getItem('users'))
    users = JSON.parse(localStorage.getItem('users'));
else users = [];
btn.addEventListener('click', ()=>{
    CheckData();
});
function CheckData(){
    let alerted = false;
    let forms = [username, email, passagai, password];
    forms.forEach(e=>{
        if (e.value=="") {
            alerted = true;
            e.classList.add('bad');
        }
        else e.classList.remove('bad');
    });
    if (alerted) alert('Nem töltötte ki mindegyik kötelező adatot!')
    else{
        if (CheckPassword(password.value, passagai.value)){
            if (CheckEmail(email.value)){
                let user = {
                    'id':users.length+1,
                    'name': username.value,
                    'address':address.value,
                    'email':email.value,
                    'phone':telephone.value,
                    'password':password.value
                };
                console.log(user);
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                console.log("adatok rögzítve");
                alert('Gratulálunk regisztrált');
            }
            else alert("Az e-mail cím már fel van használva!");
        }
        else alert("Nem jó a jelszava!");
    }
}
function CheckPassword(pass, pass2){
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!pass.match(reg)){
        alert('Nem felel meg a jelszó!');
        return false;
    }
    return pass==pass2;
}
function CheckEmail(email_a){
    for (let i = 0; i < users.length; i++) {
        if (users[i].email==email_a) return false;
    }
    return email_a.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).length>0;
}