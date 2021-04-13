// 枚举用于表示固定的几个取值
// 例如：一年四季 人的性别只能是男或者女
// 默认情况下，从0开始为元素编号
// 你也可以手动指定成员的数值


// 语法
// enum枚举类型的名字{键，键，键}

// enum Gender{
//     male,//男士
//     female//女士
// }

// 声明变量的并把枚举类型的值赋值给某一个变量
// let x: Gender = Gender.male;
// console.log(x);

// enum Gender{
//     male =0,
//     femle,
//     sercret
// }
// let x: Gender = Gender.femle;
// console.log(x);

// 当时只给第一个赋值时，默认往下加1




// ////////////////////////////////////
enum Gender{
    male ="a",
    femle="b",
    sercret="c"
}
let x: Gender = Gender.femle;
console.log(x);


// 可以手动赋值为字符串时，所有的值都赋值为字符串否则