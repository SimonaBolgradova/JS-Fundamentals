function solve(input) {
    let list = input.shift().split('!')
    let line;
    while ((line = input.shift()) != 'Go Shopping!'){
    let [command, item, newItem] = line.split(' ');
    switch (command) {
        case 'Urgent':
            if(!list.includes(item)){
                list.unshift(item);
            }
            break;
        case 'Unnecessary':
            if (list.includes(item)){
                let index = list.indexOf(item);
                list.splice(index,1);
            }
            break;
        case 'Correct':
            if(list.includes(item)){
                let index = list.indexOf(item)
                list.splice(index,1, newItem)
            }
            break;
        case 'Rearrange':
            if(list.includes(item)){
                let index = list.indexOf(item);
                list.splice(index,1);
                list.push(item);
            }
            break;
    }
}
    console.log(list.join(', '))
}
solve([
    'Milk!Pepper!Salt!Water!Banana!Grapes',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]
  )
