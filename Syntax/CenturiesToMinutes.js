function solve(century){
let years = century*100;
let days = Math.trunc(years*365.2422);
let hours = days*24;
let mins= hours*60;
console.log(`${century} centuries= ${years} years = ${days} days = ${hours} hours = ${mins} minutes`)
}
solve(1)
