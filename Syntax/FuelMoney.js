function solve(d,p,price){
let neededF = (d/100)*7;
neededF+=p*0.100;
let money = neededF*price;
console.log(`Needed money for that trip is ${money}lv.`)
}
solve(260, 9, 2.49);
solve(90, 14, 2.88);
