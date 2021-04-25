/**
 * 1.访问器装饰器
 *
 * - 访问器装饰器声明在一个访问器的声明之前(紧靠着访问器声明)
 * - 访问器装饰器应用于访问器的属性描述符并且可以用来监听、修改或替换一个访问器的定义
 * - 访问器装饰器表达式会在运行时当作函数被调用，传入下列三个参数:
 *  - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 *  - 成员的名字
 *  - 成员的属性描述符
 *
 * - 注意:
 * TypeScript不允许同时装饰一个成员的get和set访问器
 * 取而代之的是，一个成员的所有装饰器必须应用在文档顺序的第一个访问器上
 *
 *
 */

// target 对于静态方法而言就是当前的类 对于实例方法而言就是当前的实例
// proertyKey: 被绑定方法的名字
// desriptor 被绑定方法的属性描述符


// function test(target: any, proertyKey: string, desriptor: PropertyDescriptor) {
//     // console.log(target);
//     // console.log(proertyKey);
//     // console.log(desriptor);
//     // console.log(desriptor);

//     desriptor.set = function (value: string) {
//         target.name = value
//     }
//     desriptor.get = () => {
//         // return  desriptor.value + 'aaaaaaaaa'
//         return target.name + '***************'
//     }

// }


// class Person {
//     private name: string

//     constructor(name: string) {
//         this.name = name;
//     }

//     // @test
//     public get _name(): string {
//         return this.name
//     }
//     public set _name(v: string) {
//         this.name = v;
//     }
// }


// let zs = new Person('zs');


// // zs._name = 'aaaaa';
// console.log(zs._name)

