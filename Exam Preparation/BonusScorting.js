function solve (input){
    input = input.map(Number);
let countStudents = input.shift();
let countLectures = input.shift();
let bonus = input.shift();

let max = Math.max(...input);

    let totalBonus = max /countLectures*(5+bonus);

console.log(`Max Bonus: ${Math.ceil(totalBonus)}.
The student has attended ${max} lectures.`)
}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )
