/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
var band = JSON.stringify(ENDPOINT)
const glist = document.getElementById('output')
fetch(ENDPOINT)
.then(function (resp) {
    return resp.json()
})
.then(function (data) {
    const onlifans = data.map((obj)=> obj.brand)
    const avatar= data.map((obj)=> obj.models)
    glist.innerHTML=`<div>${avatar}</div>> <div>${onlifans}</div>`
})
