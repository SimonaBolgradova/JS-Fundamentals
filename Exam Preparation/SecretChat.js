function solve(input) {
    let actions = {
        InsertSpace(text, index) {
            index = Number(index);
            let first = text.substring(0, index);
            let second = text.substring(index);
            let result = first + ' ' + second;
            console.log(result);
            return result;
        },
        Reverse(text, substring) {
            if (text.includes(substring)) {
                let index = text.indexOf(substring);
                let word = text.substring(index, index + substring.length);
                let reversed = [];
                for (let i = word.length-1; i >= 0; i--) {
                    reversed.push(word[i]);
                }
                text = text.split(substring).join(reversed.join(''));
               
                console.log(text);
            
            
            
            } else {
                console.log('error')
            }
            return text;
        },
        ChangeAll(text, substring, replacement) {
            while(text.includes(substring)){
               text= text.replace(substring,replacement)
            }
            console.log(text)
            return text;
        }
    }
    let text = input.shift();
    let line;
    while ((line = input.shift()) !== 'Reveal') {
        let tokens = line.split(':|:');
        let actionName = tokens[0];
        let action = actions[actionName];
        text = action(text, tokens[1], tokens[2]);

    }
    console.log(`You have a new text message: ${text}`)
}
solve([
    'heVVodar!gniV!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])
