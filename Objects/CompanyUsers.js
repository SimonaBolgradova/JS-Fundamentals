function solve(input) {
    let employeeList = {};
    for (const line of input) {
        let [company, ID] = line.split(' -> ');
        if (!employeeList.hasOwnProperty(company)) {
           employeeList[company] = [ID];
        } else {
            employeeList[company].push(ID)
        }
    }
    let sorted = Object.keys(employeeList)
        .sort((a, b) => a.localeCompare(b));
    for (const key of sorted) {
        let clear = new Set(employeeList[key]);
        console.log(`${key}`);
        Array.from(clear)
            .forEach(el => {
                console.log(`-- ${el}`);
            })
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])
