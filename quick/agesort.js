function quickSort(arr) {

    if (arr.length < 2) {
        return arr
    }
    let pivot = arr.length - 1
    let right = []
    let left = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].age < arr[pivot].age) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), arr[pivot], ...quickSort(right)]
}


const arr = [{
    firstname: "Darshan",
    lastname: "Suhas",
    age: 29,
    nationality: "India"
}, {
    firstname: "Sudhin",
    lastname: "Devan",
    age: 23,
    nationality: "India"
}, {
    firstname: "Juvin",
    lastname: "Vinod",
    age: 18,
    nationality: "England"
}, {
    firstname: "Nithya",
    lastname: "Gopi",
    age: 25,
    nationality: "indian"
}
]

console.log(quickSort(arr))
