function solve(array1,array2){
    for (let el of array1){
        let isCommon = array2.includes(el);
        
            if (isCommon){
                console.log(el);
            }

        }
    }

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);
