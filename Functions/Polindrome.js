function polindrome(arr){
for (const el of arr) {
    let splited = String(el).split('')
    if (splited.length==3 && splited[0]===splited[2]){
        console.log('true')
    }else if(splited.length==1){
        console.log('true')
    }
    else{
        console.log('false')
    }
}

}
polindrome([32,
    2,
    232,
    1010]);
