import { sortDataByDescNumber, sortDataByAscNumber, sortDataByLetA, sortDataByLetZ,filterData} from '../src/data.js';
/* import * as main from "../src/main.js"; */

export const inputTest = 
[
  {num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {num: '004', name: 'Charmander', type: ['Fire' ]},
  {num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
];

export const outputByNumAsc = 
[
  {num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {num: '004', name: 'Charmander', type: ['Fire' ]},
];

export const outputByNumDesc = 
[
  {num: '004', name: 'Charmander', type: ['Fire' ]},
  {num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
];

export const outputByLetterA = 
[
  {num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {num: '004', name: 'Charmander', type: ['Fire' ]},
  {num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
];

export const outputByLetterZ = 
[
  {num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {num: '004', name: 'Charmander', type: ['Fire' ]},
  {num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
];

export const inputTest2 = 
[
  {num: "051", name: "dugtrio", type: [   "ground" ]},
  {num: '004', name: 'Charmander', type: ['Fire' ]},
  {num: "074", name: "geodude", type: [   "rock",  "ground" ]},
  {num: "034", name: "nidoking", type: [  "poison",  "ground" ]},
];

export const outputFilter = 
[
  {num: "051", name: "dugtrio", type: [   "ground" ]},
  {num: "074", name: "geodude", type: [   "rock",  "ground" ]},
  {num: "034", name: "nidoking", type: [  "poison",  "ground" ]},
];

export const outputFilterNumAsc = 
[
  {num: "034", name: "nidoking", type: [  "poison",  "ground" ]},
  {num: "051", name: "dugtrio", type: [   "ground" ]},
  {num: "074", name: "geodude", type: [   "rock",  "ground" ]},
];

export const outputFilterNumDesc = 
[
  {num: "074", name: "geodude", type: [   "rock",  "ground" ]},
  {num: "051", name: "dugtrio", type: [   "ground" ]},
  {num: "034", name: "nidoking", type: [  "poison",  "ground" ]},
];

export const outputFilterAZ = 
[
  {num: "051", name: "dugtrio", type: [   "ground" ]},
  {num: "074", name: "geodude", type: [   "rock",  "ground" ]},
  {num: "034", name: "nidoking", type: [  "poison",  "ground" ]},
];

export const outputFilterZA = 
[
  {num: "034", name: "nidoking", type: [  "poison",  "ground" ]},
  {num: "074", name: "geodude", type: [   "rock",  "ground" ]},
  {num: "051", name: "dugtrio", type: [   "ground" ]},
];



describe('Ordenar por numero de forma ascendente', () => {
  it('debería ser un objeto', () => {
    expect(typeof inputTest).toBe('object');
  });

  it('debería ser una función', () => {
    expect(typeof sortDataByAscNumber).toBe('function');
  });

  it('debería retornar un string de los pokemons ordenado por número ascendentemente', () => {
    expect(sortDataByAscNumber(inputTest)).toEqual(outputByNumAsc);
  });
});

describe('Ordenar por numero de forma descendente', () => {
  it('debería ser un objeto', () => {
    expect(typeof inputTest).toBe('object');
  });

  it('debería ser una función', () => {
    expect(typeof sortDataByDescNumber).toBe('function');
  });

  it('debería retornar un string de los pokemons ordenado por número descendentemente', () => {
    expect(sortDataByDescNumber(inputTest)).toEqual(outputByNumDesc);
  });
});

describe('Ordenar por letra de forma ascendente', () => {
    it('debería ser un objeto', () => {
      expect(typeof inputTest).toBe('object');
    });
  
    it('debería ser una función', () => {
      expect(typeof sortDataByLetA).toBe('function');
    });
  
    it('debería retornar un string de los pokemons ordenado por letradescendentemente', () => {
      expect(sortDataByLetA(inputTest)).toEqual(outputByLetterA);
    });
});
  
describe('Ordenar por letra de forma descendente', () => {
      it('debería ser un objeto', () => {
        expect(typeof inputTest).toBe('object');
      });
    
      it('debería ser una función', () => {
        expect(typeof sortDataByLetZ).toBe('function');
      });
    
      it('debería retornar un string de los pokemons ordenado por letra descendentemente', () => {
        expect(sortDataByLetZ(inputTest)).toEqual(outputByLetterZ);
      });
});


describe('Filtrar por tipo', () => {
  it('debería ser un objeto', () => {
    expect(typeof inputTest).toBe('object');
  });

  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });

  it('debería retornar un string de los pokemons filtrado por tipo', () => {
    expect(filterData(inputTest2, "ground")).toEqual(outputFilter);
  });

  it('debería retornar un string de los pokemons filtrado por tipo y ordenado de menor a mayor', () => {
    expect(sortDataByAscNumber(outputFilter)).toEqual(outputFilterNumAsc);
  });

  it('debería retornar un string de los pokemons filtrado por tipo y ordenado de mayor a menor', () => {
    expect(sortDataByDescNumber(outputFilter)).toEqual(outputFilterNumDesc);
  });

  it('debería retornar un string de los pokemons filtrado por tipo y ordenado alfabéticamente', () => {
    expect(sortDataByLetA(outputFilter)).toEqual(outputFilterAZ);
  });

  it('debería retornar un string de los pokemons filtrado por tipo y ordenado de la Z - A', () => {
    expect(sortDataByLetZ(outputFilter)).toEqual(outputFilterZA);
  });
});


/*   it.skip('debería retornar un "string"', () => {
    expect(main.pokemonTemplate(inputTest)).toBe('string');
  }) */


/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
