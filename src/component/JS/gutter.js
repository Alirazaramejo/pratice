class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter for fullName
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    // Setter for fullName
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter for firstName
    get firstName() {
        return this._firstName;
    }

    // Setter for firstName
    set firstName(name) {
        if (name.length < 2) {
            console.error('First name is too short');
        } else {
            this._firstName = name;
        }
    }

    // Getter for lastName
    get lastName() {
        return this._lastName;
    }

    // Setter for lastName
    set lastName(name) {
        if (name.length < 2) {
            console.error('Last name is too short');
        } else {
            this._lastName = name;
        }
    }
}

const person = new Person('John', 'Doe');

// Using getter
console.log(person.fullName); // Output: John Doe

// Using setter
person.fullName = 'Jane Smith';
console.log(person.fullName); // Output: Jane Smith

// Using getter for first name and last name
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith

// Using setter with validation
person.firstName = 'J'; // Output: First name is too short
console.log(person.firstName); // Output: Jane

person.lastName = 'S'; // Output: Last name is too short
console.log(person.lastName); // Output: Smith
