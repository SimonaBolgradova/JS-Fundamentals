function solve(input){
    let sorted = input.sort((a,b)=>a.localeCompare(b));
    for (let i = 0; i < sorted.length; i++) {
        const element = sorted[i];
        console.log(`${i+1}.${element}`);
    }
}
solve(["Potatoes", "Tomatoes", "Onions", "Apples"])
