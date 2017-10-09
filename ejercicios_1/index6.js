const beers = [
  { name: 'Purple Iris', abv: 6.8, type: 'IPA' },
  { abv: 5.5, type: 'Pilsner' },
  { name: 'Darkness', abv: 4.2, type: 'Stout' },
  { name: 'Belgian Wit', abv: 5.4},
  { name: 'Stolen Fruit', type: 'Wheat' },
  { name: null, type: 'Wheat' }
];

//Refactor de código anterior
// 1.- Mostrar el listado de cervezas (nombre y graduación) mediante llamada a función
function cervezas(){
    for(var i=0; i < beers.length; i++){
      if(beers[i] === null){
           beers[i].splice(i,0);

         }
        else if(beers[i].abv === undefined){
            console.log(i+1 + " Nombre: " + beers[i].name + " Graduación: Sin graduación");
        }else{
            console.log(i+1 + " Nombre: " + beers[i].name + " Graduación: " + beers[i].abv   );
         }
   }
}

cervezas();

// 2.- Mostrar el nombre y el type de la cerveza cuya graduación sea mayor de 5.4 mediante llamada a función
function cervezas2(){
    for(var i=0; i < beers.length; i++){
        if(beers[i].abv > 5.4){
            console.log(i+1 + " - Nombre: " + beers[i].name + "Tipo: " + beers[i].type );
        }
    }
}
cervezas2();
