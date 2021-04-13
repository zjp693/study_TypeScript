//布尔类型
var flag: Boolean;
flag = true;
//数字类型
// 先声明后赋值
var num1: Number;
var num2: Number;
var num3: Number;

num1 = 19
num2 = 0x001
num3 = 0b101010;
// 声明的同时并赋值（推荐）
var num4: Number = 0o7;
console.log(num1,num2,num3,num4);

// 变量的命名规则
// 只能出现数字 下划线_ 字母 美元符号$  并且不能数字开头

// 字符串类型
// 字符串：由多个字符串串联而成的，用来表示文本信息

console.log("hello ts");
console.log("");//空字符

let food: String = "糖葫芦"

// 布尔类型
// 布尔类型，用力表示真或假
// 只有两个值，分别是：true和false.true表示真，false表示假

// 真
let isStudying: Boolean = true;
let isPlayingGame: Boolean = false;



// undefinded  null 
let u: undefined = undefined;
let n: null = null
console.log(u,n);

//undefind：表示声明但是未赋值的变量值（找不到值）
// null:表示声明但是并已赋值的变量值，值为null(值可以找到)