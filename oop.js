//***encapsultaion in js

class Car {
  constructor(maker, model, engine) {
    this.maker = maker;
    this.model = model;
    this.engine = engine;
  }
  addName(name) {
    this.name = name;
  }
  printDetails(num) {
    console.log(
      `Car:${num} Details ==>  Name:${this.name},Model:${this.model},Maker:${this.maker},Engine:${this.engine}`
    );
  }
}

const car1 = new Car("ABC", "m1", "e123");
car1.name = "AYYF";
const car2 = new Car("ABCDEF", "m2", "e1245");
car2.name = "EER";
car1.printDetails(1);
car2.printDetails(2);

//***inheritance in js oop

class person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getDetails() {
    return `Name:${this.name},Address:${this.address}`;
  }
}
class student extends person {
  constructor(name, address, id) {
    super(name, address);
    this.id = id;
  }
  getDetails() {
    return `${super.getDetails()},id:${this.id}`;
  }
}

const student1 = new student("Arif", "Chittagong", 29);
console.log(student1.getDetails());

//***polymorphism in js

class class1 {
  func() {
    console.log("from class 1");
  }
}
class class2 extends class1 {
  func() {
    console.log("from class 2");
  }
}
class class3 extends class2 {
  func() {
    console.log("from class 3");
  }
}
const ob1 = new class1();
const ob2 = new class2();
const ob3 = new class3();
ob1.func();
ob2.func();
ob3.func();

//***abstraction in js

function person(firstname, lastname) {
  let fname = firstname;
  let lname = lastname;
  let getDetails_noAccess = function () {
    return `Firstname:${fname},Lastname:${lname}`;
  };
  this.getdetails_withAccess = function () {
    return `Firstname:${fname},Lastname:${lname}`;
  };
}

const person1 = new person("Mahbubul", "Hasan");
console.log(person1.fname);
console.log(person1.getDetails_noAccess);
console.log(person1.getdetails_withAccess());
