// TS中支持两种枚举，数字和字符串枚举

// 数字枚举 
// enum Gender {
//     Male = 3,
//     Female
// }
// 底层用的就是数字类型
// console.log(Gender.Female);
// 枚举反向映射
// console.log(Gender[3]);


// 数字枚举注意点
const num = 6;
let num2 = function () {
    return 222
}
enum Gende {
    Male = num,
    Female = num2()
}



// 字符串枚举
// 枚举的反向映射 不能在字符串枚举中实现
// enum Gender {
//     Male = "aaa",
//     Female = "bbbb"
// }
// console.log(Gender.Female);
// console.log(Gender[aaaa]);  //error


//字符串枚举注意点
// 注意点:如果使用字符串给前面的值赋值了,那么后面的枚戒值也必须手动赋值
// 注意点:和数字枚举不一样，字符串卖家不能使用常量或者计算机结果给枚举值赋值
// 注意点：虽然字符串枚举不能使用常量或者计算结果给枚举值，但她可以使用内部的其他枚举值来赋值

//异构枚举
// 枚举中既包含数字又包含字符串,是异构枚举
// 注意点:如果是字符串枚举,那么无法通过获取到枚举值

// enum Gender {
//     Male = 5,
//     Female = "abv"
// }

// enum Gender {
//     Male = "aaaa",
//     Female = 5
// }