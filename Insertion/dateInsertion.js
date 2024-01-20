function insertionsort() {
    let arr = [new Date('2000-10-2'), new Date('2021-05-01'), new Date('1997-10-16')]

    for (let i = 0; i < arr.length; i++) {

        let valuetoinsert = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] < valuetoinsert) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = valuetoinsert
    }
    return arr
}

console.log(insertionsort())
