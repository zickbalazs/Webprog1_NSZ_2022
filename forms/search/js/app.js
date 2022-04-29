let input = document.querySelector('input');
async function GetJSON(){
    let response = await fetch('js/MOCK_DATA.json');
    return await response.json();
}
document.querySelector('form').addEventListener('keypress', async (e)=>{
        Search();
        if (document.querySelector('input').value=="") DisplayEveryone();
})
let json = async() => await GetJSON();
async function Search(){
    let data = await json();
        searched = []
        query = input.value,
        words = query.split(' ');
    data.forEach(e=>{
        for (let i = 0; i < words.length; i++) {
            if (e.first_name.includes(words[i]) || e.last_name.includes(words[i])||e.id == Number(words[i])||e.email.includes(words[i])||e.price.includes(words[i])||e.gender.includes(words[i])||e.adress.includes(words[i])) {
                searched.push(e);
                break;
            }
        }
    });
    DisplaySearched(searched);
}
async function DisplayEveryone(){
    let data = await json();
        tbody = document.querySelector('#people')
    tbody.innerHTML="";
    data.forEach(e=>{
        let tr = document.createElement('tr');
        tr.append(Object.assign(document.createElement('td'), {textContent: e.id}),
        Object.assign(document.createElement('td'), {textContent: e.first_name}),
        Object.assign(document.createElement('td'), {textContent: e.last_name}),
        Object.assign(document.createElement('td'), {textContent: e.email}),
        Object.assign(document.createElement('td'), {textContent: e.price}),
        Object.assign(document.createElement('td'), {textContent: e.adress}),
        Object.assign(document.createElement('td'), {textContent: e.gender}))
        tbody.append(tr);
    })
}
DisplayEveryone();
function DisplaySearched(data){
    document.querySelector('tbody').innerHTML="";
    data.forEach(e=>{
        let tr = document.createElement('tr');
        tr.append(Object.assign(document.createElement('td'), {textContent: e.id}),
        Object.assign(document.createElement('td'), {textContent: e.first_name}),
        Object.assign(document.createElement('td'), {textContent: e.last_name}),
        Object.assign(document.createElement('td'), {textContent: e.email}),
        Object.assign(document.createElement('td'), {textContent: e.price}),
        Object.assign(document.createElement('td'), {textContent: e.adress}),
        Object.assign(document.createElement('td'), {textContent: e.gender}))
        tbody.append(tr);
    });
}