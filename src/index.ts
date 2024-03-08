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

class Account {
    readonly id: number;
    owner: string;
    balance: number;
    nickname?: string | null;

    constructor(id: number, owner: string, balance: number, nickname?: string | null) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
    }

    deposit(amount: number) {
        if (amount <= 0)
        throw new Error('Invalid amount');
        this.balance += amount;
    }
        
}

let account = new Account(1, "Cyril", 200, null);
account.deposit(500);
console.log(account);


class Person {
    constructor(public firstName: string, public lastName: string) {
    }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  // add another method called walk()
  walk() {
    console.log('Walking')
  }
}

class Student extends Person {
    // the student class can have it own property that's is not present in the parent class
    constructor(public studentId: number, firstName: string, lastName: string) {
    // since the student class is extending the parent, typescript will prompt us to use the super() method 
      super(firstName, lastName)
    }
    // we can also add another method to the student class that's not present in the parent
    takeTest() {
      console.log('Taking a test');
    }
}

class Teacher extends Person {
    // the student class can have it own property that's is not present in the parent class
    constructor(public teacherId: number, firstName: string, lastName: string, public qualification: string) {
    // since the student class is extending the parent, typescript will prompt us to use the super() method 
      super(firstName, lastName)
    }
    // we can also add another method to the student class that's not present in the parent
    giveTest() {
      console.log('Giving a test');
    }

    get teacherQualify() {
        return this.firstName + ' ' + this.lastName + ' ' + this.qualification
    }
}

let student = new Student(1, 'Cyril', 'Okeleke');
let teacher = new Teacher(10, 'Felix', 'Okeleke', 'BSC');
student.takeTest();
console.log(student);

class Ride {
    private static _activeRides: number = 5;

    start() { Ride._activeRides++};
    stop() { Ride._activeRides--};

    get ride() {
        return Ride._activeRides
    }
}

let ride1 = new Ride()
ride1.start();

let ride2 = new Ride()
ride2.stop();

let ride3 = new Ride()
ride3.stop();

let ride4 = new Ride()
ride4.start();

let ride5 = new Ride()
ride5.start();

let ride6 = new Ride()
ride6.start();

let ride7 = new Ride()
ride7.start();

console.log(ride1.ride);

