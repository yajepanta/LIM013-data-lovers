export const sortDataByAscNumber = x => x.sort((a, b) => (a.num < b.num) ? -1 : 1);

export const sortDataByDescNumber = x => x.sort((a, b) => (a.num > b.num) ? -1 :  1);

export const sortDataByLetA = x => x.sort((a, b) => (a.name < b.name) ? -1 : 1);

export const sortDataByLetZ = x => x.sort((a, b) => (a.name < b.name) ? 1 : -1);

//recibe dos valores x = la data, y = tipo seleccionado (value)
export const filterData = (x, y) => x.filter( (x) => x.type.includes(y));

export const filterByName = (x, y) => x.filter( (x) => x.name.startsWith(y));
