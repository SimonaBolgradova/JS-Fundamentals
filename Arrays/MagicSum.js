function solve(array, magicNum) {
    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == magicNum) {

                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23],
    8
)
solve([14, 20, 60, 13, 7, 19, 8],
    27
)
solve([1, 2, 3, 4, 5, 6],
    6
)
