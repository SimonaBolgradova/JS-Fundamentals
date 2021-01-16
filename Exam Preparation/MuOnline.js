function solve(input) {
    let health = 100;
    let bitcoins = 0;
    let room1 = 0;
    let arr = input.toString().split('|');
    let isalive =true;
    
    for (const room of arr) {
        let [command, number] = room.split(' ');
        number = Number(number);
        switch (command) {
            case 'potion':
                if (health + number >= 100) {
                    let h = 100 - health;
                    health+=h;
                    room1++
                    console.log(`You healed for ${h} hp.`);
                    console.log(`Current health: ${health} hp.`)
                } else {
                    room1++
                    health+=number;
                    console.log(`You healed for ${number} hp.`);
                    console.log(`Current health: ${health} hp.`)
                }
                break;
            case 'chest':
                room1++
                bitcoins+=number
                console.log(`You found ${number} bitcoins.`)
                break;
                default:
                if(health - number<=0){
                    isalive =false;
                    room1++
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${room1}`);
                    
                    break;
                }else{
                    console.log(`You slayed ${command}.`);
                    health-=number;
                    room1++
                }
                break;


        }

    }

    if(isalive){
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${health}`)
    }
}
solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])
