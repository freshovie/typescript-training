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

let employee: {
    id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Cyril',
    retire: (date:Date) => {
        console.log(date)
    }
};
