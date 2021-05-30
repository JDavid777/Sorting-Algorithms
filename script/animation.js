let list = [];

function generateList() {
    let numElements = document.getElementById("num-items").value;
    document.getElementById("canvas").innerHTML = "";
    list = [];
    if (numElements > 1) {
        for (let i = 0; i < numElements; i++) {
            list.push(Math.floor(Math.random() * 10))
        }
        createElementsHTML();
    } else {
        alert("Enter a value greater than one.")
    }
}
function createElementsHTML() {
    let canvas = document.getElementById("canvas");
    let ul = document.createElement("ul");


    for (let idx = 0; idx < list.length; idx++) {
        let li = document.createElement("li");
        let liText = document.createTextNode(list[idx]);
        li.appendChild(liText);
        li.classList.add("item")
        ul.appendChild(li);
    }
    canvas.appendChild(ul);
}
const sort = ()=>{
    
    list=quickSort(list);
 
}