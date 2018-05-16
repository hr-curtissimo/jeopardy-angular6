class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get description() {
    return `${this.name} is ${this.age} years old.`;
  }

  growOlder() {
    this.age += 1;
  }
}

const person = new Person('Chris', 29);
console.log(person.description);
person.description = "This should not work.";
console.log(person.description);
