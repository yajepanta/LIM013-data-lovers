import { example, anotherExample } from '../src/data.js';

const input = 
[
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
];

const output1 = 
[
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
];

describe('sortDataByNumber', () => {
  it('debería ser una función', () => {
    expect(typeof sortDataByNumber).toBe('function');
  });

  it('debería retornar un array ordenado por número ascendentemente', () => {
    expect(sortDataByNumber(input, 'number', 'asc')).toEqual('output1');
  });

});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
