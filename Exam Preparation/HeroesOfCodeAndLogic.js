function solve(input) {
    let n = input.shift();
    let actions = {
        CastSpell(heroes, heroName, MPNeeded, spellName) {
            MPNeeded = Number(MPNeeded);
            let heroParams = heroes[heroName];
            if (heroParams.MP >= MPNeeded) {
                heroParams.MP -= MPNeeded
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroParams.MP} MP!`)
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
            }
        },
        TakeDamage(heroes, heroName, damage, attacker) {
            let heroParams = heroes[heroName];
            damage = Number(damage);
            heroParams.HP -= damage;
            if (heroParams.HP <= 0) {
                console.log(`${heroName} has been killed by ${attacker}!`)
                delete heroes[heroName];
            } else {

                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroParams.HP} HP left!`)
            }
        },
        Recharge(heroes, heroName, amount) {
            amount = Number(amount);
            let heroParams = heroes[heroName];
            if (heroParams.MP + amount >= 200) {
                let leftIntheTank = 200 - heroParams.MP;
                heroParams.MP += leftIntheTank;
                console.log(`${heroName} recharged for ${leftIntheTank} MP!`)
            } else {
                heroParams.MP += amount;
                console.log(`${heroName} recharged for ${amount} MP!`)
            }
        },
        Heal(heroes, heroName, amount) {
            amount = Number(amount);
            let heroParams = heroes[heroName];
            if (heroParams.HP + amount >= 100) {
                let leftIntheTank = 100 - heroParams.HP;
                heroParams.HP += leftIntheTank;
                console.log(`${heroName} healed for ${leftIntheTank} HP!`)
            } else {
                heroParams.HP += amount;
                console.log(`${heroName} healed for ${amount} HP!`)
            }
        }
    };


    let heroes = {}
    let line;
    let count = 0;
    while ((line = input.shift()) != "End") {

        while (count != n) {
            count++;
            let [heroName, HP, MP] = line.split(' ');
            [HP, MP] = [Number(HP), Number(MP)];
            if (!heroes.hasOwnProperty(heroName)) {
                heroes[heroName] = {
                    HP: 0,
                    MP: 0
                };
            }
            heroes[heroName].HP += HP;
            heroes[heroName].MP += MP;
            line = input.shift();
        }
        let [actionName, heroName, ...params] = line.split(' - ');
        let action = actions[actionName];
        action(heroes, heroName, ...params);
    }
    let sorted = Object.entries(heroes).sort(compare);

    sorted.forEach(element => {
        console.log(element[0])
        console.log(`  HP: ${element[1].HP}`);
        console.log(`  MP: ${element[1].MP}`);
    })

    function compare([nameA, hpA], [nameB, hpB]) {
        return hpB.HP - hpA.HP || nameA.localeCompare(nameB)
    }

}
solve
solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])
