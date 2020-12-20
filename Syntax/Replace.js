function solve (pattern, letter , word){
    let result = pattern.replace("_", letter);
    let hasMatch = result == word;
     if (hasMatch){
         console.log('Matched')
     }else {
         console.log('Not Matched')
     }
}
