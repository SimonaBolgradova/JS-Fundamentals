function solve(input) {
    let loot = input.shift().split("|");

    for (const line of input) {
        let splite = line.split(' ');
        let command = line.split(' ').shift();
        if (command == 'Loot') {
            splite.shift();
            for (let item of splite) {
                if (!loot.includes(item)) {
                    loot.unshift(item)
                }
            }
        } else if (command == 'Drop') {
            let splited = line.split(' ')
            if (loot.length > Number(splited[1])) {
                let droped = loot.splice(Number(splited[1]), 1);
                loot.push(droped.join());
            }
        } else if (command == 'Steal') {
            if (loot.length > Number(splite[1])) {
                let stolen = loot.splice(loot.length - Number(splite[1]), Number(splite[1]));
                console.log(stolen.join(', '));
                let sum = 0;
                let count = 0;
                for (const it of loot) {
                    let lengt = it.length;
                    sum += lengt;
                    count++;

                }
                if (loot.length > 0) {
                    console.log(`Average treasure gain: ${(sum/count).toFixed(2)} pirate credits.`)
                }

            } else {
                console.log(loot.join(', '));

                console.log("Failed treasure hunt.");

            }
        } else if (command == "Yohoho!") {
            break;
        }

    }
}
solve(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"
])

;
