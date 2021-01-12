function solve(input){
let list = input.shift().split(', ');
let command = input.shift();
let obj ={}
for (const el of list) {
    if (!obj.hasOwnProperty(el)){
        obj[el]= 0;
    }
    obj[el]=0;
}

while (command!=='end of race'){
let patternNmae = /[A-Za-z]/g;
let match = command.match(patternNmae).join('');
if (obj.hasOwnProperty(match)){
    let patternNum = /\d/g;
    let match1 = command.match(patternNum)
    .map(Number)
    .reduce((a,b)=> a+b);
    

    obj[match]+=match1;
}
    command = input.shift();
}
let sorted = Object.keys(obj).sort((a,b)=> obj[b]-obj[a]);
console.log(`1st place: ${sorted[0]}`);
console.log(`2nd place: ${sorted[1]}`);
console.log(`3rd place: ${sorted[2]}`)
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ])
