const g=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}};g();const p=document.querySelector(".boton-svg"),m=document.querySelector(".nav");p.addEventListener("click",()=>{m.classList.toggle("active")});window.addEventListener("scroll",()=>{document.querySelector("header").classList.toggle("sigue",window.scrollY>0)});class c{constructor(s,t,r,o,n,i){this.id=s,this.nombre=t,this.img=r,this.precio=o,this.plataforma=n,this.stock=i}descontarStock(s){let t;return stock>s?t=stock-s:t="no se puede realizar la venta ya que el stock es insufuciente",t}}const d=[],a=[],h=new c(0,"Dragon Ball kakarot","./Img/dbzJuego.jpg",3e4,"PS4",5),v=new c(1,"GTA V","./Img/gtaJuego.jpg",3e4,"PS4",5),f=new c(2,"Uncharted","./Img/unchar.png",3e4,"PS4",5),y=new c(3,"God of War","./Img/godJuego.jpg",5e4,"PS4",5);d.push(h,v,f,y);JSON.stringify(d);console.log(d);const u=document.getElementById("contenedorJuegos");d.forEach(e=>{let s=`
  <img src="${e.img}" class="img">
  <p>${e.nombre}</p>
  <div class="txtContenedor">
    <div class ="content">
      <p>Precio</p> <p class="precios" >${e.precio}</p>
    </div>
    <div class="content"> 
      <p>Stock </p><p class="precios" >${e.stock}</p>
    </div>
 </div>
 <div class="id"><input type ="hidden" value =${e.id}></div>
  `;const t=document.createElement("div");t.setAttribute("class","contenedorJuego"),t.innerHTML=s,u.appendChild(t)});const S=new c(4,"Super Mario Odyssey","./Img/marioO.jpg",1e4,"Nintendo Switch",2),w=new c(5,"Super Smash Ultimate","./Img/superSmash.jpg",7e4,"Nintendo Switch",4),k=new c(6,"Pokemon let's Go Pikachu","./Img/pokemonPika.jpg",15e3,"Nintendo Switch",6),J=new c(7,"Zelda Breath of the wild","./Img/zelda.jpg",5e4,"Nintendo Switch",5);a.push(S,w,k,J);a.forEach(e=>{let s=`
    <img src="${e.img}" class="img">
    <p>${e.nombre}</p>
    <div class="txtContenedor">
      <div class ="content">
        <p>Precio</p> <p class="precios" >${e.precio}</p>
      </div>
      <div class="content"> 
        <p>Stock </p><p class="precios" >${e.stock}</p>
      </div>
   </div>
   <div class="id"><input type ="hidden" value =${e.id}></div>
    `;var t=document.createElement("div");t.setAttribute("class","contenedorJuego"),t.innerHTML=s,u.appendChild(t)});const l=document.querySelectorAll(".contenedorJuego");for(let e=0;e<l.length;e++)l[e].addEventListener("click",function(){l[e].classList.toggle("seleccionado")});const L=document.getElementById("boton");L.addEventListener("click",()=>{const e=document.querySelector(".contenedorJuego.seleccionado .id input").value;console.log(e)});window.addEventListener("DOMContentLoaded",e=>{});
