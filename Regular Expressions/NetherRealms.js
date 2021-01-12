function solve(input) {
    let inp = input.toString()
        .split(', ')
        .sort((a, b) => a.localeCompare(b));

    for (const line of inp) {
        let trimed = line.trim();
       let validPatt = /[\s\,]/g;
       let isV = trimed.match(validPatt);
       if(isV){
           break;
       }
       
        let patternHealth = /[^0-9+\-\*\/\.]/g;
        let match = trimed.match(patternHealth);
        let health = 0;
        if (match) {
            for (const letter of match) {
                let index = 0;
                let num = letter.charCodeAt(index);
                index++
                health += num;
            }

        } else {
            break;
        }
        let patternDemage = /([\+\-])?\d+(.\d+)?/g;
        let matchD = trimed.match(patternDemage);
        let base = 0;
        if (matchD) {
            for (let num of matchD) {
                num = Number(num);
                base += num;
            }
        }
        let actions = /[*\/]/g;
        let matchA = trimed.match(actions);
        if (matchA) {
            for (let A of matchA) {
                if (A == '*') {
                    base *= 2
                } else {
                    base /= 2;
                }
            }
        }
        console.log(`${trimed} - ${health} health, ${base.toFixed(2)} damage`)
    }

}
solve(['3-0.5g-0.    50.0**  '])
solve(['M3ph1st0**,      Azazel    '])
