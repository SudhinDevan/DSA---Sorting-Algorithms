function mergesort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let leftarr = arr.slice(0, mid)
    let rightarr = arr.slice(mid)

    return merge(mergesort(leftarr), mergesort(rightarr))
}

function merge(leftarr, rightarr) {
    let sortedarr = []
    while (leftarr.length && rightarr.length) {
        if (leftarr[0] <= rightarr[0]) {
            sortedarr.push(leftarr.shift())
        } else {
            sortedarr.push(rightarr.shift())
        }
    }
    let result = [...sortedarr, ...leftarr, ...rightarr]
    return result
}


const arr = [-2, -10, -20, 10, 4, 2, -10]
console.log(mergesort(arr)) // [-20, -10, -10, -2, 2,   4,  10]