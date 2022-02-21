

const readline = require('readline');

// interface Readline
const rl = readline.createInterface(process.stdin, process.stdout);


function readConsole (callback){

    let personaReto4 = {}

    rl.question('¿Cual es tu nombre?  ', (nombre)=>{
        personaReto4.nombre = nombre;
    
        rl.question('¿cual es tu apellido?  ', (apellido)=>{
            personaReto4.apellido = apellido;
    
            rl.question('¿que edad tienes?  ', (edad)=>{
                personaReto4.edad = parseInt(edad);
    
                // una vez recogidos los datos, los escribimos en nustro onjeto JSON
                // lo haremos usando la callback => nuestra funcion escribir y leer
                callback(personaReto4)
                rl.close();
            })
        })
    })
    
}

exports.readConsole = readConsole;
