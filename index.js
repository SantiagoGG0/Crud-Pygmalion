//Creamos array para almacenar.
let tareas = []

//Creando función de añadir una tarea.

function añadirTarea(){
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task !== ""){
        tareas.push({tarea: tareas, descripción: ""});
        taskInput.value = "";
        listTareas();
    }
}

//Función para añadir una descripción

function añadirDescripción(){
    const descriptionInput = document.getElementById("descriptionInput");
    const descripción = descriptionInput.value.trim();
    const tareasIndex = tareas.length - 1;

    if(tareasIndex >= 0 && descripción !== ""){
        tareas[tareaskIndex].descripción = descripción;
        descriptionInput.value = "";
        listTareas();
    }
}