// 需求
// js
// let gerArray = function (leng, value) {
//     // 返回一个长度 length的数组，数组中，数组中的元素我都是value
//     return new Array(leng).fill(value)
// }

// let arr = gerArray(5, "abc")
// console.log(arr);

// ts
let getArray = <T>(length: number, value: T): T[] => {
    return new Array(length).fill(value);

}

// let arr = getArray<number>(5, 5)

let arr = getArray<string>(5, "abcd")
// console.log(arr);

let res = arr.map(item => item.length);
console.log(res);

// interface name {
//     name: string;
// }

// interface variety {
//     variety: string;
// }

// interface color {
//     color: string;
// }

// interface age {
//     age: number;
// }

// interface animal extends name, variety, color, age {
//     run(): void;
// }

// const fourth = () => {
//     class animalImpl implements animal {
//         age: number;
//         color: string;
//         name: string;
//         variety: string;
//         constructor(name: string, age: number, variety: string, color: string) {
//             this.age = age;
//             this.name = name;
//             this.color = color;
//             this.variety = variety
//             this.run();
//         }
//         run(): void {
//             console.log(`这是一只${this.age}岁，品种为${this.variety}，名叫${this.name}的${this.color}的猫`);
//         }
//     }
//     let aa = new animalImpl('as', 12, '缅因', '白色')
//     // console.log(aa.run());
// }

// fourth()


