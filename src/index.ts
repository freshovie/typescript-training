// let sales = 123456789;
// let course: string = "Typescript";
// let is_published = true;

// function render(document: true) {
//     console.log(document)
// }

// let numbers: number[] = [1, 2, 3]
// numbers.forEach(n => n.toPrecision())
// console.log(numbers);

// const nameSpace: string[] = ['femi', 'jasmine', 'Philip']
// for (let name of nameSpace){
//     console.log(`${name}`)
// }

// let user: [number, string, boolean, number] = [1, 'cyril', true, 2 ]

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum  Size { Small = 3, Medium, Large };
// let mySize: Size = Size.Medium

// console.log(mySize);

// function getNumbers(): number[] {
//     return numbers;
// }

// class Course {
//     private _sales: number;
//     public title: string;
//     protected author: string;
//     private _isPublished: boolean;

//     constructor(title: string, author?: string) {
//         this.title = title;
//         if (author !== undefined) {
//             this.author = author;
//         } else {
//             this.author = 'Anonymous';
//         }
//         this._isPublished = false;
//     }

//     get sales() {
//         return this._sales;
//     }

//     set sales(value: number) {
//         if (typeof value === 'number') {
//             this._sales = value;
//         } else {
//             throw new Error('Sales must be a number');
//         }
//     }

//     @deprecated("Use `getNumberOfPages` instead")
//     get pageCount(): number {
//         console.warn('The "pageCount" property is deprecated. Use "getNumberOfPages()" method instead.');
//         return this.getNumberOfPages();
//     }

//     getNumberOfPages(): number {
//         // Logic to determine the number of pages in the course goes here...
//         return 0;
//     }
// }

// function calculateTax(income: number, taxYear: number): number {
//     if (income < 50_000)
//     return income * 1.2;
//     return income * 1.3
// }

// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022 )
//     return income * 1.2;
//     return income * 1.3
// }

// calculateTax( 10_000);

// let employee = { id: 1};
// employee.name = "cyril";

// let employee: {
//     id: number,
//     name: string,
//     isGold: boolean
// } = { id: 1, name: "", isGold: true};
// employee.name = "cyril";

// let employee: {
//     id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'Cyril',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// };

//type aliases
// let employee:
//     type Employee = {
//     id: 1,
//     name: 'Ovie',
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'Cyril',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// };

// class Account {
//   readonly id: number;
//   owner: string;
//   balance: number;
//   nickname?: string | null;

//   constructor(
//     id: number,
//     owner: string,
//     balance: number,
//     nickname?: string | null
//   ) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//     this.nickname = nickname;
//   }

//   deposit(amount: number) {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this.balance += amount;
//   }
// }

// let account = new Account(1, "Cyril", 200, null);
// account.deposit(500);
// console.log(account);

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   // add another method called walk()
//   walk() {
//     console.log("Walking");
//   }
// }

// class Student extends Person {
//   // the student class can have it own property that's is not present in the parent class
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     // since the student class is extending the parent, typescript will prompt us to use the super() method
//     super(firstName, lastName);
//   }
//   // we can also add another method to the student class that's not present in the parent
//   takeTest() {
//     console.log("Taking a test");
//   }
// }

// class Teacher extends Person {
//   // the student class can have it own property that's is not present in the parent class
//   constructor(
//     public teacherId: number,
//     firstName: string,
//     lastName: string,
//     public qualification: string
//   ) {
//     // since the student class is extending the parent, typescript will prompt us to use the super() method
//     super(firstName, lastName);
//   }
//   // we can also add another method to the student class that's not present in the parent
//   giveTest() {
//     console.log("Giving a test");
//   }

//   get teacherQualify() {
//     return this.firstName + " " + this.lastName + " " + this.qualification;
//   }
// }

// let student = new Student(1, "Cyril", "Okeleke");
// let teacher = new Teacher(10, "Felix", "Okeleke", "BSC");
// student.takeTest();
// console.log(student);

// class Person {
//     constructor(public firstName: string, public lastName: string) {
//     }

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
//   // add another method called walk()
//   protected walk() {
//     console.log('Walking')
//   }

//   protected balance() {
//     console.log('my balance')
//   }
// }

// creating student class extending Person
// class Student extends Person {
//     constructor(public studentId: number, firstName: string, lastName: string) {
//       super(firstName, lastName)
//     }
//     takeTest() {
//         this.balance()
//       console.log('Taking a test');
//     }
// }

// class Teacher extends Person {
//     constructor(public teacherId: number, firstName: string, lastName: string, public qualification: string) {
//       super(firstName, lastName)
//     }
//     giveTest() {
//       console.log('Giving a test');
//     }

//     get teacherQualify() {
//         return this.firstName + ' ' + this.lastName + ' ' + this.qualification
//     }
// }

// class Teacher extends Person {

//     override get fullName() {
//         return 'Professor' + ' ' + super.fullName;
//     }

//     giveTest() {
//         console.log('Giving a test');
//     }
// }

// class Principal extends Person {
//     override get fullName() {
//       return 'Principal' + ' ' + super.fullName;
//     }
// }

// function printNames(people: Person[]) {
//     for (let person of people)
//       console.log(person.fullName);
// }

// printNames([
//     new Student(1, 'Cyril', 'Okeleke'),
//     new Teacher('Ovie', 'Raji'),
//     new Principal('Evans', 'Chidi')
// ])

// let teacher = new Teacher('Cyril', 'Ovie');
// let student = new Student(1, 'John', 'Ovie');

// teacher.giveTest();

// console.log(teacher.fullName)
// console.log(student.fullName)

// console.log(Math.floor(Math.random() * 100));

// class Ride {
//   private static _activeRides: number = 5;

//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }

//   get ride() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.stop();

// let ride3 = new Ride();
// ride3.stop();

// let ride4 = new Ride();
// ride4.start();

// let ride5 = new Ride();
// ride5.start();

// let ride6 = new Ride();
// ride6.start();

// let ride7 = new Ride();
// ride7.start();

// console.log(ride1.ride);

// class SeatAssignment {
//   [seatNumber: string]: string;
// }
// let seats = new SeatAssignment();
// seats.seatNumber1 = "Cyril";
// seats.seatNumber2 = "John";
// console.log(seats);

// abstract class Shape {
//   constructor(public color: string) {}
//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }

//   override render(): void {
//     console.log("Rendering a circle");
//   }
// }

// let circle = new Circle(5, "red");
// circle.render();
// console.log(circle);

// class Ride {
//     static activeRides: number = 5;

//     start() { Ride.activeRides++};
//     stop() { Ride.activeRides--}
// }

// let ride1 = new Ride()
// ride1.stop();

// let ride2 = new Ride()
// ride2.stop();

// let ride3 = new Ride()
// ride3.stop();

// let ride4 = new Ride()
// ride4.start();

// let ride5 = new Ride()
// ride5.start();

// let ride6 = new Ride()
// ride6.start();

// let ride7 = new Ride()
// ride7.start();

// console.log(Ride.activeRides);

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//   }

// let johnDoe = new Person("John", "Doe")

// function greetPerson(person: Person) {
//     return `Hello ${person.firstName} ${person.lastName}`
// }

// console.log(greetPerson(johnDoe))

//Classwork 1
class Logger {
  constructor(public fileName: string) {}
  get file() {
    return this.fileName;
  }

  log(message: string): void {
    console.log(`Writing message "${message}" to file ${this.fileName}`);
  }
}

let logger = new Logger("app.log");
logger.log("This is a log entry");

//Classwork 2
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Classwork 3
class Employee extends Person {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getElevation() {
    return `The employee ${this.fullName} earns this ${this.salary} yearly`;
  }
}

let emp = new Employee("John", "Doe", 300_000);
console.log(emp.getElevation());
console.log(emp);

// let person = new Person('Ovie', 'Good');
// person.fullName
// console.log(person)

//Classwork 4

// private: only allows access to the class members from within the class.
// protected: allows access to the class member from itself and any classes that inherit it.

//Classwork 5

interface IEmployee {
  name: string;
  earnings: number;
  address: {
    street: string;
    city: string;
    zipCode: number;
  };
}

let employee = {
  name: "John Smith",
  earnings: 50_000,
  address: {
    street: "Flinders st",
    city: "Melbourne",
    zipCode: 3144,
  },
};

class keyValuePair<A> {
  constructor(public key: A, public value: string) {}
}

let pair = new keyValuePair<string>("1", "Apple");
console.log(`Key Value Pair is ${pair.key}:${pair.value}`);

let pair2 = new keyValuePair<number>(1, "Apple");
console.log(`Key Value Pair is ${pair2.key}:${pair2.value}`);

pair2.key.toLocaleString(); // error because type of `key` is  not `string`.

function getEarnings(emp: IEmployee): number {
  return emp.earnings;
}

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
// let utils = new ArrayUtils();
let numbers = ArrayUtils.wrapInArray(8);
console.log(numbers[0]);

