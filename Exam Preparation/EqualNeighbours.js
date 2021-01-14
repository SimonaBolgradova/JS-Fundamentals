function solve(input){
   let count =0;
for (const line of input) {
    let newI =input.slice(1);
    for (const line2 of newI){
    for (let i = 0; i < line.length; i++) {
        
        for (let j = 0; j < line2.length; j++) {
            if (line[i]==line[j]);
            count++
        }
    }
}
}
console.log(count)
}
solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
