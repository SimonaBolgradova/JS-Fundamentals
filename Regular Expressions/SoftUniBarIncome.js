function solve (input){
let command = input.shift();

let sum = 0;

while(command!=='end of shift'){
let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>\w+)>([^\|\$%\.]+)?\|(?<quantity>\d+)([^\|\$%\.]+)?\|([^\|\$%\.\d]+)?(?<price>\d+(.\d+)?)\$/g;
let regex = pattern.exec(command);
if (regex){
    let totalPrice = Number(regex.groups.quantity)*Number(regex.groups.price);
sum +=totalPrice;
console.log(`${regex.groups.name}: ${regex.groups.product} - ${totalPrice.toFixed(2)}`)
}

    command= input.shift();
}
console.log(`Total income: ${sum.toFixed(2)}`)
}
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
    ]
  )
