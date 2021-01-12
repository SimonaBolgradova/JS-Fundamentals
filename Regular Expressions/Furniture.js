function solve(input){
//">>{furniture name}<<{price}!{quantity}"


let totalPrice = 0;
let result = `Bought furniture:\n`
for (let line of input){
    let pattern = />>(?<furniture>\w+)<<(?<price>\d+(\.?\d+)?)!(?<quantity>\d+)/g;
    let valid = pattern.exec(line);
    if (valid){
        let furniture = valid.groups.furniture;
        result+=furniture+'\n';
        let price = Number(valid.groups.price);
        let quantity = Number(valid.groups.quantity);
        totalPrice+=price*quantity;
     }
}
result+=`Total money spend: ${totalPrice.toFixed(2)}`;
console.log(result);

}
solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])
