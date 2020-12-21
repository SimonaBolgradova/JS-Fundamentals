function solve (name, age, grade){
    let name1 = (name);
    let age1 = parseInt(age);
    let grade1 = parseFloat(grade);
   
    console.log(`Name: ${name1}, Age: ${age1}, Grade: ${grade1.toFixed(2)}`)
}

solve("john", 14, 5.50);
