const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear tarea', {
        descripcion
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}