function insertionsort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let valuetoinsert = arr[i]
        let j = i - 1


        while (j >= 0 && arr[j] > valuetoinsert) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = valuetoinsert
    }
    console.log(arr)
}

function duplicateremove(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr[i + 1] = arr[i + 2]
            i--
            arr.length--
        }
    }
    console.log(arr)
}

let array = [6, 7, 6, 7, 3, 1, 2]
insertionsort(array)
duplicateremove(array)
