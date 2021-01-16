function solve(input){
    let str = input.shift();
    let actions={
       TakeOdd (str){
            let newRawPass =[];
            for (let i = 0; i < str.length; i++) {
                if (i%2==1){
                    newRawPass.push(str[i]);
                }
                
            }
            let result = newRawPass.join('')
            console.log(result);
            return result;
        },
        Cut (str, index, length){
            [index,length]= [Number(index),Number(length)];
            let substring = str.slice(index,index+length);
            let indexOf = str.indexOf(substring);
            let first = str.substring(0,indexOf);
            let second = str.substring(indexOf,indexOf+substring.length);
            let third = str.substring(indexOf+substring.length);
    
            let result = first+third;
            console.log(result);
            return result;
        },
         Substitute (str, substring, substitute){
            if (str.includes(substring)){
                while(str.includes(substring)){
                    str = str.replace(substring, substitute);
                    }
                console.log(str);
            }else{
                console.log("Nothing to replace!")
            }
            
            return str;
        }
    };
    let line;
 while ((line = input.shift())!='Done'){
     let [actionName, ...params] = line.split(' ');
     let action = actions[actionName];
     str = action (str,...params);
 }
 console.log(`Your password is: ${str}`);
  
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]);
  solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ])
