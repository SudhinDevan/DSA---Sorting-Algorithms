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

function duplicate(arr) {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            newarr.push(arr[i])
        }
    }
    return newarr
}


const arr = [-2, -10, -20, 10, 4, 2, -10]
let xyz = mergesort(arr)
let abc = duplicate(xyz)
console.log(abc);
