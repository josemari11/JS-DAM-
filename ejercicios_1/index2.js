var elements = [
	{
		name: 'Banana',
		price: 200,
		qty: 31,
		imported: true,
		size: [12, 40, 60]
	},
	{
		name: 'Pomelo',
		price: 55,
		qty: 325,
		imported: false,
		size: [5, 50, 55, 79]
	},
	{
		name: 'Piña',
		price: 70,
		qty: 125,
		imported: false,
		size: [32, 43, 63, 90, 120]
	},
	{
		name: 'Coco',
		price: 120,
		qty: 25,
		imported: true,
		size: [32, 43, 67]
	},
	{
		name: 'Papaya',
		price: 200,
		qty: 725,
		imported: true,
		size: [45, 50, 60, 70, 99]
	}
];

// 1.- Sacar un listado por consola de este estilo 
//Banana 
//size: 12, 40, 60
//Pomelo 
//size: 5, 50, 55, 79
for(var i=0; i < elements.length; i++){
    console.log(elements[i].name);
    console.log("size: " + elements[i].size);

    
}
console.log("\n");

// 2.- Sacar un listado por consola de este estilo 
// Banana 
// size: 
// 12
// 40
// 60

// Pomelo 
// size: 
// 5
// 50
// 55
// 79
for(var i=0; i < elements.length; i++){
    console.log(elements[i].name);
    console.log("size:");
    for(var j=0; j < elements[i].size.length; j++){
        console.log(elements[i].size[j])
    }
    console.log("\n");
}
