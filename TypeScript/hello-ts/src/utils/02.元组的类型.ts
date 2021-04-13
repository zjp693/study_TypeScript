// 元组
// 数组的特点
// js中的数组元素什么类型都可以
// js中的数组长度时是可以随意变化的

// 元组的特点
// ts中的元组的元素数据类型是对号入座的
// ts中的元素的长度不可变

// 第一步：规定元组的元素的类型和长度 
let aTuple: [string, number, boolean];

// 第二部：赋值
aTuple = ["aaaa", 1, true]
console.log(aTuple);


// 注意：元组的元素是不可多  不可少  是排列
