function solve(input){
    let people = Number(input.shift());
    let wagons = input.pop().split(' ').map(Number);
    
    while ( people !==0 && isFree){
        wagons = wagons.map(w=>{
            let n = 4- w;//> people? people: 4-w;
            if (n> people){
                n = people;
            }
            people -=n;
            w+=n;
            return w;
        })
    }
    console.log(wagons.join(' '));
    function isFree(array){
        return array.filter(x=> x <4).length>0;
            }
}
solve([
    "15",
    "0 0 0 0 0"
   ]
   )
