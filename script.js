let userek=[]

const felhasznalo1={
    id:1,
    nev:"Kiss János",
    feladatok:["boltba menni","mamánál segíteni"],
    profilkep:""
}
const felhasznalo2={
    id:2,
    nev:"Nagy Ramóna",
    feladatok:["home page befejezés"],
    profilkep:""
}
const felhasznalo3={
    id:3,
    nev:"Németh András",
    feladatok:["kutya sétáltatás","gyerekekért menni"],
    profilkep:""
}
const felhasznalo4={
    id:4,
    nev:"Horváth János",
    feladatok:["takaritás","főzés"],
    profilkep:""
}

userek.push(felhasznalo1)
userek.push(felhasznalo2)
userek.push(felhasznalo3)
userek.push(felhasznalo4)

let user_container=document.querySelector(".user_container")
let taskok=document.querySelector(".taskok")
let nev_feladatok=document.getElementById("nev_feladatok")
let feladatok_szama=document.getElementById("feladatok_szama")
//task rész
function feladat_listazas(szemely,feladat_szam){
    nev_feladatok.innerText=szemely.nev
    feladatok_szama.innerText=szemely.feladatok.length
    let kartya=document.createElement("div")
    kartya.setAttribute("class","kartya")
    let szamlalo=document.createElement("span")
    szamlalo.innerText=szemely.length
    
    let leiras=document.createElement("p")
    leiras.innerText=szemely.feladatok[feladat_szam]
    
    leiras.style.fontSize="20px"
    
    kartya.appendChild(leiras)
    taskok.appendChild(kartya)
}
//egy usernak hány db feladata van
function szemely(user){
    for (let i = 0; i < user.feladatok.length; i++) {
        feladat_listazas(user,i)
        
    }
}
let userek_szama=document.getElementById("userek_szama")
szemely(userek[0])
//userek száma
userek_szama.innerText=userek.length
//userek hozzá adása
function CreateUser(User){
    let div=document.createElement("div")
    div.setAttribute("class","user")
    //user kártya létrehozása
    div.innerHTML=` 
                        
                            <img src="./képek/profilkep.jpg" alt="">
                            <p id="nev">${User.nev}</p>
                            <button id="torles_gomb">torles</button>
                        
    `
    div.onclick=getNev(div)     
   
    user_container.appendChild(div)
}
function addUser() {
    for (let i = 0; i < userek.length; i++) {
        CreateUser(userek[i])
        
    }
}
addUser()

//userekre kattintás és a task ablakba jelenik meg a user feladatai
//nincs még kész
 function getNev(user){
    
    const nevElem = user.querySelector("#nev");

    // A név lekérdezése a `p` elemből
    const nev = nevElem.textContent;
  
    // A név kiirás
    console.log(nev)
    
} 
