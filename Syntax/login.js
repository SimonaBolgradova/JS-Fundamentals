function solve(arr) {
    let username = arr.shift();
    let pass = username.split('').reverse().join('');
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arr[i]===pass){
        console.log(`User ${username} logged in.`)
    }else{
        if (i==3){
            console.log(`User ${username} blocked!`)
            break;
        }
        console.log('Incorrect password. Try again.')
    }
    
}
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);
