function solve(input) {
    let actions = {
        Plunder(towns, townName, pop, gold) {
            [pop, gold] = [Number(pop), Number(gold)];
            let town = towns[townName];
            town.pop -= pop;
            town.gold -= gold;
            console.log(`${townName} plundered! ${gold} gold stolen, ${pop} citizens killed.`);
            if (town.pop == 0 || town.gold == 0) {
                console.log(`${townName} has been wiped off the map!`);
                delete towns[townName];
            }
        },
        Prosper(towns, townName, gold) {
            gold = Number(gold);
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                let town = towns[townName];
                town.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${town.gold} gold.`)
            }
        }
    };
    let towns = {};
    let line;
    while ((line = input.shift()) != 'Sail') {
        let [townName, pop, gold] = line.split('||');
        if (!towns.hasOwnProperty(townName)) {
            towns[townName] = {pop: 0,gold: 0};
        }
        towns[townName].pop += Number(pop);
        towns[townName].gold += Number(gold);
    }
    while ((line = input.shift()) != 'End') {
        let tokens = line.split('=>');
        let actionName = tokens[0];
        let townName = tokens[1];
        let action = actions[actionName];
        action(towns, townName, tokens[2], tokens[3]);
    }
    let sorted = Object.entries(towns).sort(compareTowns);
    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`)
        for (const town of sorted) {
            console.log(`${town[0]} -> Population: ${town[1].pop} citizens, Gold: ${town[1].gold} kg`)
        }
        console.log()
    } else if(sorted.length>0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }

    function compareTowns([nameA, townA], [nameB, townB]) {
        return townB.gold - townA.gold || nameA.localeCompare(nameB);
    }
}
solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
])
