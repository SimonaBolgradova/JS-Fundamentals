function SortAnArrayBy2Criteria(array) {

    let sorted = array.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < sorted.length; i++) {
        for (let j = 1; j < sorted.length; j++) {
            if (sorted[i].length > sorted[j].length) {
               
                let b = sorted.splice(j,1);
                sorted.unshift(b);
            }
        }
        return sorted.join('\n');
    }
}

console.log(SortAnArrayBy2Criteria(["alpha", "beta", "gamma"]));
console.log(SortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]));
