document.querySelector('#year').addEventListener('change', function(){
    let a, b, c, d, e, h, t;
    t = parseInt(document.querySelector('#year').value);
    a = t%19;
    b = t%4;
    c = t%7;
    d = ((19*a)+24)%30;
    e = ((2*b)+(4*c)+(6*d)+5)%7;
    h = 22 + d + e;
    if (e==6) {
        if (d==29){
            h = 50;
        }
        else if (d == 28 && a > 10){
            h = 49;
        }
    }
    let result = document.querySelector('.eredmeny');
    if (h<=31){
        result.innerHTML = `<p>A húsvét március ${h}.</p>`;
    }
    else{
        result.innerHTML = `<p>A húsvét április ${h-31}.</p>`;
    }
    if (h+(7*7)>61&&h+(7*7)<92){
        result.innerHTML += `<p>A pünkösd május ${(h+(7*7)+1)-61}.`;
    }
    else{
        result.innerHTML += `<p>A pünkösd június ${(h+(7*7)+1)-92}.`;
    }
});



