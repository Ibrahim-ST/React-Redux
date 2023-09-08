/* const add = (a, b, c) => {
    return a + b + c;
}

console.log(add(1,2,3)); */

import { splitVendorChunkPlugin } from "vite";

const add = (a) => {
    return (b) => {
        return (c) => {
            return a * (b + c);
        }
    }
}

const result = add(1)(2)(3);
console.log(result, 'Y');

const level = add(10);
const level2 = level(2)(3);
console.log(level2);