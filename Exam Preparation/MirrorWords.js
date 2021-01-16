function solve(input) {
    let str = input.toString();
    let pattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
    let match = str.match(pattern);
    let result = [];
    if (match){
    for (let word of match) {
        let pat = /[A-Za-z]{3,}/g;
        let matchWords = word.match(pat);
        let reversed = [];
        for (const letter of matchWords[1]) {
            reversed.push(letter);
        }
        let newW = reversed.reverse().join('');
        if (matchWords[0] == newW) {
            result.push(matchWords[0] + ' <=> ' + reversed.reverse().join(''));
        }

    }

    if (match.length == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${match.length} word pairs found!`);
    }
    if (result.length == 0) {
        console.log('No mirror words!')
    } else {
        console.log(`The mirror words are:
        ${result.join(', ')}`)
    }
}else{
    console.log('No word pairs found!')
    console.log('No mirror words!');
}
}


solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
