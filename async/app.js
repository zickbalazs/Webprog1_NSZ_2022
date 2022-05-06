let data = async () => {return await load("MOCK_DATA.json")};
async function load(file){
    let array = [];
    array = await fetch(file).then((adat)=>{return adat.json()});
    return array;
}