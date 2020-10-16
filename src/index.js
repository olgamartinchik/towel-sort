// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof(matrix) !== 'object' || matrix.length === 0) {
        return [];
    }
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        arr.push(matrix[i].slice())
    }

    for (let j = 0; j < arr.length; j++) {
        if (!(j % 2 === 0)) {
            arr[j].reverse()
            console.log(arr[j])
        }
    }
    return arr.flat(2);
}
