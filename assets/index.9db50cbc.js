const u=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};u();const p=document.querySelector(".boton-svg"),g=document.querySelector(".nav");p.addEventListener("click",()=>{g.classList.toggle("active")});window.addEventListener("scroll",()=>{document.querySelector("header").classList.toggle("sigue",window.scrollY>0)});class c{constructor(s,o,i,e,n,r){this.id=s,this.nombre=o,this.img=i,this.precio=e,this.plataforma=n,this.stock=r}descontarStock(s){let o;return stock>s?o=stock-s:o="no se puede realizar la venta ya que el stock es insufuciente",o}}const d=[],a=[],m=new c(0,"Dragon Ball kakarot","./Img/dbzJuego.jpg",3e4,"PS4",5),h=new c(1,"GTA V","./Img/gtaJuego.jpg",3e4,"PS4",5),f=new c(2,"Uncharted","./Img/unchar.png",3e4,"PS4",5),v=new c(3,"God of War","./Img/godJuego.jpg",5e4,"PS4",5);d.push(m,h,f,v);JSON.stringify(d);console.log(d);const l=document.getElementById("contenedorJuegos");d.forEach(t=>{let s=`  
  <img src="${t.img}" class="img">
  <p>${t.nombre}</p>
  <div class="txtContenedor">
  <div class ="content">
    <p>Precio</p> <p class="precios" >${t.precio}</p>
    <input type ="hidden" value =${t.id}/>
  </div>
  <div class="content"> 
    <p>Stock </p><p class="precios" >${t.stock}</p>
   </div>
  `;const o=document.createElement("div");o.setAttribute("class","contenedorJuego"),o.innerHTML=s,l.appendChild(o)});const y=new c(4,"Super Mario Odyssey","./Img/marioO.jpg",1e4,"Nintendo Switch",2),S=new c(5,"Super Smash Ultimate","./Img/superSmash.jpg",7e4,"Nintendo Switch",4),w=new c(6,"Pokemon let's Go Pikachu","./Img/pokemonPika.jpg",15e3,"Nintendo Switch",6),k=new c(7,"Zelda Breath of the wild","./Img/zelda.jpg",5e4,"Nintendo Switch",5);a.push(y,S,w,k);a.forEach(t=>{let s=`
    <img src="${t.img}" class="img">
    <p>${t.nombre}</p>
    <div class="txtContenedor">
    <div class ="content">
    <p>Precio</p> <p class="precios" >${t.precio}</p>
    <input type ="hidden" value =${t.id}>
    </div>
    <div class="content"> 
    <p>Stock </p><p class="precios" >${t.stock}</p>
   </div>
   </div>
    `;var o=document.createElement("div");o.setAttribute("class","contenedorJuego"),o.innerHTML=s,l.appendChild(o)});window.addEventListener("DOMContentLoaded",t=>{});
