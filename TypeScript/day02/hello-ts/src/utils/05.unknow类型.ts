// 1.unknow类型和any类型一样,同样是都是顶级类型
// unknow代表未知类型
let a: unknown;
a = 3;
a = "yes";
a = true;

// true 在ts中是什么类型的数据
console.log(a);

// unknow 类型只能被赋值给any类型和unknown 类型本身
// 下列是错误示范
// let c:boolean = a;  
// let d:unknown=a;
// let f:any=a;

