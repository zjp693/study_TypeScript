// 在严格模式下(tsconfig.json中,"strict":true,的时候就是严格模式,undefined类型的值只能是undefined)
// 同理null 类型得值只能是null

// let u:undfined=undefined
// let  n:null=null

//  在严格模式下这是不成立的
// let u: undefined = null;
// let n: null = undefined;

// 在非严格模式下,不区分undefined和null 他们被ts归为一类