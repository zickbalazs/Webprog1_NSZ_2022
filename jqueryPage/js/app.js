async function contentLoad(filename, animal){
    await $('#content').load('html/'+filename);
    $('#animals').html(GetAnimals(animal));
    
}
let animals = [
    {
        "type":"cat",
        "name":"Miceh",
        "age":2,
        "gender":"female",
        "picture":"img/miceh.png",
        "description":"Lorem ipsum dolor sit amet consictetudor adispiscing elit",
        "price": 0
    },
    {
        "type":"cat",
        "name":"Miceh2",
        "age":2,
        "gender":"female",
        "picture":"img/miceh2.png",
        "description":"Lorem ipsum dolor sit amet consictetudor adispiscing elit",
        "price": 5000
    },
    {
        "type":"cat",
        "name":"Sanyi",
        "age":2,
        "gender":"female",
        "picture":"img/shalomander.png",
        "description":"Lorem ipsum dolor sit amet consictetudor adispiscing elit",
        "price": 25000
    }
]

function GetAnimals(type){
    let div = document.createElement('div');
    div.classList.add('row');
    animals.forEach(e=>{
        if (e.type==type){
            let card = document.createElement('div');
            card.innerHTML=`<div class="card col-lg-4">
                <img src=${e.picture} class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${e.name}</h5>
                    <p class="card-text">
                        <ul>
                            <li>Életkor: ${e.age} év</li>
                            <li>Ár: ${e.price}</li>
                        </ul>${e.description}
                    </p>
                </div>
            </div>`;
            div.append(card);
        }
    })
    return div;
    
}