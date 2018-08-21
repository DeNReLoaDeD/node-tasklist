const { argv } = require('./config/yargs');
const todo = require("./por-hacer/por-hacer");
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = todo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        let actualizado = todo.actualizar(argv.descripcion, argv.compleatdo);
        console.log(actualizado);
        break;
    case 'listar':
        let listado = todo.getListado();
        for (let tarea of listado) {
            console.log("------- TAREA ----------".green);
            console.log(tarea.desc);
            console.log("Estado: ", tarea.compleatdo);
            console.log("------------------------".green);
        }
        break;
    case 'borrar':
        let borrado = todo.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando no reconocido");
        break;
}