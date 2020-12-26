function solve(input) {
    let arr = input.shift().split(' ');
    for (const line of input) {
        let line1 = line.split(' ')
        switch (line1[0]) {
            case 'Add':
                arr.push(Number(line1[1]));
                break;
            case 'Remove':
                let index = arr.indexOf(line1[1]);
                arr.splice(index,1);
                break;
            case 'RemoveAt':
                arr.splice(Number(line1[1]),1);
                break;
            case 'Insert':
                arr.splice(Number(line1[2]),0,line1[1]);
                break;
        }
    }
    console.log(arr.join(' '));
}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);
