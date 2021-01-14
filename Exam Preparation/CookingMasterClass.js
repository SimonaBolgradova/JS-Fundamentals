function solve(budget, students,priceOfFlour, priceOfEgg, priceOfApron){
    let b = parseFloat(budget);
    let s = parseInt(students);
    let f= parseFloat(priceOfFlour);
    let e = parseFloat(priceOfEgg);
    let a = parseFloat(priceOfApron);
let needed = Math.ceil(a*(s +Math.ceil(s*0.2)) + (e*10* s)+ (s - s/5)*f);
if (needed<=b){
    console.log(`Items purchased for ${needed.toFixed(2)}$.`)
}else {
    console.log(`${(needed-b).toFixed(2)}$ more needed.`)
}
}
solve(50,
    2,
    1.0,
    0.10,
    10.0
    );
