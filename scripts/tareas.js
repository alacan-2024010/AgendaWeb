//Se crea el arreglo para las tareas
let tareas = [];

function agregarTarea() {
    let tarea = document.getElementById("tarea").value;
    let prioridadTarea = document.getElementById("prioridad").value;

    if (tarea === "") {
        alert("Escribe una tarea");
        return;
    }

    //push lo que esta haciendo es agregar un elemento al final de cada arreglo
    tareas.push({
        texto: tarea,
        prioridad: prioridadTarea
    });

    document.getElementById("tarea").value = "";

    ordenarTareas();
    mostrarTareas();
}

function ordenarTareas() {
    //sort ordena las tareas segun prioridad
    tareas.sort(function (a, b) {
        return a.prioridad - b.prioridad;
    });
}

function mostrarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {
        let li = document.createElement("li");

        li.textContent =
            tareas[i].texto + " | Prioridad: " + textoPrioridad(tareas[i].prioridad);

        let botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.onclick = function () {
            editarTarea(i);
        };

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function () {
            //splice borra el elemento
            tareas.splice(i, 1);
            mostrarTareas();
        };
        //Se esta agregando todo en li
        li.appendChild(document.createElement("br"));
        li.appendChild(botonEditar);
        li.appendChild(botonEliminar);

        lista.appendChild(li);
    }
}

function editarTarea(indice) {
    document.getElementById("tarea").value = tareas[indice].texto;
    document.getElementById("prioridad").value = tareas[indice].prioridad;

    tareas.splice(indice, 1);
    mostrarTareas();
}

function textoPrioridad(valor) {
    if (valor == 1) {
        return "Alta";
    }
    if (valor == 2) {
        return "Media";
    }
    return "Baja";
}
