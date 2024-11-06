export default class TodoList {

    selectedProject = "Personal";
    data = {
        "Personal": [
            "Clean House", "Bring Groceries"
        ],
        "Work": [
            "Prepare Presentation", "Meeting with shareholders"
        ]
    }
    constructor() {
        this.updateStorage();
    }
    addProject(projectName){
        this.data[projectName] = []
        this.updateStorage();
    }
    addTask(taskName) {
        this.data[this.selectedProject].push(taskName);
        this.updateStorage();
    }

    getProjects(){
        return Object.keys(this.data);
    }
    getTasks(projectName){
        return this.data[projectName];
    }

    updateStorage(){
        localStorage.setItem("todolist", JSON.stringify(this.data))
        console.log("localstorage", localStorage["todolist"])
    }
    readStorage() {
        data = JSON.parse(localStorage["todolist"]);
    }
}