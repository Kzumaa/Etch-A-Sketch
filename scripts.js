const divContainer = document.querySelector("div.container");
const popupButton = document.querySelector("div.popup button");
let size;
let numberOfSquare = 16;
function removeAllChild(idElement) {
    while (idElement.hasChildNodes()) {
        idElement.removeChild(idElement.firstChild);
    }
}
createGrid();
popupButton.addEventListener("click", () => {
    numberOfSquare = prompt("Enter the number of square in a side: " ,"16");
    if (numberOfSquare > 100) {
        window.alert("Number of square out of the limit!");
    } else {
        removeAllChild(divContainer);
        createGrid();
    }
})

function createGrid(){
    size = 960/numberOfSquare;
    for (let i = 0; i < numberOfSquare; i++){
    const divGridRow = document.createElement("div.gridRow");
    divContainer.appendChild(divGridRow);
    divGridRow.setAttribute("style","display: flex;margin: auto");
        for (let m = 0; m < numberOfSquare; m ++){
        const divGrid = document.createElement("div.grid");
        divGrid.setAttribute("style","border: 1px solid grey;");
        divGrid.style.width = size -1.5 + "px";
        divGrid.style.height = size  -1.5 + "px";
        divGrid.addEventListener("mouseover", leaveALine);
        divGridRow.appendChild(divGrid);
        }
    }
};

function leaveALine (e) {
    e.target.style.backgroundColor = "black"; 

}



/*while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
}*/