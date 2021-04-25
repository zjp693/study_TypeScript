/*
1.方法装饰器
- 方法装饰器写在在一个方法的声明之前（紧靠着方法声明）。
- 方法装饰器可以用来监视，修改或者替换方法定义。

- 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
    + 对于静态方法而言就是当前的类, 对于实例方法而言就是当前的实例
    + 被绑定方法的名字。
    + 被绑定方法的属性描述符。
* */

// target 对于静态方法而言就是当前的类  对于实例方法而言就是当前的实例
// porertykey:被绑定方法的名字
// desriptor:被绑定方法的属性描述符


// function test(target: any, proertyKey: string, desriptor: PropertyDescriptor) {
//     console.log(target); // 类 class Person或者 实例 Person();
//     console.log(proertyKey) // sayHello
//     console.log(desriptor) // 
//     //  console.log(desriptor.value)
//     desriptor.value = function () {
//         console.log("我是来替换sayHello的方法")
//     }
// }
// class Person {
//     // @test
//     sayHello() {
//         console.log("你好 typescript")
//     }
//     static sayAge() {
//         console.log("我今年18岁了")
//     }
// }
// let zs = new Person();
// // console.log(zs);
// zs.sayHello();
