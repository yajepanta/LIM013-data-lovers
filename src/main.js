import * as DataFunctions from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemonDataConst = data.pokemon;
let pokemonData = pokemonDataConst.slice();
// llamamos a "home", que es el espacio donde se mostrará toda la data
let home = document.getElementById("home-index");
const countBox = document.querySelector(".sortBy span");
const btnHome = document.getElementById("btn-home-phone");
const btnInicio = document.getElementById("btn-home-pc");
const btnFilterData = document.getElementById("btn-type-select");
const btnSortByNumber = document.getElementById("btn-sort-number");
const btnSortByLetter = document.getElementById("btn-sort-letter");
const btnFilterPhone = document.getElementById("btn-type-phone");

//CONTEO DE ARRAYS
function countData(data) {
countBox.innerHTML = `${data.length} of 251 pokemons` ;
}

//función que muestra los pokemones
function showData(data) {
    //Convertir a string "pokemonTemplate"
    home.innerHTML = `${data.map(pokemonTemplate).join('')}`;
    countData(data);
}

//ShowData ejecuta la función al cargar la página
showData(pokemonDataConst);

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


//BARRA DE NAVEGACIÓN 

//botón index, que va al inicio - mobile
btnHome.addEventListener("click", function(){showData(pokemonDataConst)});

//botón inicio - pc
btnInicio.addEventListener("click", function(){showData(pokemonDataConst)});

//FUNCIÓN FILTRAR POR TIPO
btnFilterData.addEventListener("change", filterDataFx);


function filterDataFx() {
    /*  let newPokemonData = pokemonData; */
    pokemonData = pokemonDataConst;
    pokemonData = DataFunctions.filterData(pokemonData, btnFilterData.value);
    showData(pokemonData);
}

                            // SECTION: SORT BY

// sortByNumber
btnSortByNumber.addEventListener("change", sortByNumber);

function sortByNumber() {
    if (btnSortByNumber.value == "ascendingOrder") {
        //Mantener como array
        DataFunctions.sortDataByAscNumber(pokemonData);
        showData(pokemonData);
    }
    else {
        DataFunctions.sortDataByDescNumber(pokemonData);
        showData(pokemonData);
    }
}

// sortByLetter
btnSortByLetter.addEventListener("change", sortByLetter);

function sortByLetter() {
        if (btnSortByLetter.value == "ascendingLetter") {
            DataFunctions.sortDataByLetA(pokemonData);
            showData(pokemonData);
        }
        else {
            DataFunctions.sortDataByLetZ(pokemonData);
            showData(pokemonData);
        }
}

//Filter-menu
document.getElementById("type-phone").addEventListener("click", function (){
    document.querySelector('.modal-content').style.display ='flex';
});

btnFilterPhone.addEventListener("change", filterData);

function filterData () {
    document.querySelector('.modal-content').style.display ='none';
    pokemonData = pokemonDataConst;
    pokemonData = DataFunctions.filterData(pokemonData, btnFilterPhone.value);
    /*console.log(pokemonData);*/
    showData(pokemonData);
}
