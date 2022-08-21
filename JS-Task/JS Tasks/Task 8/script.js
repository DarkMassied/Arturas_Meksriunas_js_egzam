/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
import { umnoz } from "./mod/umnoz.js"
import { plus } from "./mod/plus.js"
import { delit } from "./mod/delit.js"
import { minus } from "./mod/minus.js"


 let a = plus(4,4)
 let b = umnoz(4,4)
 let c = delit(4,2)
 let d = minus(4,2)
 console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);