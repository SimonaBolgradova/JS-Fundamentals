function solve(input) {
    let energy = input.shift();

    let command = input.shift();
    let battles = 0;
    while (command !== 'End of battle' && energy > 0) {

        energy -= command;
        battles++;
        if (battles % 3 == 0) {
            energy += battles;

        }
        command = input.shift();
    }
    if (energy > 0) {
        console.log(`Won battles: ${battles}. Energy left: ${energy}`)
    } else {
        console.log(`Not enough energy! Game ends with ${battles} won battles and ${energy} energy`)

    }
}

solve([100,
    10,
    10,
    10,
    1,
    2,
    3,
    73,
    10,
])

solve([200,
    54,
    14,
    28,
    13,
    'End of battle'
])
