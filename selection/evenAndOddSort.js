function evenandoddsort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
}

function placement(array) {
    let even = array.filter(num => num % 2 === 0)
    evenandoddsort(even)
    let odd = array.filter(num => num % 2 === 1)
    evenandoddsort(odd)
    let values = [...even, ...odd]
    return values
}

let array = [11, 44, 77, 33, 99, 22, 71, 18, 97]
console.log(placement(array))







// const arr = [11, 44, 77, 33, 99, 22, 71, 18, 97];
// let arr1 = [];
// let arr2 = [];
// let j = 0, k = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         arr1[j] = arr[i]
//         j++;
//     } else {
//         arr2[k] = arr[i];
//         k++;
//     }
// }

// console.log([...arr2, ...arr1]);