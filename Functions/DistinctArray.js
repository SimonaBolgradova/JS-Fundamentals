function DistinctArray( array){
    let isRepeat = array.filter(x=>  x==x);
    if(isRepeat== true){
        console.log(isRepeat)
    }else{
        console.log(array.join(' '))
    }
}
    DistinctArray([1, 2, 3, 3, 4])
