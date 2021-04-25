// Object.defineProperty(obj, prop, descriptor)
// 作用：可以用来精确添加或者修改对象的属性，只需要在descriptor对象中将属性特性描述清楚

// 1.数据描述符，他拥有四个属性配置
// 1.1 configurable:数据是否可删除，可配置
// 1.2 enumerable:属性是否可枚举
// 1.3 value:属性值，默认为nudefined 
// 1.4 writable:属性是否可读写



// 2.存取描述符，他同样拥有四个属性选项
// 2.1 configurable:数据是否可删除，可配置
// 2.2 enumerable:属性是否可枚举
// 2.3 get：一个属性提供getter 的方法，如果没有getter 则为 undefind 
// 2.4 set:一个给属性提供setter 的方法，如果没有setter 则为undefind

// 需要注意的是：数据描述符的value,writable 和 存储描述符中的get,set 属性不能同时存在否则会抛出异常.
// 



// let obj = { name: 'zs' }
// let value;
// Object.defineProperty(obj, 'age', {
//     get() {
//         console.log("获取值")
//         console.log(1);

//         return value;
//     },
//     set(v: string) {
//         console.log("设置值")
//         value = v;
//     }
// })
// console.log(obj);