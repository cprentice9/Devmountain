class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
        this.isGoodDog = true
        this.dogYears = age * 7
    }

    greet(personToBeGreeted) {
        console.log(
            `Hi ${personToBeGreeted}, my name is ${this.name} and I am a ${this.age} year old ${this.breed}.`
        )
    }

    incrementAge() {
        console.log( `${this.name} just got one year older!! Party Time!!!`)
        
        this.age +=1
        this.dogYears = this.age * 7
    }
}

const basil = new Dog('Basil', 'Sheepadoodle', 2)
const nula = new Dog('Nula', 'Portuguese Water Dog', 4)

basil.greet('Connor')
nula.greet('Connor')

console.log(basil)
console.log(nula)

class Puppy extends Dog {
    constructor(name, breed, trainingLevel){
        super(name, breed, 0)

        this.trainingLevel = trainingLevel

    }

    levelUp(num){
        this.trainingLevel += num
    }
}

const lassie = new Puppy('Lassie', 'Golden Retriever', 10)

console.log(lassie)

lassie.levelUp(10)
lassie.levelUp(1)
lassie.levelUp(6)

console.log(lassie)




class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100