function solve(input){
    let heroes=[];
    for (let line of input){
        let [hero, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ').sort((a,b)=> a.localeCompare(b)).join(', ');

        let heroObj ={
            Hero: hero,
            level,
            items
        }
        heroes.push(heroObj);
    }
heroes
.sort ((a,b) => a.level - b.level)
.forEach(x =>{
    console.log(`Hero: ${x.Hero}`);
    console.log(`level => ${x.level}`);
    console.log(`items => ${x.items}`);
})
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )
