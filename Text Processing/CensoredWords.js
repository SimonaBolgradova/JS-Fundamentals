function solve(str,word){
   
   console.log(str.split(word).join('*'.repeat(word.length)))
}
solve(
    "A small sentence with some words", "small"
)
