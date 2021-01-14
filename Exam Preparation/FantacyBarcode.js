function solve(input){
let n = input.shift();
for (let line of input) {
    let patterValidCode = /(@#+)[A-Z][A-Za-z0-9]{4,}[A-Z](@#+)/g;
    let match = line.match(patterValidCode);
    if (match){
        let patternSum= /\d+/g;
        let matchSum = line.match(patternSum);
        if (matchSum){
            console.log(`Product group: ${matchSum.join('')}`)
        }else{
            console.log(`Product group: 00`)
        }
    }else{
        console.log("Invalid barcode")
    }
}
}
solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ])
