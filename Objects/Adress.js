function solve(input) {
    let catalog = {};
    for (const line of input) {
        let [name, place] = line.split(':');
        catalog[name] = place;
    }
    let sorted = Object.entries(catalog);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, place] of sorted) {
        console.log(`${name} -> ${place}`)
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
