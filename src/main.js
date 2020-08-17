import * as DataFunctions from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemonData = data.pokemon; 

function types (types) {
    return `
    <ul class="poke-types" style="list-style-type:none;">
        ${types.map(function (type) {
            return `<li class="poke-type-list" style="float:left;">${type}</li>`;
        }).join('')}
    </ul>
    `;
};

function pokeTemplate (poke) {
    return `
    <div class="pokemon-card">
        <p>${poke.num}</p>
        <h2>${poke.name}</h2>
        <img class="pokemon-img" src="${poke.img}">
        ${types(poke.type)}
    </div>
    `;
};

document.getElementById("home-index").innerHTML =  `${pokemonData.map(pokeTemplate).join('')}`;
  
console.log(DataFunctions.sortDataByNumber(),DataFunctions.anotherExample(), pokemonData);
