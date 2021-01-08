function solve( input){
    /*for (let key of Object.values(input)){
        
        let lngth = key.length;
        console.log(`Name: ${key} -- Personal Number: ${lngth}`)
    }
    */
   let employee ={};
   for (const line of input) {
       employee[line] = line.length;
       
   }
   Object.entries(employee).forEach(element => {
       console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`)
   });
   
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
