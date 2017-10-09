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
function masCervezas(){
    for(var i=0; i < beers.lenght; i++){
        if(beers[i].name == null){
            beers.name.splice(i,0);
             console.log(beers[i].name + " Graduación:" + beers[i].abv);
           }else{
            console.log(beers[i].name + " Graduación:" + beers[i].abv);
           }
    }
}
masCervezas();
// 2.- Mostrar el nombre y el type de la cerveza cuya graduación sea mayor de 5.4 mediante llamada a función


