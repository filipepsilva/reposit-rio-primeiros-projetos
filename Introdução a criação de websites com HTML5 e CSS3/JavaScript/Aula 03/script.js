//O que são vetores e Objetos

//Como declarar um array
/* let array = ['string', 1 , true]
// console.log(array);*/

//Pode conter outros array dentro
/*let array =['string', 1, true, ['array1'], ['array2']];
console.log(array[4]);*/

/*array.forEach(function(item, index){console.log(item, index)});*/

/*array.push('novo item');
console.log(array);*/

/*array.pop();
console.log(array);*/

/*console.log(array.indexOf(true));*/

/*array.splice(3,4);
console.log(array);*/

/*let novoArray = array.slice(0,3)
console.log(novoArray);*/

//Aplicando características a um objeto
let objeto = {String: 'string', Number: 1, Boolean: true, Array: ["array"], Objectintern:{Objectintern: 'objeto interno'}};
console.log(objeto.Objectintern);

//Desestruturando um objeto
var string = objeto.String;
console.log(string);

var arrayInterno = objeto.Array
console.log(arrayInterno);

//Outra forma de realizar desestruturação
var {Number, Boolean, Objectintern} = objeto;
console.log(Number, Boolean, Objectintern);












