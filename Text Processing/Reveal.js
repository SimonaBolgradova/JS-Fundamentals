function solve(words, sentence){
words = words.split(', ');

for (let word of words){
    let star= '*'.repeat(word.length);
    sentence = sentence.replace(star, word);

}
console.log(sentence);
}solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)
