function quickSort(array) {

    if (array.length < 1) {
        return []
    }
    else {
        let left = []
        let right = []
        let canvas= document.getElementById("canvas");
        let leftHTML = document.createElement("ul");
        leftHTML.style.float="left"
        leftHTML.classList.add("left-list")
        let rightHTML = document.createElement("ul");
        rightHTML.style.float="right"
        rightHTML.classList.add("right-list")
        leftHTML.classList.add("list");
        rightHTML.classList.add("list");
        canvas.appendChild(leftHTML);
        canvas.appendChild(rightHTML);
        let pivotIdx = Math.trunc(array.length / 2)
        let pivot = array[pivotIdx]
        for (let idx = 0; idx < array.length; idx++) {
            if (idx != pivotIdx) {
                if (array[idx] < pivot) {
                    left.push(array[idx])
            
                    addToNewList(array[idx], leftHTML,false)
                }
                else {
                    right.push(array[idx])
              
                    addToNewList(array[idx], rightHTML,true)
                }
            }
          
            

        }

        return [].concat(quickSort(left), pivot, quickSort(right))
    }
}
const decorator = (pivot, selected) => {


}
const addToNewList = (element, list,right) => {
    if (right) {
        let li = document.createElement("li");
        let liText = document.createTextNode(element);
        li.appendChild(liText);
        li.classList.add("item")
        setTimeout(()=>{list.appendChild(li)},1000);
    }
    else{
        let li = document.createElement("li");
        let liText = document.createTextNode(element);
        li.appendChild(liText);
        li.classList.add("item")
        setTimeout(()=>{list.appendChild(li)},1000);
    }
   
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  