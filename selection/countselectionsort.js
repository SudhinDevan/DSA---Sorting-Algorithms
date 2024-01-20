function countselection() {
    let arr = [1, 3, 2, 4, 6, 5]
    let count = 0
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                count++
            }
        }
    }
    return count
}

console.log(countselection())