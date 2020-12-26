function solve(nums, commands) {
    nums.map(Number);
    for (const line of commands) {
        let token = line.split(' ');
        let name = token.shift();
        token.map(Number);
        if (name == 'add') {
            nums.splice(token[0], 0, Number(token[1]));
        } else if (name == 'addMany') {
            let g = token.shift();
            let count = Number(g);
            for (let i = 0; i < token.length; i++) {
                const element = token[i];
                count++;
                nums.splice(count, 1, Number(element));
            }
        } else if (name == 'contains') {
            if (nums.includes(Number(token[0]))) {
                console.log(nums.indexOf(Number(token[0])));
            } else if (!nums.includes(token[0])) {
                console.log(-1);
            }
        } else if (name == 'remove') {
            nums.splice(token[0], 1)
        } else if (name == "shift") {
            let ind = nums.indexOf(Number(token[0]));
            let w = nums.splice(ind, 1);
            nums.push(Number(w));
        } else if (name == 'sumPairs') {
            let p = [];
            
            let sum = 0;
            for (let i = 0; i < nums.length; i++) {
                if (nums.length %2==1 && i==nums.length-1){
                    sum = nums[i];
                   p.push(sum);
                }else{
                    sum = nums[i]+nums[i+1];
                    p.push(sum);
                    i++;

                }
                console.log(p);
                    
            }
        } else if (name == 'print') {
            console.log(nums);
        }

    }
}

solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'sumPairs', 'print']
    );
