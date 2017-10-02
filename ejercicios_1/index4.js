//FUNCIONES

var a = 12;
var b = 36;
var c = 3;
var opcion = true;

// 1.- Declarar una función que recibe como parámetros a y b y devuelve el resultado de su suma. Ejecutar la función.
function suma(a,b){
    var resultado=0;
    resultado=a+b;
    return console.log(resultado);
}
suma(a,b);
// 2.- Declarar una función que recibe como parámetros a , b y c. Suma los elementos y devuelve la media. Ejecutar la función.
function media(a,b,c){
    resultado=(a+b+c)/3;
    return console.log(resultado);
}
media(a,b,c);
// 3.- Declarar una función que recibe como parámetros a , b , c y opcion. Ejecutar la función.
// Si opcion es true multiplica a y b y divide entre c.
function operacion(a,b,c,d){
    if(opcion === true){
        resultado=(a*b)/c;
        return console.log(resultado);
    }else{
        return console.log("Opcion es " + opcion);
    }
}

operacion(a,b,c,opcion);


var data = [
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
	}
]

//4.- 
// a) Declarar una función que recibe un objeto. 
// b) Dentro de esa función se modifica el price en base a unas tasas que son el 20%. 
function objeto(a){
    for(var i = 0; i < data.length; i++){
        data[i].price = (data[i].price * 1.2);
    }
    return console.log(a);
}
// c) Devolver el objeto modificado 
objeto(data);
// d) Declarar una función que recibe ese objeto. 
function returnfunction(a){
    console.log(a);
}

// e) Devolver el objeto modificado 
returnfunction(objeto);
// f) Declarar otra función para que muestre por consola algo asi:
//	
//		Product: Banana
//		Price : 200
//		Checked: true
//		.................
function muestraObjeto(a){
    for(var i = 0; i < data.length; i++){
        console.log("Product: "+data[i].name);
        console.log("Price: "+data[i].price);
        console.log("Checked: "+data[i].imported);
        console.log("......................");
    }
}
    
muestraObjeto(data);