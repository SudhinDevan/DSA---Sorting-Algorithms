function selectionSort() {
    let arr = [12, 5, 33, 45, 23, 9, 3]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}


console.log(selectionSort())



// function selectionSortRecursive(arr, n = arr.length) {
//     // Base case: If array contains one or zero elements, it is already sorted.
//     if (n <= 1) {
//         return arr;
//     }

//     // Find the maximum element in the array
//     let maxIndex = 0;
//     for (let i = 1; i < n; i++) {
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//     }

//     // Swap the maximum element with the last element in the array
//     let temp = arr[n - 1];
//     arr[n - 1] = arr[maxIndex];
//     arr[maxIndex] = temp;

//     // Recursively sort the first n-1 elements
//     selectionSortRecursive(arr, n - 1);

//     return arr
// }

// console.log(selectionSortRecursive([12, 5, 33, 45, 23, 9, 3]))