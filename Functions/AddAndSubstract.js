function addAndSubtract( first, second, thirt){
   function sum (a,b){
       return a+b;
   } 
   let result = sum(first, second);
   return result  - thirt;

}
let final = addAndSubtract(2,3,1);
console.log(final);
