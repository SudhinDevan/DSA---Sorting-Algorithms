function countvowels(abc) {
    let str = abc.toLowerCase()
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++
        }
    }
    return count
}
function vowelSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (countvowels(arr[i]) > countvowels(arr[i + 1])) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr
}
let arr = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grapefruit"]
console.log(vowelSort(arr))