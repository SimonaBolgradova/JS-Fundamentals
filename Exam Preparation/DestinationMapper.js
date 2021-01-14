function solve(input){
let pattern = /(=|\/)[A-Z][a-z]+\1/g;
let match =input.match(pattern);
let result = [];
let points= 0;
if(match){
for (const word of match) {
    let patternW= /[A-Z][a-z]+/g
    let destination = word.match(patternW);
    if(destination){
        result.push(destination);
        let destinations = destination.toString();
        for (const lt of destinations) {
            points++
        }
    }
  }
}

    console.log(`Destinations: ${result.join(', ')}`);
    console.log(`Travel Points: ${points}`)

}
solve('/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
solve('ThisIs some InvalidInput')
