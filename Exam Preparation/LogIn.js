function solve(input){
let n = input.shift();
n = Number(n);
let count = 0;
for (let i = 0;i<n;i++){
let line = input.shift();
let pattern = /(U\$)[A-Z][a-z]{2,}\1(P@\$)[A-Za-z]{5,}[0-9]+\2/g;
let match = line.match(pattern);
if (match){
    count++;
console.log('Registration was successful');
let patUser= /(U\$)[A-Z][a-z]{2,}\1/g;
let user = match.toString().match(patUser);
let p = /[A-Z][a-z]{2,}/g
let User = user.toString().match(p);
let patPass =/(P@\$)[A-Za-z]{5,}[0-9]+\1/g;
let pass= match.toString().match(patPass);
let password = /[A-Za-z]{5,}[0-9]+/g;
let Password = pass.toString().match(password);
console.log(`Username: ${User}, Password: ${Password}`)
}
else{
    console.log('Invalid username or password')
}
}
console.log(`Successful registrations: ${count}`)
}
solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
  ])
