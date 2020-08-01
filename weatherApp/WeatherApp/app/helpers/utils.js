export function getWeekday(timestamp) {
    return [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ][new Date(timestamp * 1000).getDay()];
  }
  export const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  export const mostOcurrences = myArray =>
    myArray.reduce(
      (a, b, i, arr) =>
        arr.filter(v => v === a).length >= arr.filter(v => v === b).length
          ? a
          : b,
      null
    );
export const searchById = (myArray,key) =>{
  return myArray.find(element => element.id === key);
}  
