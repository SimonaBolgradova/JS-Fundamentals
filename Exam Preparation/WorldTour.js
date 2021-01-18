function solve(input){
    let text = input.shift();
let actions ={
    Add (text,index,string){
        index = Number(index);
        if (index<=text.length-1&&index>=0){
            let first = text.substring(0,index);
            let second = text.substring(index);
            text = first+string+second;
        }
        console.log(text);
        return text;
    },
    Remove (text,start_index,end_index){
        start_index=Number(start_index);
        end_index= Number(end_index);
        if(start_index<=text.length-1&&start_index>=0&&end_index<=text.length-1&&end_index>=0){
            let first = text.substring(0,start_index);
            let second = text.substring(start_index,end_index+1);
            let trird = text.substring(end_index+1);
            text = first+trird;
        }
        console.log(text);
        return text;
    },
    Switch(text, old, newS){
        if (text.includes(old)){
            while(text.includes(old)){
                text = text.replace(old,newS);
                console.log(text)
            }
        }else{
        console.log(text);
        }
        return text;
    }

}
let line ;
while((line=input.shift())!=="Travel"){
    let [actionName,...params]= line.split(':');
    let actionN= actionName.split(' ');
    let action = actions[actionN[0]];
    text = action(text,...params);
}
console.log(`Ready for world tour! Planned stops: ${text}`)
}
solve([
    'Hawai::Cyprys-GreeceHawai',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ])
