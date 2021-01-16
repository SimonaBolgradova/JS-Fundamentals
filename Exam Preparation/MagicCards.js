function solve(input){
    let card = input.shift().split(':');
    
    let command = input.shift();
    
    let desk = [];
while (command!=='Ready'){
    let token= command.split(' ');
    let com = token[0];
    switch(com){
        case "Add":
            if (card.includes(token[1])){
                desk.push(token[1])
            }else {
                console.log("Card not found.")
            }
            break;
        case "Insert":
            if (card.includes(token[1])&&desk.length>Number(token[2])){
                let c= token[1]
                desk.splice(Number(token[2]),0,c);
            } else {
                console.log("Error!");
            }
            break;
        case "Remove" :
        if (desk.includes(token[1])){
            let b = desk.indexOf(token[1]);
            desk.splice(b,1);
        }else {
            console.log("Card not found.")
        }
        break;
        case 'Swap':
            let index1 = desk.indexOf(token[1]);
            let index2 = desk.indexOf(token[2]);
            let temp = desk[index1];
            desk[index1]= desk[index2];
            desk[index2] = temp;
            break;
        case "Shuffle":
           desk.reverse();
            break;
    }
command = input.shift();
}
console.log(desk.join(' '))
}


solve(["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
"Add Pop",
"Add Exodia",
"Add Aso",
"Remove Wrath",
"Add SineokBqlDrakon",
"Shuffle deck",
"Insert Pesho 0",
"Ready"])

