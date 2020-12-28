function distinct(array){

for (let i = 0; i < array.length; i++) {
    if (array.includes(array[i])){
        array.splice(i,1)
    }
    }
console.log(array.join(' '));
}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
