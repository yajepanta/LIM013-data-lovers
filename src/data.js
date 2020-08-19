/* // estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';

const poke = data.pokemon;
 */

export const sortDataByNumber = x => x.sort((a, b) => ((a > b) ? -1 : 1)) 


export const ascendingOrDescending = x => (x > x-- ? true : false)