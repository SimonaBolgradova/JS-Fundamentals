function cat( catsAsStrings){
    class cats{
        constructor(name, age){
            this.name = name;
            this.age= age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let catsAsString of catsAsStrings){
        let [catName, catAge] = catsAsString.split(' ');
        let Cat = new cats(catName, catAge);
        Cat.meow();
    }
    
}
cat(['Mellow 2', 'Tom 5'])
