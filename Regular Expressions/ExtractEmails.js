function solve(input){
    let str = input.toString();
let pattern = /\b[^\.\_\-](\w*[\+\.\-\_]?\w+@([A-Za-z]+[\-]?[A-Za-z]+)([\.][A-Za-z]+)+)\b/g;
let match = str.match(pattern);


    console.log(match.join('\n'));

}
solve([ 'Please contact us at: support@github.com.' ]);
