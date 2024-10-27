

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.adult = this.isLegal(); 
        
    }
    
    isLegal() {
        return this.age >= 20;
    }
}

const person1 = new Person("Viktor", 20);

person1.name = 21;

console.log(person1.adult);