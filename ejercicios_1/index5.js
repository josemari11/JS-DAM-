function espc(){
    console.log("\n");
}

const beers = [
  { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
  { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
  { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
 null,
  { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
  { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
];

/*// 1.- Mostrar los nombres de la cerveza que sea del type = Wheat
for(var i =0; i < beers.length; i++){
    if(beers[i].type === "Wheat"){
       console.log(beers[i].name)
       }
}
espc();    
// 2.- Mostrar el type de la cerveza que su graduación sea mayor de 5.4
for(var i = 0; i < beers.length; i++){
    if(beers[i].abv > 5.4){
        console.log(beers[i].type);
    }
}
espc();
// 3.- Sacar el listado de cervezas, si se detecta un elemento null mostrar mensaje de "elemento no encontrado"
for(var i = 0; i < beers.length; i++){
    if( beers[i] === null){
        console.log("elemento no encontrado");
    }
    console.log(beers[i].name);
    
}
espc();*/
// 4.- Eliminar el elemento null del array
const beersdelete[]='';
beersdelete = beers.filter(Boolean);
for(var i = 0; i < beers.length; i++){
  console.log(beers[i].name)
    
}
