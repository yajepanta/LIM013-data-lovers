import * as DataFunctions from './data.js';

import data from './data/pokemon/pokemon.js';
const pokemonData = data.pokemon; 

// añade el array con los tipos ordenados
    function types (type) {
        return `
        <ul class="poke-types" style="list-style-type:none;">
            ${type.map((type) => {
                return `<li class="poke-type-list" style="float:left;">${type}</li>`;
            }).join('')}
        </ul>
        `;
    }

// arrays con los datos de los pokemon en orden 0-9
    function pokemonTemplate (pokemon) {
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
    const btnSortByNumber = document.getElementById("btn-sort-number");

    btnSortByNumber.addEventListener("click", sortByNumber);

    function sortByNumber() {

        if (home.innerHTML === "") {
            return;
        }
        else { 
            let sortedByNumber = pokemonData.map(pokemonTemplate);
            sortedByNumber = DataFunctions.sortDataByNumber(sortedByNumber).join('');
            home.innerHTML = `${sortedByNumber}`; 
        }
        /* let sortedByNumber = pokemonData.map(pokemonTemplate);
        sortedByNumber = DataFunctions.sortDataByNumber(sortedByNumber).join('');
        
            if (DataFunctions.sortDataByNumber(sortedByNumber) == 1) {
                home.innerHTML = `${sortedByNumber}`;
            }
            else {
                home.innerHTML = `${sortedByNumber.reverse()}`; */
            }
    
    
 //BARRA DE NAVEGACIÓN 

 //función que muestra los pokemones
    function showData() {
        home.innerHTML =  `${pokemonData.map(pokemonTemplate).join('')}`;
    }
    // botón index, que va al inicio - mobile
    const btnHome = document.getElementById("btn-home-phone");
    btnHome.addEventListener("click", showData);

    //botón inicio - pc
    const btnInicio = document.getElementById("btn-home-pc");
    btnInicio.addEventListener("click", showData);

// Función para limpiar toda la data:
function clear() {
    home.innerHTML = " ";
                }


