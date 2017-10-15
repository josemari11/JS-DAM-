const beers = [
    {
        name: 'Purple Iris',
        abv: 6.8,
        type: 'IPA',
        stock: true
    },
    {
        name: 'Red Iris',
        abv: 6.2,
        type: 'IPA',
        stock: true
    },
    {
        name: 'Darkness',
        abv: 4.1,
        type: 'Stout',
        stock: true
    },
    {
        name: 'Stolen Fruit',
        abv: 2.2,
        type: 'Stout',
        stock: true
    },
    {
        name: 'Deutch Wit',
        abv: 7.2,
        type: 'Wheat',
        stock: false
    },
    {
        name: 'Lightness',
        abv: 5.5,
        type: 'Stout',
        stock: true
    },
    {
        name: 'Magenta Iris',
        abv: 6.1,
        type: 'IPA',
        stock: true
    },
    {
        name: 'Yellow Iris',
        abv: 5.3,
        type: 'IPA',
        stock: false
    },
    {
        name: 'Darkness Soul',
        abv: 3.3,
        type: 'Stout',
        stock: true
    },
    {
        name: 'Stolen Meat',
        abv: 7.2,
        type: 'Stout',
        stock: true
    },
    {
        name: 'Deutch Legend',
        abv: 5.6,
        type: 'Wheat',
        stock: false
    },
    {
        name: 'Postmorten',
        abv: 6.7,
        type: 'Stout',
        stock: true
    }
];


//	a) Listar si la graduación es más de 5 y está en stock. Los que no cumplan se guardan en otro array y luego se 
//	muestra un listado titulado NO CUMPLEN
var auxArray = [];
var contador = 0;
for (var i = 0; i < beers.length; i++) {
    if (beers[i].abv > 5 && beers[i].stock === true) {
        console.log(beers[i].name)
        if(beers[i].stock === true){
          beers[i].stock= "si";
           }
        console.log(" Graduación: "+beers[i].abv)
        console.log(" En stock--> "+beers[i].stock)
    } else {
        contador++;
        //Creamos el nuevo objeto
        var auxObject = {};
        auxObject.name = beers[i].name;
        auxObject.abv = beers[i].abv;
        auxObject.type = beers[i].type;
        auxObject.stock = beers[i].stock;
        //Almacenamos  en el nuevo array
        auxArray.push(auxObject);
    }

}
if(contador !=0){
   console.log("\n No cumplen");
   }
console.log(auxArray);



//	b) Listar si estamos sin stock, es de tipo Wheat y tiene más de 6 de graduación, guardar en nuevo array 
var arrayAuxiliar = [];
for(var i=0; i < beers.length; i++){
    if (beers[i].stock === false && beers[i].type == "Wheat" && beers[i].abv > 6){
        var objetoAuxiliar = {};
        objetoAuxiliar.name = beers[i].name;
        
        //Almacenamos en el nuevo array
        arrayAuxiliar.push(objetoAuxiliar);
    }
}
console.log("\n Nueva lista sin stock, es de tipo Wheat y tiene más de 6 de graduación\n");
console.log(arrayAuxiliar);

//	c) Agrupar resultados con una graduación entre 5 y 6 incluidos y guardar en nuevo array
var arrayAuxiliar2 = [];
for(var i=0; i < beers.length; i++){
    if (beers[i].abv>=5 && beers[i].abv <= 6){
        var objetoAuxiliar2 = {};
        objetoAuxiliar2.name = beers[i].name;
        objetoAuxiliar2.abv = beers[i].abv;
        
        //Almacenamos en el nuevo array
        arrayAuxiliar2.push(objetoAuxiliar2);
    }
}
console.log("\n Graduación entre 5 y 6 incluidos\n");
console.log(arrayAuxiliar2);

//	d) Añadir a todos los elementos un nuevo atributo price y asignarle un valor random (aleatorio) guardar en un nuevo array
var arrayAuxiliar3 = [];
for(var i=0; i < beers.length; i++){
        var objetoAuxiliar3 = {};
        objetoAuxiliar3.name = beers[i].name;
        objetoAuxiliar3.abv = beers[i].abv;
        objetoAuxiliar3.type = beers[i].type;
        objetoAuxiliar3.stock = beers[i].stock;
        objetoAuxiliar3.price = Math.floor((Math.random() * 1000) + 1);
        
        //Almacenamos en el nuevo array
        arrayAuxiliar3.push(objetoAuxiliar3);
    }

console.log("\n Añadir a todos los elementos un nuevo atributo price \n");
console.log(arrayAuxiliar3);

//	e) Añadir un nuevo atributo id. En base a: 
//		las 3 primeras letras del nombre 
//		+ la posición en el array 
//		+ nùmero aleatorio de 3 cifras 
//		+ "-" 
//		+ type
// 		Por ejemplo el primer elemento debe quedar algo parecido a esto: Pur1376-IPA
//		Vamos modificando el array original 
var arrayAuxiliar4 = [];
for(var i=0; i < beers.length; i++){
        var numAle=Math.floor((Math.random() * 1000) + 1);
        var objetoAuxiliar4 = {};
        objetoAuxiliar4.name = beers[i].name;
        objetoAuxiliar4.abv = beers[i].abv;
        objetoAuxiliar4.type = beers[i].type;
        objetoAuxiliar4.stock = beers[i].stock;
        objetoAuxiliar4.id = beers[i].name.substr(0,3) + i + numAle + "-" +
            beers[i].type;
       
        
        //Almacenamos en el nuevo array
        arrayAuxiliar4.push(objetoAuxiliar4);
    }

console.log("\n Añadir un nuevo atributo id. \n");
console.log(arrayAuxiliar4);
// 		Finalmente mostramos un listado bonito por consola de todos los productos.
