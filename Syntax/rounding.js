function solve (number, precision){
    
    
    if (precision>=15){
        precision = 15;
    }
    number = parseFloat(number.toFixed(precision));
    console.log(number)
    
}
solve(10.5,3);
