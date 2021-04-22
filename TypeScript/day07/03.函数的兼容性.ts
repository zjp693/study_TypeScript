// 参数个数
// let fn1 = (x: number, y: number): void => { };
// let fn2 = (x: number): void => { };
// let fn3 = (x: string, y: string): void => { };


// fn1 = fn2  //参数多的 可以 接受参数少的函数的赋值
// fn2 = fn1  //参数少的 不可以 接受参数多的函数的赋值


// 参数类型
// let fn1 = (x: number, y: number): void => { };
// // let fn2 = (x: number): void => { };
// let fn3 = (x: string, y: string): void => { };


// fn1 = fn3  // 参数类型不同  不可以相互赋值
// fn3 = fn1  //

// 返回值不同
// let fn1 = (x: number, y: number): number => 123;
// let fn2 = (x: number): number => 456;
// let fn3 = (x: string, y: string): string => "靓仔";

// fn1 = fn2
// fn1=fn3 //error  返回值类型必须一模一样，不一样类型 就不兼容

// 函数的双向协变  
// 参数的双向协变
// 或:要么是number ,要么是string
// let fn1 = (x: number | string): void => { };
// // 只有一个类型就是number
// let fn2 = (y: number): void => { };

// fn1 = fn2
// fn2 = fn1



// 返回值的双向协变
// let fn1 = (x: boolean): (string | number) => x ? "aaaa" : 123;
// let fn2 = (y: string): string => "aaa"

// fn1 = fn2; //error    单一类型也不能赋值给联合类型
// fn2=fn1   //  联合类型不能赋值给单一类型 


// 函数的重载
// // 重写 相当于重新实现
// // 重载就是根据测试的类型不同  个数不同  能自动调用不同的函数

// function add(u: number, v: number): number;
// function add(u: string, v: string, w: number): number;
// function add(u: string, v: string, w: number, x: number): number;

// function add(num1?: number, num2?: number, num3?: number, num4?: number): number{


// }

// 没啥用不写了
