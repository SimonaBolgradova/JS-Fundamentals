function loadingBar(n){
    function smallerThanHundred (n){
    let per = '';
    let fullStop = '';
    for (let i= 0 ; i<n/10;i++){
        per+='%';
        
        }
        for (let j =0 ; j<10-(n/10); j++){
            fullStop+='.';
    }
    return (`${n}% [${per}${fullStop}]\nStill loading...`);
    
}
function hundred (n){
    let per = '';
    let fullStop = '';
    for (let i= 0 ; i<n/10;i++){
        per+='%';
        
        }
        for (let j =0 ; j<10-(n/10); j++){
            fullStop+='.';
    }
    return (`${n}% Complete!\n[${per}]`);
    
}
if (n<100){
    console.log(smallerThanHundred(n));
}else {
    console.log(hundred(n));
}
}
loadingBar(100);
