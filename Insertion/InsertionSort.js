function insertionsort() {
    let arr = [20, 8, -2, 4, -6]

    for (let i = 1; i < arr.length; i++) {

        let valuetoinsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > valuetoinsert) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = valuetoinsert
    }
    return arr
}
console.log(insertionsort())
