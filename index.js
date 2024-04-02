// Creamos un array para almacenar las tareas.
let tareas = [];

// Función para añadir una tarea.
function añadirTarea() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task !== "") {
        tareas.push({ tarea: task, descripcion: "" });
        taskInput.value = "";
        listarTareas();
    }
}

// Función para añadir una descripción.
function añadirDescripción() {
    const descriptionInput = document.getElementById("descriptionInput");
    const descripción = descriptionInput.value.trim();
    const tareasIndex = tareas.length - 1;

    if (tareasIndex >= 0 && descripción !== "") {
        tareas[tareasIndex].descripcion = descripción;
        descriptionInput.value = "";
        listarTareas();
    }
}

// Función para listar tareas y descripciones.
function listarTareas() {
    const taskList = document.getElementById("tasklist");
    taskList.innerHTML = "";
    tareas.forEach((tarea, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Tarea: ${tarea.tarea} - Descripción: ${tarea.descripcion}`;
        const updateButton = document.createElement("button");
        updateButton.textContent = "Actualizar";
        updateButton.onclick = function () {
            actualizarTarea(index);
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = function () {
            eliminarTarea(index);
        };

        listItem.appendChild(updateButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

// Función para actualizar una tarea.
function actualizarTarea(index) {
    const newTask = prompt("Ingrese la nueva tarea:");
    if (newTask !== null && newTask.trim() !== "") {
        tareas[index].tarea = newTask.trim();
        listarTareas();
    }
}

// Función para eliminar una tarea.
function eliminarTarea(index) {
    tareas.splice(index, 1);
    listarTareas();
}
