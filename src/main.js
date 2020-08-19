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
    let btnSortByNumber = document.getElementById("btn-sort-number");
 /*    btnSortByNumber.options[btnSortByNumber.selectedIndex].value; */
    btnSortByNumber.addEventListener("change", sortByNumber);

    function sortByNumber() {

        if (btnSortByNumber.value == "ascendingOrder") {
            let sortedByNumber = pokemonData.map(pokemonTemplate);
            sortedByNumber = DataFunctions.sortDataByAscNumber(sortedByNumber).join('');
            home.innerHTML = `${sortedByNumber}`;
        } 
        else {
            let sortedByNumber = pokemonData.map(pokemonTemplate);
            sortedByNumber = DataFunctions.sortDataByDescNumber(sortedByNumber).join('');
            home.innerHTML = `${sortedByNumber}`;
        }       
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
