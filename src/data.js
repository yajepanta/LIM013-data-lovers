/* // estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';

const poke = data.pokemon;
 */

export const sortDataByNumber = (x) => x.sort((a, b) =>
((b.num > a.num) ? 1 : -1))

export const showDataHome = (x) => x.sort((a, b) =>
(a.num - b.num))



