function solve( input){
let pattern = /\b(?<day>\d{2})([.-\/])(?<month>[A-Za-z]{2})\2(?<year>\d{4})\b/g;

let regex = pattern.exec(input);
while(regex!= null){
    let day = regex.groups(['day']);
    let mont = regex.groups(['month']);
    let year = regex.groups(['year']);
    console.log(`Day: ${day}, Month: ${mont}, Year: ${year}`);
    regex = pattern.exec(input);
}
}
solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")
