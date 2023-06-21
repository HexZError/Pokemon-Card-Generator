let img = document.getElementById('image');
let pokiName = document.getElementById('name');
let type = document.getElementById('type');
let attack_no = document.getElementById('Attack_no');
let defense_no = document.getElementById('Defense_no');
let speed_no = document.getElementById('Speed_no');
let hp_no = document.getElementById('hp_score');
let genBtn = document.getElementById('Genbtn');
let url = 'https://pokeapi.co/api/v2/pokemon/';

function pokiDataFetch(){
    let id = Math.floor((Math.random()*150)+1);
    let final_url = url + id;
    fetch(final_url)
    .then((value)=>value.json())
    .then((Data)=>{
        pokiFillData(Data);
    })
    .catch((err)=>{
        console.log("Server Down")
        alert("Please Wait Server Down Try After Few Minutes");
    })
}

function pokiFillData(Data){
    img.src = Data.sprites.other.dream_world.front_default;
    pokiName.innerHTML = Data.name[0].toUpperCase() + Data.name.slice(1);
    type.innerHTML = Data.types[0].type.name;
    hp_no.innerHTML = Data.stats[0].base_stat; 
    attack_no.innerHTML = Data.stats[1].base_stat;
    defense_no.innerHTML = Data.stats[2].base_stat;
    speed_no.innerHTML = Data.stats[5].base_stat;
}

genBtn.addEventListener('click',pokiDataFetch);
window.addEventListener('load',pokiDataFetch);