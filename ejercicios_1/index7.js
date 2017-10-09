const beers = [
  { name: 'Purple Iris', abv: 6.8, type: 'IPA', stock: true },
  { name: 'Red Iris', abv: 6.2, type: 'IPA', stock: true },
  { name: 'Darkness', abv: 4.1, type: 'Stout', stock: true },
  { name: 'Stolen Fruit', abv: 2.2, type: 'Stout', stock: true },
  { name: 'Deutch Wit', abv: 7.2, type: 'Wheat', stock: false },
  { name: 'Lightness', abv: 5.5, type: 'Stout', stock: true },
  { name: 'Magenta Iris', abv: 6.1, type: 'IPA', stock: true },
  { name: 'Yellow Iris', abv: 5.3, type: 'IPA', stock: false },
  { name: 'Darkness Soul', abv: 3.3, type: 'Stout', stock: true },
  { name: 'Stolen Meat', abv: 7.2, type: 'Stout', stock: true },
  { name: 'Deutch Legend', abv: 5.6, type: 'Wheat', stock: false },
  { name: 'Postmorten', abv: 6.7, type: 'Stout', stock: true }
];


//	a) Listar si la graduación es más de 5 y está en stock. Los que no cumplan se guardan en otro array y luego se 
//	muestra un listado titulado NO CUMPLEN
//	b) Listar si estamos sin stock, es de tipo Wheat y tiene más de 6 de graduación, guardar en nuevo array 
//	c) Agrupar resultados con una graduación entre 5 y 6 incluidos y guardar en nuevo array
//	d) Añadir a todos los elementos un nuevo atributo price y asignarle un valor random (aleatorio) guardar en un nuevo array
//	e) Añadir un nuevo atributo id. En base a: 
//		las 3 primeras letras del nombre 
//		+ la posición en el array 
//		+ nùmero aleatorio de 3 cifras 
//		+ "-" 
//		+ type
// 		Por ejemplo el primer elemento debe quedar algo parecido a esto: Pur1376-IPA
//		Vamos modificando el array original 
// 		Finalmente mostramos un listado bonito por consola de todos los productos.