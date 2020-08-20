import { sortDataByDescNumber, sortDataByAscNumber, sortDataByLetA, sortDataByLetZ} from '../src/data.js';
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
