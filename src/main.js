import * as DataFunctions from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemonDataConst = data.pokemon;
let pokemonData = pokemonDataConst.slice();
// llamamos a "home", que es el espacio donde se mostrará toda la data
let home = document.getElementById("home-index");

//CONTEO DE ARRAYS
const countBox = document.querySelector(".sortBy span");
function countData(data) {
countBox.innerHTML = `${data.length} de 251 pokémons` ;
}

//función que muestra los pokemones
function showData(data) {
    //Convertir a string "pokemonTemplate"
    home.innerHTML = `${data.map(pokemonTemplate).join('')}`;
    countData(data);
}
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

// llamamos a "home", que es el espacio donde se mostrará toda la data
let home = document.getElementById("home-index");
countData();

//BARRA DE NAVEGACIÓN 

//botón index, que va al inicio - mobile
const btnHome = document.getElementById("btn-home-phone");

btnHome.addEventListener("click", function(){showData(pokemonDataConst)});

//botón inicio - pc
const btnInicio = document.getElementById("btn-home-pc");
btnInicio.addEventListener("click", function(){showData(pokemonDataConst)});


//FUNCIÓN FILTRAR POR TIPO
const btnFilterData = document.getElementById("btn-type-select");
btnFilterData.addEventListener("change", filterDataFx);


function filterDataFx() {
    /*  let newPokemonData = pokemonData; */
    pokemonData = pokemonDataConst;
    pokemonData = DataFunctions.filterData(pokemonData, btnFilterData.value);
    showData(pokemonData);
}






                            // SECTION: SORT BY


// sortByNumber
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
        DataFunctions.sortDataByAscNumber(pokemonData);
        showData(pokemonData);
    }
    else {
        DataFunctions.sortDataByDescNumber(pokemonData);
        showData(pokemonData);

    }
}
// sortByLetter
let btnSortByLetter = document.getElementById("btn-sort-letter");
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

const btnFilterPhone = document.getElementById("btn-type-phone");
btnFilterPhone.addEventListener("change", filterData);

function filterData () {
    document.querySelector('.modal-content').style.display ='none';
    pokemonData = pokemonDataConst;
    pokemonData = DataFunctions.filterData(pokemonData, btnFilterPhone.value);
    /*console.log(pokemonData);*/
    showData(pokemonData);
}
