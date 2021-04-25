### 数据兼容性

####  1.typescript 会根据初始值进行自动类型推断

#### 2.数据类型兼容性

```
接口类型兼容性：   如果`x`要兼容`y`，那么`y`至少具有与`x`相同的属性。 只有目标类型的成员会被一一检查是否兼容。比较过程是递归进行的。是否兼容看被赋值者的属性与赋值者相比可多不可少
```

#### 2.2函数的兼容：

```
1.参数多的 可以 接受参数少的函数的赋值

2.参数少的 不可以 接受参数多的函数的赋值

3. 参数类型不同 不可以相互赋值

4.返回值类型必须一模一样，不一样类型 就不兼容
```

#### 3.枚举的兼容性

```
1.数字枚举和数值兼容

2.数字枚举和数字枚举不兼容

3.字符串枚举与字符串枚举不兼容
```



#### 4.泛型的兼容性

```
 1.泛型只影响使用的部分，不会影响声明的部分
```

#### 5.交叉类型和联合类型

```
1.交叉类型将多个类型*合并为一个类型*，相当于新类型具有这多个类型的所有特性，相当于是一种并的操作

2.联合类型用于限制传入的值的类型只能是 *|* 分隔的每个类型，如：`number | string | boolean` 表示一个值的类型只能是 number、string、boolean 中的一种。 此外，如果一个值是联合类型，那么我们只能访问它们中共有的部分（共有的属性与方法），即相当于一种*交*的关系，
```



#### 6.类型保护

```
1.如果使用typeof来实现类型保护, 那么只能使用 === / !==  不严格的: ==！=

如果使用typeof来实现类型保护, 那么只能保护 number/string/boolean/symbol类型

2.用它来明确一个联合类型变量的具体类型

3.type 可以声明基本类型别名，联合类型，元组等类型,interface不能

4.type不会自动合并
```

#### 7.字面量

```
1.什么是字面量?
字面量就是源代码中一个固定的值
例如数值字面量: 1,2,3,...
例如字符串字面量: 'a','abc',...
如果一眼能看到某个变量的值，或者某个值那么就是字面量

2.在TS中我们可以把字面量作为具体的类型来使用
当使用字面量作为具体类型时, 该类型的取值就必须是该字面量的值
```

#### 8.可辨识联合

可以合并字符串字面量类型、联合类型、类型保护和类型别名来创建可辨识联合的高级模式（也称为标签联合或者代数数据类型），具有3个要素：

1. 具有普通的字符串字面量属性——可辨识的特征
2. 一个类型别名，用来包含了那些类型的联合——联合
3. 此属性上的类型保护

创建一个可辨识联合类型，首先需要声明将要联合的接口，每个接口都要有一个可辨识的特征，如（kind属性）：

```typescript
interface Square {
  kind: 'square'
  size: number
}
 
interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}
 
interface Circle {
  kind: 'circle'
  radius: number
}
```

### 装饰器

#### 1.defineProperty

```typescript
Object.defineProperty(obj, prop, descriptor)
作用：可以用来精确添加或者修改对象的属性，只需要在descriptor对象中将属性特性描述清楚

1.数据描述符，他拥有四个属性配置
1.1 configurable:数据是否可删除，可配置
1.2 enumerable:属性是否可枚举
1.3 value:属性值，默认为nudefined 
1.4 writable:属性是否可读写


2.存取描述符，他同样拥有四个属性选项
2.1 configurable:数据是否可删除，可配置
2.2 enumerable:属性是否可枚举
2.3 get：一个属性提供getter 的方法，如果没有getter 则为 undefind 
2.4 set:一个给属性提供setter 的方法，如果没有setter 则为undefind

需要注意的是：数据描述符的value,writable 和 存储描述符中的get,set 属性不能同时存在否则会抛出异常.
 


let obj = { name: 'zs' }
let value;
Object.defineProperty(obj, 'age', {
     get() {
         console.log("获取值")
         console.log(1);

         return value;
     },
     set(v: string) {
         console.log("设置值")
         value = v;
    }
 })
 console.log(obj);
```

#### 2.方法的装饰器

```typescript
/*
1.方法装饰器
- 方法装饰器写在在一个方法的声明之前（紧靠着方法声明）。
- 方法装饰器可以用来监视，修改或者替换方法定义。

- 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
    + 对于静态方法而言就是当前的类, 对于实例方法而言就是当前的实例
    + 被绑定方法的名字。
    + 被绑定方法的属性描述符。
* 
*/

target 对于静态方法而言就是当前的类  对于实例方法而言就是当前的实例
porertykey:被绑定方法的名字
desriptor:被绑定方法的属性描述符


 function test(target: any, proertyKey: string, desriptor: PropertyDescriptor) {
     console.log(target); // 类 class Person或者 实例 Person();
     console.log(proertyKey) // sayHello
     console.log(desriptor) // 
     //  console.log(desriptor.value)
    desriptor.value = function () {
         console.log("我是来替换sayHello的方法")
    }
}
class Person {
     // @test
     sayHello() {
         console.log("你好 typescript")
     }
     static sayAge() {
        console.log("我今年18岁了")
    }
 }
 let zs = new Person();
 console.log(zs);
 zs.sayHello();
```

#### 3.访问器的装饰

```typescript
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

 target 对于静态方法而言就是当前的类 对于实例方法而言就是当前的实例
proertyKey: 被绑定方法的名字
 desriptor 被绑定方法的属性描述符


function test(target: any, proertyKey: string, desriptor: PropertyDescriptor) {
     // console.log(target);
    // console.log(proertyKey);
     // console.log(desriptor);
     // console.log(desriptor);

     desriptor.set = function (value: string) {
        target.name = value
     }
    desriptor.get = () => {
         // return  desriptor.value + 'aaaaaaaaa'
         return target.name + '***************'
     }

}


 class Person {
     private name: string

    constructor(name: string) {
         this.name = name;
    }

     // @test
     public get _name(): string {
         return this.name
     }
     public set _name(v: string) {
         this.name = v;
     }
 }

let zs = new Person('zs');

 // zs._name = 'aaaaa';
 console.log(zs._name)
```

#### 4.属性装饰器

```typescript
/**
 * 1.属性装饰器
 * - 属性装饰器写在一个属性声明之前(紧靠着属性声明)
 * - 属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数:
 *  + 对于静态属性来说就是当前的类，对于实例属性来说就是当前的实例对象
 *  + 成员的名字
 *
 */

function test(target: any, propertyName: string) {
    console.log(target, propertyName);

    target.name = 'aaaaaaaaa';
    console.log(target)

    target.cccc = 23234234;
}


class Person {
    // @test
    name: string

    static age: number

    constructor() {
        this.name = 'zs';
    }

    static sayHi() {
        console.log(1111);
    }

    sayHello() {
        console.log(22222);
    }
}
// 静态方法 只有类能调用
// 非静态方法  只有实例能调
console.log(Person);
let zs = new Person
console.log(zs);
```

#### 5.声明文件

```typescript
// /**
//  * 1.参数装饰器
//  *  - 参数装饰器写在一个参数声明之前(紧靠着参数声明)
//  *  - 参数装饰器表达式会在运行时当作函数被调用，传入下列三个参数
//  *    + 对于静态成员来说是当前的类，对于实例成员来说是当前的实例
//  *    + 参数所在的方法名称
//  *    + 参数在参数列表中的索引
//  * 
//  * 
//  * 
//  * 
//  */

 function test(target:any, fnName: string, index:number){
   console.log(target, fnName, index);
 }

 class Person {

  // 检测参数是否符合规则
   sayHello(name:string, @test age:number){
     console.log(`我叫${name}, 我今年${age}`);
  }
 }
```

