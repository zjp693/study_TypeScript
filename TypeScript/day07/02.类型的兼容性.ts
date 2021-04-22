// 数据类型兼容性

// 接口兼容性
// 检查接口兼容性  接口能不能赋值给对象
// interface TestIterface {
//     age: number
// }

// let t: TestIterface;
// let p1 = { age: 18 };
// let p2 = { ame: "zs" };
// let p3 = { age: 18, name: "zs" };

// p1中有一个属性是age
// TestIterface 接口 属性也是age
// t = p1;  //可多不可少就可以实现兼容
// t = p2
// t = p3

// 会递归检查
// interface personInterface {
//     age: number;
//     name: {
//         firstName: string
//     }
// }

// let k: personInterface;
// let p1 = { age: 18 };
// let p2 = { age: 18, name: "zs" }
// let p3 = { age: 18, name: { firstName: "zs" } }

// k = p1;
// k = p2;
// k = p3;