

const rc = require('./readConsole');
const wr = require('./writeAndReadObject');

rc.readConsole((persona) => {
    wr.writeAndReadObjet('./persona.json', persona, (persona) => {
        console.log(persona);
    });
});