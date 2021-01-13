function solve(input) {
    let countOfMessages = input.shift();
    let messages = input;
    let decryptMessages = [];
    for (const mes of messages) {
        let pattern = /[STARstar]/g;
        let match = mes.match(pattern);
        let key = match.length;
        let decryptMessage = []
        for (let i = 0; i < mes.length; i++) {
            let num = mes.charCodeAt(i) - key
            let newLetter = String.fromCharCode(num);
            decryptMessage.push(newLetter);
        }
        decryptMessages.push(decryptMessage.join(''))
    }
    let result = {
        'Attacked planets': [],
        'Destroyed planets': []
    };

    for (const mess of decryptMessages) {
        let pattern = /@(?<name>[A-Za-z]+)([^@\-!:>])?:(?<population>\d+)\2?!(?<attack>[AD])!\2?->(?<count>\d+)/g;
        let valid = pattern.exec(mess);
        if (valid) {
            if (valid.groups.attack == 'A') {

                result['Attacked planets'].push(valid.groups.name)
            } else if (valid.groups.attack == 'D') {
                result["Destroyed planets"].push(valid.groups.name);
            }
        }
    }
    for (const key in result) {
        console.log(`${key}: ${result[key].length}`);
        let sorted = result[key].sort((a, b) => a.localeCompare(b))
        sorted.forEach(el => {
            console.log(`-> ${el}`)
        });

    }
}

solve(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])
solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
