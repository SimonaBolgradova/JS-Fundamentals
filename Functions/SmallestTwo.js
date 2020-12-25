function smallest(input){
    let sorted = input.sort((a,b)=>a-b);
    let sliced= sorted.slice(0,2);
    console.log(sliced.join(' '));
}
smallest([30, 15, 50, 5]);
