var numbers = [20,17,60,35,32,47,4,6];
//lo ordena mal porque el orden unicode varía 
console.log(numbers.sort());
//se soluciona de esta manera.
console.log(numbers.sort(function (a, b){
    return a - b;
    })
           );
//1.- Mostar en consola el array ordenado 
var elements = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
console.log(elements.sort());

//console.log(elements.toLowerCase());

//2.- Mostar en consola el array en minúsculas



var text = "QUIERO ESTE TEXTO EN MINÚSCULAS Y SIN ESPACIOS"
//3.-
// \ Busca coincidencias.
// \s -> Coincide con un carácter de espacio, entreellos incluidos espacio, tab, salto de página, salto de linea y retorno de carro.
// g busqueda global.

console.log("\n" + text.toLowerCase().replace(/\s/g,""));