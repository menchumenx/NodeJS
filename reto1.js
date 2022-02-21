

// modulo express
const express = require ('express');

// RETO 1
console.log('Mensaje 1');
// funcion asincrona con callback como parametro
setTimeout ( () => {
    console.log('Mensaje 2');
    console.log('Mensaje 3');

},3000)