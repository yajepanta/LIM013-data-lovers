/* // estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';

const poke = data.pokemon;
 */

export const sortDataByAscNumber = x => x.sort((a, b) => ((a.num > b.num) ? -1 : 1)) 

export const sortDataByDescNumber = x => x.sort((a, b) => ((a.num > b.num) ? 1 : -1)) 

