function solve(input){
let str= input.shift();
let actions = {
    Translate (str, char, replacement){
        while(str.includes(char)){
            str = str.replace(char, replacement)
        }
        console.log(str);
        return str;
    },
    Includes (str, include){
        if (str.includes(include)){
            console.log('True');
        }else{
            console.log('False');
        }
        return str;
    },
    Start(str, string){
        string = string.toString();
        let start = str.substring(0,string.length);
        if (start==string){
            console.log('True');
        }else{
            console.log('False');
        }
        return str;
    },
    Lowercase(str){
        str = str.toLocaleLowerCase();
        console.log(str);
        return str;
    },
    FindIndex(str,char){
        for (i= str.length;i>=0;i--){
            if (str[i]==char){
                console.log(i);
                break;
            }
        }
        return str;
    },
    Remove(str, start, count){
        count = Number(count);
        let first = str.substring(0,start);
        let second = str.substring(start, start+count);
        let third = str.substring(start+count);
        let result = first+third;
        console.log(result);
        return result;
    }
};
let line;
while((line= input.shift())!=='End'){
    let [actionName,...params]= line.split(' ');
    if (actionName =='Start'){
      let string = line.split('Start ')
      let  action = actions[actionName];
      str = action(str,string[1]);
    

}
    else{
    let  action = actions[actionName];
    str = action(str,...params);
    }
}
}
solve([
    '// Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start // This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
  ])
