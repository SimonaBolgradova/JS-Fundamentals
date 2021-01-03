function solve (array){
    let sum= 0;
    for (let i = 0; i < array.length; i++) {
        let el= Number(array[i]);
        
        if (el%2==0){
            sum+=el;

        }
        
    }
    console.log(sum);

}
solve(['1','2','3','4','5','6']);
