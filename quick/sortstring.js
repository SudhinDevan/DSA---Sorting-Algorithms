function quick(array) {
    quickhelp(array, 0, array.length - 1);
    console.log(array);
}
function quickhelp(array, startIndx, endingIndx) {
    if (startIndx >= endingIndx) {
        return;
    }
    let pivot = endingIndx;
    let leftIndx = startIndx;
    let rightIndx = endingIndx - 1;
    while (leftIndx <= rightIndx) {
        if (array[leftIndx].length < array[pivot].length && array[rightIndx].length > array[pivot].length) {
            swap(array, leftIndx, rightIndx);
            leftIndx++;
            rightIndx--;
        } else if (array[leftIndx].length >= array[pivot].length) {
            leftIndx++;
        } else if (array[rightIndx].length <= array[pivot].length) {
            rightIndx--;
        }
    }
    swap(array, pivot, rightIndx + 1);
    quickhelp(array, startIndx, rightIndx);
    quickhelp(array, rightIndx + 2, endingIndx);
}
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
let fruits = ["orange", "apple", "banana", "grape", "pear", "kiwi", "mango"];
quick(fruits);