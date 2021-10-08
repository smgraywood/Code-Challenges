let speak = " want a cracker!"

class Parrot {
  constructor(name){
    this.name = name;
  }
  speak(){
    return (this.name + speak)
  }
}
let polly = new Parrot("Polly");
polly.speak();
// returns "Polly want a cracker!"

let benStiller = new Parrot("Ben");
benStiller.speak();
// returns "Ben want a cracker!"

let anonymous = new Parrot("A nameless parrot");

console.log(polly.speak());
// prints "Polly want a cracker!"
console.log(benStiller.speak())
// prints "Ben want a cracker!"
console.log(anonymous.speak())
// prints "A nameless parrot want a cracker!"
