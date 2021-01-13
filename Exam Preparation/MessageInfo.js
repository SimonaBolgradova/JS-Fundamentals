function solve (input){
let capacity= input.shift();
capacity = Number(capacity);
let users={};
let actions = {
    Add (users,name,sent,received){
        sent = Number(sent);
        received =Number(received);
        if(!users.hasOwnProperty(name)){
            users[name]={
                sent,
                received
            }
        }
        return users;
    },
    Message(users,sender,receiver){
        if(users[sender]&&users[receiver]){
            users[sender].sent +=1;
            users[receiver].received+=1;
            if(users[sender].sent+users[sender].received>capacity){
                console.log(`${sender} reached the capacity!`);
                delete users[sender];
            }else if (users[receiver].sent+users[receiver].received>capacity){
                console.log(`${receiver} reached the capacity!`)
                delete users[receiver];
            }
        }
        return users;
    },
    Empty(users,username){
        if (users[username]){
            delete users[username];
        }else if (username =='All'){
            Object.keys(users).forEach(key=>{
                delete users[key];
            })
        }
        return users;
    }
    
}

let line ;
while((line= input.shift())!='Statistics'){
    let [actionName,...params] =line.split('=');
    let action = actions[actionName];
    action(users,...params)
}
let sorted = Object.entries(users).sort(compare);
function compare ([nameA,paramsA],[nameB,paramsB]){
    return paramsB.received - paramsA.received || nameA.localeCompare(nameB);
}
let count =sorted.length;
sorted.forEach(element=>{
    
    if(element[1].sent+element[1].received>capacity){
        
        count-=1
    }
});

console.log(`Users count: ${count}`)

sorted.forEach(element=>{
    
    if(element[1].sent+element[1].received>capacity){
        element.pop();
        count-=1
    }else{
        
        console.log(`${element[0]} - ${element[1].sent+element[1].received}`)
    }
})
}

solve([
    '12',
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    
    'Add=Johny=4=4',
    'Add=Johny=4=4',
    'Add=Bonnie=3=50',
    'Statistics'
  ])
