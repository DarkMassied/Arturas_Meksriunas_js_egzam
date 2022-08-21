/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btr = document.getElementById('btn__element')
const ska =document.getElementById('btn__state')
var sum=0
    btr.addEventListener('click',()=> {
    ska.innerHTML=`${sum++}`
    return sum
    })

