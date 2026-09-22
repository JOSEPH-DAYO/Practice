//Classes

class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }

  makeSound() {
    return `${this.name} makes a sound`
  }

  getInfo() {
    return `${this.name} is ${this.age} years old, ${this.color}, and has ${this.legs} legs.`
  }
}

class Dog extends Animal {
  makeSound() {
    return `${this.name} says Woof!`
  }
}

class Cat extends Animal {
  makeSound() {
    return `${this.name} says Meow!`
  }
}

const dog = new Dog('Buddy', 3, 'brown', 4)
const cat = new Cat('Kitty', 2, 'white', 4)

console.log(dog.getInfo())
console.log(dog.makeSound())

console.log(cat.getInfo())
console.log(cat.makeSound())