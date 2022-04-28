let regBtn = document.querySelector('#regBtn'),
    email = document.querySelector('#email'),
    pass = document.querySelector('#pass1');

let users = [];
if (users = localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
} else {
    users = [];
}

regBtn.addEventListener('click', ()=>{
    let correct= false,
        name = "";
    if (email.value!=""||pass.value!="") {
        users.forEach(user => {
            if (user.password==pass.value&&user.email==email.value){
                correct=true;
                name = user.name;
            }
        });
        if(correct){
            email.classList.remove('missing');
            pass.classList.remove('missing');
            alert('Sikeres bejelentkezés!');
            let data = {
                'Logged': true,
                'User': name,
                'UserMail': email.value
            }
            sessionStorage.setItem('Access', JSON.stringify(data));
            document.location.href="content.html"
            //document.querySelector('.forms').innerHTML = await (await fetch('/forms/sessionstorage/content.html')).text()
        }
        else{
            alert('Hibás felhasználó név vagy jelszó');
            email.classList.add('missing');
            pass.classList.add('missing');
        }
    }
    else{
        if (email.value=="") {
            email.classList.add('missing');
        }
        if (pass.value=="") {
            pass.classList.add('missing');
        }
        alert('Nem töltöttél ki mindent!');
    }
});