function quickSort(array) {
    if (array.length < 1) {
        return []
    }
    else {
        let left = []
        let right = []
        let pivotIdx = Math.trunc(array.length / 2)
        let pivot = array[pivotIdx]
        for (let idx = 0; idx < array.length; idx++) {
            if (array[idx] < pivot) {
                left.push(array[idx])

            }
            else if (array[idx] > pivot) {

                right.push(array[idx])
            }

        }
        return [].concat(quickSort(left), pivot, quickSort(right))
    }
}

console.log(quickSort([8, 7, 6, 5, 4, 3, 2, 1]))