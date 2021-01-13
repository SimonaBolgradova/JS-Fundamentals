function solve(input) {
    let command = input.shift();
    let price = 0;

    while (command !== "special" && command !== "regular") {

        if (Number(command) >= 0) {
            price += Number(command);
        } else {
            console.log("Invalid price!");
        }
        command = input.shift();
    }
    let taxes = price * 0.2;
    let totalPrice = price + taxes;
    if (command == 'special') {

        totalPrice = totalPrice - totalPrice * 0.1
    }
    if (totalPrice !== 0) {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${price.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$
`)
    }else{
        console.log('Invalid order!')
    }
}


solve([
        '1023',
        '15',
        '-20',
        '-5.50',
        '450',
        '20',
        '17.66',
        '19.30', 'regular'
    ]

);
