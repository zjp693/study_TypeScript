// 1.什么是自动类型推断
// 不用明确告诉编辑器具体是什么类型，编辑器就知道是什么类型

// 2.根据初始化值自动推断
// 注意：




// 上下文自动推断
let fu = (numA, numB) => {
    return numA + numB
}

let res = fu(1, 2)
console.log(res);
