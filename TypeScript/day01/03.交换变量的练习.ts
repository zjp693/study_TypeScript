// 需求：交换两个变量的值（第三方变量）
let num_1: Number = 33;
let num_2: Number = 2;

//思路：
//1.准备空的第三方变量
let temp:Number
//2.把第一个变量值赋值给第三方变量
temp=num_1
//3.把第二个变量值赋值给第一个变量
num_1=num_2
//4.把第三放变量赋值给第二个变量，这样两个变量就完成了交换
num_2 = temp

console.log(num_1);
console.log(num_2);

