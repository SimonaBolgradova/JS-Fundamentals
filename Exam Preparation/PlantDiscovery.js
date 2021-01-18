function solve(input){
    let n = input.shift();
    let actions = {
        Rate(plants,plant,rating){
            rating = Number(rating);
            plants[plant].rating+=rating;
        },
        Update(plants,plant,newRarity){
            plants[plant].rarity= newRarity;
        },
        Reset(plants,plant){
            delete plants[plant].rating
        }
    }
    let plants ={};
    let line;
    let count=0;
    while((line= input.shift())!='Exhibition'){
        while(count!=n){
            count++;
            let[plant, rarity]= line.split('<->');
            rarity= Number(rarity);
            if (!plants.hasOwnProperty(plant)){
                plants[plant]={
                    rarity: 0,
                    rating:0
                }
            }
            plants[plant].rarity= rarity;
           // plants[plant].rating=rating;
        }
        let r= line.split(': ');
        let g = r[1].split(' - ');
        let actionName = r[0];
        let plant = g[0];
        let par = g[1];
        let action = actions[actionName];
        action(plants,plant,par);
}
    let sorted =Object.entries(plants).sort(compare);
console.log(sorted)
    function compare([a1,b1],[a2,b2]){
        return b2.rarity - b1.rarity && b2.rating-b1.rating;
    }
}
solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ]);
