function bombNumbers(array, [bomb, power]) {

    while (array.includes(bomb)) {
        let index = array.indexOf(bomb);
        let minus = index - power;
        array.splice(minus, power);
        let index1 = array.indexOf(bomb);
        let ind = index1 + 1
        array.splice(ind, power);
        let index2 = array.indexOf(bomb);
        array.splice(index2, 1)
    }

    let result = 0
    for (let i = 0; i < array.length; i++) {
        result += array[i]

    }
    return result;
}
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
))
console.log(bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
))
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
))
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
))
