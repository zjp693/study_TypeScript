/**
 * 1.属性装饰器
 * - 属性装饰器写在一个属性声明之前(紧靠着属性声明)
 * - 属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数:
 *  + 对于静态属性来说就是当前的类，对于实例属性来说就是当前的实例对象
 *  + 成员的名字
 *
 */

// function test(target: any, propertyName: string) {
//     console.log(target, propertyName);
//     target.name = "aaaas"
// }

// class Person {
//     // @test
//     name: string
//     static age: number

//     constructor() {
//         this.name = "zs"
//     }

//     static sayHi() {
//         console.log(1111);
//     }

//     sayHello() {
//         console.log(222);
//     }
// }
// // 静态方法 只有类能调用
// // 非静态方法  只有实例能调用

// console.log(Person);
// let zs = new Person
// console.log(zs);


