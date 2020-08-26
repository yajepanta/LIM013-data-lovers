import * as DataFunctions from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemonDataConst = data.pokemon;
let pokemonData = pokemonDataConst.slice();

// añade el array con los tipos ordenados
function types(type) {
    return `
        <ul class="poke-types" style="list-style-type:none;">
            ${type.map((type) => {
        return `<li class="poke-type-list" style="float:left;">${type}</li>`;
    }).join('')}
        </ul>
        `;
}

// arrays con los datos de los pokemon en orden 0-9
function pokemonTemplate(pokemon) {
    return `
        <div class="pokemon-card">
            <p>${pokemon.num}</p>
            <h2>${pokemon.name}</h2>
            <img class="pokemon-img" src="${pokemon.img}">
            ${types(pokemon.type)}
        </div>
        `;
}

// llamamos a "home", que es el espacio donde se mostrará toda la data
let home = document.getElementById("home-index");

//FUNCIÓN FILTRAR POR TIPO
const btnFilterData = document.getElementById("btn-type-select");
btnFilterData.addEventListener("change", filterDataFx);

const btnFilterDataPhone = document.getElementById("btn-type-phone");
btnFilterDataPhone.addEventListener("change", filterDataFx);

function filterDataFx() {
   /*  let newPokemonData = pokemonData; */
   
    pokemonData = DataFunctions.filterData(pokemonData, btnFilterData.value);
    showData(pokemonData);
}

//función que muestra los pokemones
function showData(data) {
    //Convertir a string "pokemonTemplate"
    home.innerHTML = `${data.map(pokemonTemplate).join('')}`;
}

// SECCIÓN: SORT BY - botón sortByNumber - botón sortByLetter

// Botón sortByNumber
let btnSortByNumber = document.getElementById("btn-sort-number");
btnSortByNumber.addEventListener("change", sortByNumber);

function sortByNumber() {

    /*     if (btnSortByNumber.value == "ascendingOrder") {
            //Mantener como array
            let sortedByNumber = pokemonData;
            sortedByNumber = DataFunctions.sortDataByAscNumber(sortedByNumber);
            //Convertir a string "pokemonTemplate"
            home.innerHTML = `${sortedByNumber.map(pokemonTemplate).join('')}`;
        }
        else {
            let sortedByNumber = pokemonData;
            sortedByNumber = DataFunctions.sortDataByDescNumber(sortedByNumber);
            home.innerHTML = `${sortedByNumber.map(pokemonTemplate).reverse().join('')}`;
        } */

    if (btnSortByNumber.value == "ascendingOrder") {
        //Mantener como array
        let newPokemonData = pokemonData;
        newPokemonData = DataFunctions.sortDataByAscNumber(newPokemonData);
        showData(newPokemonData);

    }
    else {
        let newPokemonData = pokemonData;
        newPokemonData = DataFunctions.sortDataByDescNumber(newPokemonData);
        showData(newPokemonData);

    }
}
// botón sortByLetter
let btnSortByLetter = document.getElementById("btn-sort-letter");
btnSortByLetter.addEventListener("change", sortByLetter);

function sortByLetter() {
    if (home != null){
        console.log(home);
    if (btnSortByLetter.value == "ascendingLetter") {
        let newPokemonData = pokemonData;
        newPokemonData = DataFunctions.sortDataByLetA(newPokemonData);
        showData(newPokemonData);
    }
    else {
        /* let newPokemonData = pokemonData; */
         /* newPokemonData =  */DataFunctions.sortDataByLetZ(pokemonData);
        showData(pokemonData);
    }
}
}

//BARRA DE NAVEGACIÓN 

// botón index, que va al inicio - mobile
const btnHome = document.getElementById("btn-home-phone");
btnHome.addEventListener("click", showData);

//botón inicio - pc
const btnInicio = document.getElementById("btn-home-pc");
btnInicio.addEventListener("click", showData);


//Filter-menu
document.getElementById("type-phone").addEventListener("click", function (){
    document.querySelector('.types-modal').style.display ='flex';
});
