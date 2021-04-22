// let props = (obj: object, key: any) => {
//     return obj[key]
// }

let props = <T, K extends keyof T>(obj: T, key: K) => {
    console.log(obj[key])
}

// props([1, 2, 3], 6)
// props<object, string>('a', 'slice')