

// importaciones 
const fs = require('fs');
const readline = require('readline');

// interface Readline
const rl = readline.createInterface(process.stdin, process.stdout);

// RETO 3 -> Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.
// • Este ejercicio debe hacerse en una única ejecución de JavaScript

// declaramos un objeto vacio, donde guardaremos datos
let persona = {};

// con metodo question -> hacemos preguntas por consosola (pregunta, valor)
rl.question('¿Cual es tu nombre?  ', (nombre)=>{
    persona.nombre = nombre;

    rl.question('¿cual es tu apellido?  ', (apellido)=>{
        persona.apellido = apellido;

        rl.question('¿que edad tienes?  ', (edad)=>{
            persona.edad = parseInt(edad);

            // una vez recogidos los datos, los escribimos en nustro onjeto JSON
            fs.writeFile('./personaConsola.json', JSON.stringify(persona), ()=>{
                // leo el objeto JSON creado
                fs.readFile('./personaConsola.json','utf-8', (err, datosPersona)=>{
                    if(err){
                        console.log(err);
                    } else {
                        // persona = JSON.parse(datosPersona);
                        persona = datosPersona;
                        console.log(datosPersona);
                    }
                })
            })
            rl.close();
        })
    })
})
