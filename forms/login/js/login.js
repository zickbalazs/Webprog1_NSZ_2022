let email = document.querySelector("#email"),
    usern = document.querySelector("#username"),
    passw = document.querySelector("#password"),
    users = JSON.parse(localStorage.getItem('users')),
    login = document.querySelector('button');
login.addEventListener('click', ()=>{
    let success = false,
        id = 0,
        count_p=0,
        count_e=0,
        count_u=0;
    for (let i = 0; i < users.length; i++) {
        success = email.value==users[i].email ? usern.value == users[i].name ? passw.value==users[i].password ? true : false : false : false;
        count_e+=email.value==users[i].email ? 1 : 0;
        count_p+=passw.value==users[i].password ? 1 : 0;
        count_u+=username.value==users[i].name ? 1 : 0;
        if (success){
            id = i;
            break;
        }        
    }
    if (success) alert(`Sikeresen bejelentkezett ${users[id].name}!`);
    else {
        Redden(count_u, count_p, count_e);
        alert(`Hibás adatok!`)
    }
});
function Redden(count_u, count_p, count_e){
    if (count_u<1) username.classList.add('bad');
    else username.classList.remove('bad');
    if (count_p<1) passw.classList.add('bad');
    else passw.classList.remove('bad');
    if (count_e<1) email.classList.add('bad');
    else email.classList.remove('bad');
}
