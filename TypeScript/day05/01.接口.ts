// import { log } from "console";

// 定义一个函数getUserInfo,用来获取一个用户的姓名和年龄的字符串
// interface userInterface {
//     name: string,
//     age: number
// }

// let getUserInfo = ({ name, age }: userInterface): void => {
//     console.log(`我的名字叫${name},我今年${age}`);
// }

// getUserInfo({
//     name: "张美丽",
//     age: 18
// })


// --------------------可选属性----------------------------------------------------------
// interface userInterface {
//     name: string,
//     age?: number
// }

// let getUserInfo = ({ name, age }: userInterface): void => {
//     if (age) {
//         console.log(`我的名字叫${name},我今年${age}`);
//     } else {
//         console.log("请输入年龄");
//     }
// }

// getUserInfo({
//     name: "张美丽",
//     age: 18
// })



// 只读属性接口中定义的属性可读可写：但是有一个关键字readonly,定义的属性值，不可以
// 进行修改，强制修改后报错

// interface userInterface {
//     (name: string, age: number, address: string): string
// }

// let getUserInfo: userInterface = (name, age, address): string => {
//     return `我的名字叫${name},我今年${age},我家在${address}`;
// }

// let res = getUserInfo("zs", 18, "江苏")
// console.log(res);


// 使用一个类实现某一个接口
interface caInterface {
    // 属性  颜色  品牌
    color: string,
    brand: string,
    // 方法  pao
    run(): void
}

// 使用类来实现接口

class BMW implements caInterface {
    color: string
    brand: string
    constructor(color: string, brand: string) {
        this.color = color;
        this.brand = brand;
        console.log(11);
    }
    run() {
        console.log(`我开着${this.color}的${this.brand}车，跑在大地上`);

    }
}

let x5 = new BMW("绿色", "宝马")
x5.run()


