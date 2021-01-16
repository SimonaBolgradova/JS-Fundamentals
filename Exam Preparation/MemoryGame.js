function solve(input){
let sequence = input.shift().split(' ');
let command = input.shift();
let numberOfMoves =0;
while(command!=='end'){
    let index = command.split(' ').map(Number);
let i =index[0];
let j = index[1];

if (i==j ||i>sequence.length-1||j>sequence.length-1||i<0||j<0){
    numberOfMoves++;
    let element= `-${numberOfMoves}a`;
    sequence.splice(sequence.length/2,0,element,element)
    console.log("Invalid input! Adding additional elements to the board")
}

else if (sequence[i]==sequence[j]){
    console.log(`Congrats! You have found matching elements - ${sequence[i]}!`);
    let element = sequence[i];
    sequence.splice(i,1)
    let ind = sequence.indexOf(element)
    sequence.splice(ind,1);
    
    numberOfMoves++;
}else if(sequence[i]!==sequence[j]){
    console.log('Try again!');
    numberOfMoves++;
}
if (sequence.length==0){
    console.log(`You have won in ${numberOfMoves} turns!`)
    break;
}

    command= input.shift();
}

    if (sequence.length>0){
        console.log('Sorry you lose :(');
        console.log(`${sequence.join(' ')}`)
    
}

}

solve( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    
    
    
    )
