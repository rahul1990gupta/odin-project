
let size = 8;
let grid = document.getElementsByClassName("grid")[0]

function paint(){

    for(let i =0; i <size; i++){
        let rowDiv = document.createElement("div");
        rowDiv.className = "row"
        for(let j=0; j< size; j++){
            let cellDiv = document.createElement("div");
            cellDiv.className = "cell"
            rowDiv.appendChild(
               cellDiv
            )
        }
        grid.appendChild(rowDiv)
    }
    
}


function clear(){
    grid.innerHTML=""
}

document.getElementsByClassName("btn")[0].addEventListener("click", () => {
    size = prompt("Enter the size of the grid")
    clear()
    paint()

})


grid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cell")) {
        event.target.style.backgroundColor = "black";
    }
});


paint()