function solve(input){
let people = Number(input[0]);
let wagons = input[1].split(' ').map(Number);

while(people!==0 && isfreeSpots(wagons)){
    wagons = wagons.map(w=>{
        let n = 4-w;
        if (n>people){
            n= people;
        }
        people-=n;
        w+=n;
        return w;
    })
}

function isfreeSpots(array){
    return array.filter(x=> x<4).length >0;
}
if (isfreeSpots(wagons)){
    console.log(`The lift has empty spots!`)
}
if (people>0){
    console.log(`There isn't enough space! ${people} people in a queue!`)
}
console.log(wagons.join(' '))
}

solve(
    [
     "15",
     "0 0 0 0 0"
    ]
    )
