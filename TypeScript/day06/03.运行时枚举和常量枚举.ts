//运行时枚举
// 枚举在编译之后是一个真实存在的对象,所以在运行时使用
// 而像接口这种只是用来做约束做静态检测的代码,编译之后是不存在的
interface Tes {
    age: string
    num: number
}

enum Gender {
    Male,
    Female
}

let b = Gender.Male
console.log(b);






// 常量枚举
// 普通枚举和常量枚举的区别
// 普通枚举会产生真实的对象，
// 常量枚举不会生成真实存在的对象,而是利用枚举成员的值直接替换使用到的地方

const enum Gender1 {
    Male = 5,
    Female
}
let a = Gender1.Female;
console.log(a);
