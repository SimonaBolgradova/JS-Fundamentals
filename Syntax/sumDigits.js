function solve (num){
    let numAsstring = num.toString();
    let sum = 0;
    for (let i=0; i<numAsstring.length; i ++ ){
        sum+=Number (numAsstring[i]);
    }
    console.log(sum);

}
solve (245678);
