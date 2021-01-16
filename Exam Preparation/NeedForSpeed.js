function solve(input) {
    let numberOfCars = input.shift();
    let actions = {
        Drive(cars, car, distance, fuel) {
            [distance, fuel] = [Number(distance), Number(fuel)]
            let carParameters = cars[car];
            if (carParameters.fuel < fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else if (carParameters.fuel >= fuel) {
                carParameters.mileage += distance;
                carParameters.fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (carParameters.mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }
        },
        Refuel(cars, car, fuel) {
            fuel = Number(fuel);
            let carParameters = cars[car];
            if (carParameters.fuel + fuel >= 75) {
                let h = 75 - carParameters.fuel;
                carParameters.fuel += h;
                console.log(`${car} refueled with ${h} liters`)
            } else {
                carParameters.fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`)
            };
        },
        Revert(cars, car, kilometers) {
            kilometers = Number(kilometers);
            let carParameters = cars[car];
            let isLessThan = carParameters.mileage - kilometers;
            carParameters.mileage -= kilometers;
            if (isLessThan < 10000) {
                carParameters.mileage = 10000;
            } else if (isLessThan >= 10000) {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    };
    let cars = {};
    let line;
    /* while (!(line = input.shift()).includes(':')) {
         let [car, mileage, fuel] = line.split('|');
         [mileage, fuel] = [Number(mileage), Number(fuel)]
         if (!cars.hasOwnProperty(car)) {
             cars[car] = {
                 mileage: 0,
                 fuel: 0
             };
         }
         cars[car].mileage += mileage;
         cars[car].fuel += fuel;
     }*/
    while ((line = input.shift()) != "Stop") {
        let count = line.split(' : ' && '|');
        if (count.length == 3) {
            let [car, mileage, fuel] = count;
            [mileage, fuel] = [Number(mileage), Number(fuel)]
            if (!cars.hasOwnProperty(car)) {
                cars[car] = {
                    mileage: 0,
                    fuel: 0
                };
            }
            cars[car].mileage += mileage;
            cars[car].fuel += fuel;
        } else {
            let [actionName, car, ...params] = line.split(' : ');
            let action = actions[actionName];
            action(cars, car, ...params);
        }
    }
    let sorted = Object.entries(cars).sort(compare);
    sorted.forEach(element => {
        console.log(`${element[0]} -> Mileage: ${element[1].mileage} kms, Fuel in the tank: ${element[1].fuel} lt.`)
    })

    function compare([nameA, mileageA], [nameB, mileageB]) {
        return mileageB.mileage - mileageA.mileage || nameA.localeCompare(nameB);
    }
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])
