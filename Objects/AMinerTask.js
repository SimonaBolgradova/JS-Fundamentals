function solve (input){
    let task = {}
    for (let i = 0; i < input.length; i+=2) {
        const element = input[i];
        
        if (!task.hasOwnProperty(element)){
            task[element]= Number(input[i+1]);
        }else{
            task[element]+= Number(input[i+1]);
        }
}

Object.keys(task).forEach( key =>{
    console.log(`${key} -> ${task[key]}`)
})
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    );
