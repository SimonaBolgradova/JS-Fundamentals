function solve (input){

    let sum =0;
    let taxes = sum+ sum*0.2;
    let price = sum + taxes;
    for (let el of input){
        while (el !== "special"|| el !=="regular"){
            if(Number(el)>=0){
                sum+=Number(el);
            }else   {
                console.log("Invalid order!")
            }

        }
        if(el.includes("special")){
            price =  price - price*0.1;
            break;
        }else if (el.includes("regular")){
                break;
        }
    }
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${sum}$
    Taxes: ${taxes}
    -----------
    Total price: ${price}$
    `)
}
solve([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]
    )
