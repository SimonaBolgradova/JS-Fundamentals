function solve(input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
let regex = pattern.exec(input);
let result =[]
while(regex!=null){
    result.push(regex);
    regex = pattern.exec(input);
}
console.log(result.join(' '))
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
