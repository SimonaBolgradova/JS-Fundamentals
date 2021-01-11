function solve(input){
let obj ={};

for( let element of input){
    if (!obj.hasOwnProperty(element)){
        obj[element] = 1;
    }else{
        obj[element]++;
    }
}
const sortable = Object.fromEntries(
    Object.entries(obj).sort(([,a],[,b]) => b-a)
);

for (const key in sortable) {
  console.log(`${key} -> ${sortable[key]} times`)
        
    
}

}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
