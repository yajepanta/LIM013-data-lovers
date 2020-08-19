import { sortDataByNumber } from '../src/data.js';

export const inputTest = 
[
  {num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {num: '004', name: 'Charmander', type: ['Fire' ]},
  {num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
];

export const outputByNumDesc = 
[
  {num: '004', name: 'Charmander', type: ['Fire' ]},
  {num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
];

describe('Ordenar por numero de forma descendente', () => {
  it('debería ser un objeto', () => {
    expect(typeof inputTest).toBe('object');
  });

  it('debería ser una función', () => {
    expect(typeof sortDataByNumber).toBe('function');
  });

  it('debería retornar un arreglo de los pokemons ordenado por número descendentemente', () => {
    expect(sortDataByNumber(inputTest, )).toEqual(outputByNumDesc);
  });

});

/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/