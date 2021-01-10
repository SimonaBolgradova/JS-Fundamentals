function solve(input){

    for (let el of Object.values(input)){
        let splited = el.split(' ') ;
        
        
        let town =splited[0] ;
        let latitude = Number(splited[2]).toFixed(2);
        let longitude= Number(splited[4]).toFixed(2);
        
        let obj ={
            town: town ,
            latitude:latitude,
            longitude: longitude
        }
        
        console.log(obj);
        
    }
    
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
