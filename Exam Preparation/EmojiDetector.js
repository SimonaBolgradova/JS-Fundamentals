function solve(input){
    let str = input.toString();
let coolThreshold = 1;
let pattern = /\d/g;
let match = str.match(pattern);
for (const m of match) {
    coolThreshold*=Number(m);
}
let coolnes ={};
let patternEmoji = /(::|\*\*)[A-Z][a-z][a-z]+\1/g;
let matchEmoji =str.match(patternEmoji);
console.log(`Cool threshold: ${coolThreshold}`);
console.log(`${matchEmoji.length} emojis found in the text. The cool ones are:`)
for (let emoji of matchEmoji){
    let word = emoji.slice(2,-2);
    let coolFactor = 0;
    for (let i=0; i<word.length;i++){
        coolFactor+= word.charCodeAt(i);
    }

    if (coolFactor> coolThreshold){
        console.log(emoji);
    }
}
}
solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ])                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
