function solve(input){
let destinations = {};

for(let line of input){
    let [country,town, price]= line.split(' > ');
    price= Number(price);

    if (!destinations.hasOwnProperty(country)){
        destinations[country]= {};
        destinations[country][town]=price;

    }else{
        let towns = destinations[country];
        if(!towns.hasOwnProperty(town)){
            towns[town]= price
        }else{
            let oldPrice = towns[town];
            if(oldPrice>price){
                towns[town]=price;
            }
        }
    }
}
let sorted = Object.entries(destinations).sort((a,b)=> a[0].localeCompare(b[0]));

for (let [name, towns] of sorted){
    let sotredTowns = Object.entries(towns).sort((a,b)=> a[1]-b[1]);
    let line = `${name} -> `;
    for (let [townName,townPrice]of sotredTowns){
        line+=`${townName} -> ${townPrice} `
    }
    console.log(line)
}

}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )
    
