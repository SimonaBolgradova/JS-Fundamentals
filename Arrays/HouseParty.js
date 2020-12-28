function solve(input){
    let result = [];
    for (const line of input) {
        let splited = line.split(' ');
        let name = splited[0];
        
        if (splited[2]=='going!'){
        
            if (result.includes(name)){
                
               console.log(`${name} is already in the list!`)
            }else {
                result.push(name);
            }

        }else if ( splited[2]=='not'){
            if (result.includes(name)){
                let index = result.indexOf(name);
                result.splice(index,1);
            }else {
               
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(result.join('\n'))
}solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
