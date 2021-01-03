function sorting(array){
    let smallest = array.sort((a,b) => a-b);

    let biggest = array.sort((a,b) => b-a);
    
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i%2==1){
        
        newArray.push(smallest[i])
        }else {
            if(i%2==0){
                newArray.push(biggest[i])
                
            }
        }
    }
    console.log(newArray.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
