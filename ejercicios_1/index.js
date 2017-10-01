var elements = [
	{
		name: 'Banana',
		price: 200,
		qty: 31,
		imported: true
	},
	{
		name: 'Pomelo',
		price: 55,
		qty: 325,
		imported: false
	},
	{
		name: 'Piña',
		price: 70,
		qty: 125,
		imported: false
	},
	{
		name: 'Coco',
		price: 120,
		qty: 25,
		imported: true
	},
	{
		name: 'Papaya',
		price: 200,
		qty: 725,
		imported: true
	}
];
// 1.- Mostrar por consola todos los elementos formato objeto y formato array
for(var i=0; i < elements.length; i++){
    console.log(elements[i]);
}
console.log("\n");
    

// 2.- Mostrar por consola todos los elementos cuya cantidad sea menor de 50
for(var i=0; i < elements.length; i++){
    if(elements[i].qty < 50){
        console.log(elements[i]);
    }
}
console.log("\n");

// 3.- Mostrar por consola los elementos no importados
for(var i=0; i < elements.length; i++){
    if(elements[i].imported == false ){
        console.log(elements[i]);
    }
}
console.log("\n");

// 4.- Mostrar por consola los elementos cuyo precio sea mayor 60 y menor o igual de 120
for(var i=0; i < elements.length; i++){
    if(elements[i].price > 60 || elements[i].price <= 120 ){
        console.log(elements[i]);
    }
}
console.log("\n");

// 5.- Mostrar por consola los elementos con precio 200 y cambiarlo a 230. Mostrar nuevo array y el original
// REQUISITO: Creamos un nuevo array y guardamos todos los elementos ahí.No modificamos el array original
// Debemos crear nuevos objetos

var auxArray=[];
var newprice=230;
for(var i=0; i < elements.length; i++){
    
    if(elements[i].price === 200){
        console.log(elements[i]);
        //Nuevo objeto
        var auxObject={};
        auxObject.name=elements[i].name;
        auxObject.price=newprice;
        auxObject.imported=elements[i].imported;
        auxObject.qty=elements[i].qty;
        //Almacenar el nuevo array
        auxArray.push(auxObject);
    }
console.log(elements);
console.log(auxArray);
}
console.log("\n");
// 6.- Mostrar por consola los elementos cuyo nombre empiece por "P"
//PISTA : https://www.w3schools.com/jsref/jsref_substring.asp
for(var i = 0;i < elements.length; i++){
    if(elements[i].name.substring(0,1)=="P"){
        console.log(elements[i].name + " -> " +elements[i].price);
       
    }
}