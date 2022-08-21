/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

import { composition } from "./modules/math/composition.js";// +
import { division } from "./modules/math/division.js"// -
import { substraction } from "./modules/math/subtraction.js";// /
import { multiplication } from "./modules/math/multiplication.js";// *
import { one,two,three,four,five } from "./modules/numbers/numbers.js";

let a = composition(one, four); // 1+4=5
let b = division(four, two);//4-2=2
let c = substraction(three, two);// 3/2=1.5 ??.toFixed(1)=1.0
let d = multiplication(five, two);// 5*2=10

console.log(a);
console.log(b);
console.log(c);
console.log(d);

