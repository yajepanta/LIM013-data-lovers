import * as DataFunctions from './data.js';

import data from './data/pokemon/pokemon.js';
const pokemonData = data.pokemon;

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
//no funciona con let home = document.getElementById("home-index").innerHTML;

// SECCIÓN: SORT BY - botón sortByNumber - botón sortByLetter

// botón sortByNumber
let btnSortByNumber = document.getElementById("btn-sort-number");
/*    btnSortByNumber.options[btnSortByNumber.selectedIndex].value; */
btnSortByNumber.addEventListener("change", sortByNumber);

function sortByNumber() {

    /* console.log(dato); */

    if (btnSortByNumber.value == "ascendingOrder") {
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
    }
}
// botón sortByLetter
let btnSortByLetter = document.getElementById("btn-sort-letter");
/*    btnSortByLetter.options[btnSortByLetter.selectedIndex].value; */
btnSortByLetter.addEventListener("change", sortByLetter);

function sortByLetter() {

    if (btnSortByLetter.value == "ascendingLetter") {
        let sortedByLetter = pokemonData;
        sortedByLetter = DataFunctions.sortDataByLetA(sortedByLetter);
        home.innerHTML = `${sortedByLetter.map(pokemonTemplate).join('')}`;
    }
    else {
        let sortedByLetter = pokemonData;
        sortedByLetter = DataFunctions.sortDataByLetZ(sortedByLetter);
        home.innerHTML = `${sortedByLetter.map(pokemonTemplate).join('')}`;
    }
}


//BARRA DE NAVEGACIÓN 

//función que muestra los pokemones
function showData() {
    let showData = pokemonData;
    showData = DataFunctions.sortDataByAscNumber(showData);
    home.innerHTML = `${showData.map(pokemonTemplate).join('')}`;
}

// botón index, que va al inicio - mobile
const btnHome = document.getElementById("btn-home-phone");
btnHome.addEventListener("click", showData);

//botón inicio - pc
const btnInicio = document.getElementById("btn-home-pc");
btnInicio.addEventListener("click", showData);


//FUNCIÓN FILTRAR POR TIPO
/* pseudocódigo
llamar al value del select
filter filtra por funcion
filter( funcion igualar )
la funcion igualar debe llamar a todos los objetos que contengan el type igual al del value del select
PROBLEMA: cuando entramos en el tipo, tenemos mas de 1 valor en la mayoria de casos
debemos buscar como entrar a la propiedad y ver si al menos uno de los elementos incluyen el value
luego debemos pasarlos al template del pokemon
solucion: includes() booleano. true si incluye - false

filter ( FUNCION 1)
        se ejecuta si es true (si incluye)
        si es false, sigue buscando

        debe llamar a todos los que den true y sean iguales al valor del select

y join, o forEach (template) */

const btnFilterData = document.getElementById("btn-type-select");
btnFilterData.addEventListener("change", filterDataFx);

function filterDataFx() {
    /*  let filterDataFx = pokemonData; */
    let filterDataFx = DataFunctions.filterData(pokemonData, btnFilterData.value);
    sortByNumber(filterDataFx);
    home.innerHTML = `${filterDataFx.map(pokemonTemplate).join('')}`;
}

