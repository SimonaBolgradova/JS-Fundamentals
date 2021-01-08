function solve(input){
let colection = new Map();
for (let line of input){
    let splited = line.split(' ');
    let name = splited.shift();
    let grades = splited.map(Number);
    if (!colection.has(name)){
        colection.set(name, [])
    }
        let existing = colection.get(name);
        for (let grade of grades){
            existing.push(grade);
        }
    }
function compare([nameA, gradesA], [nameB,gradesB]){
    let averageA=0;
    gradesA.forEach(x => averageA +=x);
    averageA/=gradesA.length;

    let avgB =0;
    gradesB.forEach(x=> avgB+=x);
    avgB/=gradesB.length;

    return averageA - avgB;

}
let sorted = Array.from(colection);
sorted.sort(compare);

for (let [name, grades] of sorted){
    console.log(`${name}: ${grades.join(', ')}`)
}
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);
