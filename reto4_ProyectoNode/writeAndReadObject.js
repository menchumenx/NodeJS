

const fs = require('fs');

// funcion WriteAndReadObjet
function writeAndReadObjet (ruta, objeto, callback){

    fs.writeFile(ruta, JSON.stringify(objeto), ()=>{
            // leo el objeto JSON creado
            fs.readFile(ruta,'utf-8', (err, datosPersona)=>{
                
                callback(JSON.parse(datosPersona))
            })
        })
}

exports.writeAndReadObjet = writeAndReadObjet;