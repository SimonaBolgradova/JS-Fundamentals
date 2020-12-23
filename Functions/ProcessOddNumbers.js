function processOddNums (input){
   let filtered = input.filter(isOddIndex);
   

   let doubled =  filtered.map(x=> x*2);
    console.log(doubled.reverse().join());

    function isOddIndex (value, index){
        return (index%2)==1;
    }
}

processOddNums([7,8,9,5])
