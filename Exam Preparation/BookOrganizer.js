function solve(input) {
    let shelf = input.shift().toString().split('&');
    let line;
    while ((line = input.shift()) !== 'Done') {
        let [command, book1, book2] = line.split(' | ');
        switch (command) {
            case 'Add Book':
                if (!shelf.includes(book1)){
                    shelf.unshift(book1);
                }
                break;
            case 'Take Book':
                if (shelf.includes(book1)){
                    let index = shelf.indexOf(book1);
                    shelf.splice(index,1);
                }
                break;
            case 'Swap Books':
                if (shelf.includes(book1&&book2)){
                    let index1 = shelf.indexOf(book1);
                    let index2 = shelf.indexOf(book2);
                    let temp = shelf[index1];
                    shelf[index1]= shelf[index2];
                    shelf[index2] = temp;
                   }
                break;
            case 'Insert Book':
                shelf.push(book1)
                break;
            case 'Check Book':
                let index = Number(book1);
                if (index>=0&&index<=shelf.length-1){
                    let book = shelf.slice(index,index+1);
                    console.log(book.toString());
                }
                break;
        }
    }
    console.log(shelf.join(', '))
}
solve(["Don Quixote&The Great Gatsby&Moby Dick&Hamlet",
    "Add Book | The Odyssey",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Check Book | 3",
    "Done"
])
