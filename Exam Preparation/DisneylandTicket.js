function solve(input){
    input = input.map(Number);
    let neededMoney = input.shift();
    let months = input.shift();
    let money =0;
    for (let i =1; i<=months; i++){
        if (i>1 && i%2==1){
            money-= money*0.16;
        }else if ( i%4 ==0){
            money+=money*0.25;
        }
        money+=neededMoney*0.25;
    }
    if (money>neededMoney){
        let h = money-neededMoney;
        console.log(`Bravo! You can go to Disneyland and you will have ${h.toFixed(2)}lv. for souvenirs.`)
    }else{
        let b = neededMoney-money;
        console.log(`Sorry. You need ${b.toFixed(2)}lv. more.`)
    }
}
solve((["3265",
"3"])
)
