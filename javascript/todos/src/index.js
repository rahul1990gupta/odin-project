import "./styles.css"

import TodoList from './todolist.js'

let todo = new TodoList()

function addTask(task_title){
    // todo.addTask(task_title);
    const el = document.createElement("div");
    el.classList.add("task");
    el.innerHTML = task_title;
    document.getElementById("tasks").appendChild(el);
}

function clearTasks(){

    document.getElementById("tasks").innerHTML = "";
}

document.getElementById("add-task").addEventListener("click", () => {
    const task_title = document.getElementById("task-title").value;
    todo.addTask(task_title);

    addTask(task_title)
    document.getElementById("task-title").value = "";
});


function addProject(project_title){
    const el = document.createElement("button");
    el.classList.add("project");
    el.type = "button";
    el.value = project_title;
    el.addEventListener("click", loadTasks);
    el.innerHTML = project_title;
    document.getElementById("projects").appendChild(el);
}

document.getElementById("add-project").addEventListener("click", () => {

    const project_title = document.getElementById("project-title").value;
    todo.addProject(project_title);
    addProject(project_title);
    document.getElementById("project-title").value = "";
});

window.onload = (event) => {
    
    // load tasks
    let tasks = todo.getTasks("Personal");
    for (let i=0; i < tasks.length; i++){
        addTask(tasks[i]);
    }

    // load projects 
    const projects = todo.getProjects();
    for (const key in projects) {
        console.log(projects[key]);
        addProject(projects[key]);
    }
};

function loadTasks(event){
    clearTasks();
    const projectName = event.target.value;
    todo.selectedProject = projectName;
    
    const tasks =  todo.getTasks(projectName); 
    console.log("clicked on project", projectName);
    for (let i = 0; i < tasks.length; i++) {
        addTask(tasks[i]);
    }
}