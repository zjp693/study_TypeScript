//类的兼容性
// 1.只比较实例成员 ，不比较类的构造函数和静态成员
// class Person {
//     name: string
//     age: number
//     constructor() {
//         this.name = "zs";
//         this.age = 18;
//     }
// }

// class Teacher {
//     name: string
//     age: number
//     static address: string
//     constructor() {
//         this.name = "ww";
//         this.age = 23;
//     }
// }

// let person = new Person();
// let teach = new Teacher();

// let a: Person;
// let b: Teacher;

// 2.类的私有属性和受保护属性会影响兼容性

class Person {
    name: string
    age: number
    static family: string;
    constructor() {
        this.name = 'zs';
        this.age = 18;
    }
}


class Teacher {
    name: string
    age: number
    static address: string
    constructor() {
        this.name = 'ww';
        this.age = 23;
    }
}

let person = new Person();
let teach = new Teacher();


person = teach;
teach = person;