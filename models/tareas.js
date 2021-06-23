const Tarea = require('./tarea');


class Tareas {
    
    _listado = {'abc': 123};
    
//0000000000000000000000000000000000000000000
get listadoArr() {
    
    const listado = [];
    Object.keys(this._listado).forEach( key => {
        const tarea = this._listado[key];
        listado.push( tarea );
    });
    
    return listado;
}
//0000000000000000000000000000000000000000000


constructor() {
    this._listado = {};
}

//0000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000

borrarTarea( id = '' ) {
    
    if ( this._listado[id] ) {
        delete this._listado[id];
    }
    
}
//0000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000

cargarTareasFromArray( tareas = [] ) {
    
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

//0000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000

    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

//0000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000

    listadoCompleto() {
        
        console.log();
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i + 1}`.yellow;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.yellow
                                : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);

        });         
    }
//0000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000

    listarPendientesCompletadas( completadas = true ) {

        console.log();
        let contador = 0;
        this.listadoArr.forEach( tarea => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.yellow
                                : 'Pendiente'.red;
            if ( completadas ) {
                // mostrar completadas
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').yellow } ${ desc } :: ${ completadoEn.yellow }`);
                }
            } else {
                // mostrar pendientes
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').yellow } ${ desc } :: ${ estado }`);
                }
            }

        });     

    }
//0000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArr.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }

        });


    }

}
module.exports = Tareas;
