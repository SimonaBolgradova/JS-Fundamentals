function solve(input){
    input = input.map(Number);
let firstEmployee = input.shift();
let secondEmployee = input.shift();
let thirdEmployee = input.shift();
let totalPeopleCount = input.shift();

let total = firstEmployee+secondEmployee+thirdEmployee;
let hours = 0;
while(totalPeopleCount>0){
    hours++
    if(hours%4!==0){
    
    totalPeopleCount-=total;
    
    }
    
}
console.log(`Time needed: ${hours}h.`)
}
solve([ '1', '2', '3', '45' ])
