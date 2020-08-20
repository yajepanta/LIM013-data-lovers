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
            let sortedByNumber = pokemonData;
            sortedByNumber = DataFunctions.sortDataByAscNumber(sortedByNumber);
            home.innerHTML = `${sortedByNumber.map(pokemonTemplate).join('')}`;
        } 
        else {
            let sortedByNumber = pokemonData;
            sortedByNumber = DataFunctions.sortDataByDescNumber(sortedByNumber);
            home.innerHTML = `${sortedByNumber.map(pokemonTemplate).join('')}`;
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
        home.innerHTML =  `${showData.map(pokemonTemplate).join('')}`;
    }
    
    // botón index, que va al inicio - mobile
    const btnHome = document.getElementById("btn-home-phone");
    btnHome.addEventListener("click", showData);

    //botón inicio - pc
    const btnInicio = document.getElementById("btn-home-pc");
    btnInicio.addEventListener("click", showData);
