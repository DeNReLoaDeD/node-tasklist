const fs = require('fs');
const colors = require("colors");

let listadoTodo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTodo);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error("error guardando");
    });
}

const cargarDB = () => {
    try {
        listadoTodo = require("../db/data.json");
    } catch (error) {
        listadoTodo = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoTodo;
}

const crear = (desc) => {

    cargarDB();

    let porhacer = {
        desc,
        compleatdo: false
    };

    listadoTodo.push(porhacer);

    guardarDB();

    return porhacer;

}

const actualizar = (desc, completado = true) => {
    cargarDB();

    let index = listadoTodo.findIndex(tarea => {
        return tarea.desc === desc;
    });

    if (index >= 0) {
        listadoTodo[index].compleatdo = completado;
        guardarDB();
        return true;
    }

    return false;

}

const borrar = (desc) => {
    cargarDB();

    let nuevoListado = listadoTodo.filter(tarea => {
        return tarea.desc !== desc;
    });

    if (nuevoListado.length === listadoTodo.length) {
        return false;
    }
    listadoTodo = nuevoListado;
    guardarDB();
    return true;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}