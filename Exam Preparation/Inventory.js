function solve(input) {
    let colections = input.shift().toString().split(', ');
    let line;
    while ((line = input.shift()) !== "Craft!") {
        let [command, ...params] = line.split(' - ');
        switch (command) {
            case 'Collect':
                if(!colections.includes(params[0])){
                    colections.push(params[0]);
                }
                break;
            case 'Drop':
                if(colections.includes(params[0])){
                    let index = colections.indexOf(params[0]);
                    colections.splice(index,1);
                }
                break;
            case 'Combine Items':
                let [old,newww]=params[0].split(':');
                if(colections.includes(old)){
                    
                    let neww = old+', '+newww;
                    let index = colections.indexOf(old);
                    colections.splice(index,1,neww)
                }
                break;
            case 'Renew':
                if(colections.includes(params[0])){
                    let index = colections.indexOf(params[0]);
                    colections.splice(index,1);
                    colections.push(params[0])
                }
                break;
        }
    }
    console.log(colections.join(', '))

}
//solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )
