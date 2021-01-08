function solve(input){
let array = input.split(' ');
let occurences = new Map();
for ( let word of array){
    word = word.toLowerCase();
    if (!occurences.has(word)){
        occurences.set(word,0);
    }

    occurences.set(word,occurences.get(word)+1);
    
}
let keys= Array.from(occurences.keys())
.filter(x=> occurences.get(x)%2!==0)
.join(' ');
console.log(keys);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
