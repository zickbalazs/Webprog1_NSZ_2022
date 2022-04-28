if (sessionStorage.getItem('Access')==null || !JSON.parse(sessionStorage.getItem('Access')).Logged){
    alert('NINCS HOZZÁFÉRÉS!!!');
    document.location.href="login.html";
}
else if (JSON.parse(sessionStorage.getItem('Access')).Logged){
    user = JSON.parse(sessionStorage.getItem('Access'));
    document.querySelector('#user').value = user.User;
    document.querySelector('#mail').value = user.UserMail;
}
document.querySelector('#logout').addEventListener('click', ()=>{
    sessionStorage.setItem('Access', JSON.stringify({
        'Logged': false,
        'User': user.User,
        'UserMail': user.UserMail
    }));
    alert('sikeres kijelentkezés!')
    document.location.href="login.html";
});