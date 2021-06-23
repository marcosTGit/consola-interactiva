const fs = require('fs');

const archivo = './db/data.json';
//0000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000

const guardarDB = ( data ) => {
    fs.writeFileSync( archivo, JSON.stringify(data) );
}
//0000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000

const leerDB = () => {
    
    if( !fs.existsSync(archivo) ){
        return null;
    }
    
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse( info );

    // console.log(data);

    return data;
}

//0000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000


module.exports = {
    guardarDB,
    leerDB
}