
// modulo fs
const fs = require('fs');


// RETO 2 -> Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.

// creamos objeto persona
let persona = {
    name: 'Menchu',
    surname: 'Martin',
    age: 32
}
// funcion 

// fs.writeFile para escribir el JSON (ruta, metodo para escribir, callback)
fs.writeFile('./persona.json', JSON.stringify(persona), ()=>{
    // callback que lee nuestro jSON (ruta, tipo, callback)
    fs.readFile('./persona.json','utf-8', (err,data)=>{
        
        if (err){
            console.log(err);
        } else {
            persona = JSON.parse(data);
            console.log(data);
            }
    })
})


// The fs.writeFile() method is used to asynchronously write the specified data to a file. 
// By default, the file would be replaced if it exists. The ‘options’ parameter can be used to modify the 
// functionality of the method.

// fs.writeFile( file, data, options, callback )
// El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza
// valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.

// El método JSON.parse() analiza una cadena de texto como JSON, transformando
//  opcionalmente  el valor producido por el análisis.