/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const btr = document.getElementById('btn')
const showglist=document.getElementById('output')

btr.addEventListener('click',()=>{
    fetch(ENDPOINT)
    .then(function (response) {
     
        return response.json()
      })
      .then(function (data) {
        const onlifans = data.map((obj)=> obj.login)
        const avatar= data.map((obj)=> obj.avatar_url)
       
        showglist.innerHTML=`<img src="${avatar}" alt="avatar"> <div>${onlifans}</div>`
       
      })
      .catch(function (error) {
        console.log('error', error)
      })

})
