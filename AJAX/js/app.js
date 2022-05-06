function dostuff(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = ()=>{
        document.getElementById('demo').innerHTML = xhttp.responseText;
    }
    xhttp.open("GET", "js/lorem.txt", true);
    xhttp.send();
}