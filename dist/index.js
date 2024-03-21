"use strict";
class Logger {
    constructor(fileName) {
        this.fileName = fileName;
    }
    get file() {
        return this.fileName;
    }
    log(message) {
        console.log(`Writing message "${message}" to file ${this.fileName}`);
    }
}
let logger = new Logger("app.log");
logger.log("This is a log entry");
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getElevation() {
        return `The employee ${this.fullName} earns this ${this.salary} yearly`;
    }
}
let emp = new Employee("John", "Doe", 300000);
console.log(emp.getElevation());
console.log(emp);
let employee = {
    name: "John Smith",
    earnings: 50000,
    address: {
        street: "Flinders st",
        city: "Melbourne",
        zipCode: 3144,
    },
};
class keyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new keyValuePair("1", "Apple");
console.log(`Key Value Pair is ${pair.key}:${pair.value}`);
let pair2 = new keyValuePair(1, "Apple");
console.log(`Key Value Pair is ${pair2.key}:${pair2.value}`);
pair2.key.toLocaleString();
function getEarnings(emp) {
    return emp.earnings;
}
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers = ArrayUtils.wrapInArray(8);
console.log(numbers[0]);
//# sourceMappingURL=index.js.map