// 1.枚举成员类型
// enum Gender {
//     Male,
//     Female
// }

// // 人接口
// interface Person {
//     gender: Gender.Male

// }


// 之前的版本可以使用字符串类型枚举 来声明接口的类型
// 注意：当前版本  不可以使用字符串枚举作为接口的类型，只能使用数字枚举






// 2.联合枚举类型
// 联合枚举类型就是将多种数据类型通过 | 链接起来
// 我们可以把枚举类型当作一个联合类型来使用

// let value: (number | string);
// value = 1;
// value = "avav"

// enum Gender {
//     Male,
//     Female
// }

// interface Oninterface{

// }