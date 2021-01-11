function solve(input){
    let text = input[0].split(' ');
    let words = input[1];
    let count = 0;
for (let word of text) {
    if(word.includes('_')){
        let clear = '';
        for (let char of word){
            if (char =='_'){
                clear+='_';
            }

        }
  for (let w of words){
        if ( clear.length==w.length){
            
             text =text.join(' ')
             text = text.replace(clear, w);
             text = text.split(' ')
            break;
        }
        
  }
}
}
console.log(text.join(' '))
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)
