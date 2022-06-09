const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};p();const m=document.querySelector(".boton-svg"),h=document.querySelector(".nav");m.addEventListener("click",()=>{h.classList.toggle("active")});window.addEventListener("scroll",()=>{document.querySelector("header").classList.toggle("sigue",window.scrollY>0)});class r{constructor(t,n,s,o,c,i){this.id=t,this.nombre=n,this.img=s,this.precio=o,this.plataforma=c,this.stock=i}descontarStock(t){return this.stock<=1?"Agotado":(this.stock=this.stock-t,this.stock)}}const d=[],a=[],f=()=>{const e=new r(0,"Dragon Ball kakarot","./Img/dbzJuego.jpg",3e4,"PS4",2),t=new r(1,"GTA V","./Img/gtaJuego.jpg",3e4,"PS4",3),n=new r(2,"Uncharted","./Img/unchar.png",3e4,"PS4",5),s=new r(3,"God of War","./Img/godJuego.jpg",5e4,"PS4",7);d.push(e,t,n,s),JSON.stringify(d)};f();console.log(d);const u=document.getElementById("contenedorJuegos");d.forEach(e=>{let t=`
  <img src="${e.img}" class="img">
  <p>${e.nombre}</p>
  <div class="txtContenedor">
    <div class ="content">
      <p>Precio</p> <p class="precios" >${e.precio}</p>
    </div>
    <div class="content"> 
      <p>Stock </p><p class="stock" >${e.stock}</p>
    </div>
 </div>
 <div class="id"><input type ="hidden" value =${e.id}></div>
  `;const n=document.createElement("div");n.setAttribute("class","contenedorJuego"),n.innerHTML=t,u.appendChild(n)});const v=new r(4,"Super Mario Odyssey","./Img/marioO.jpg",1e4,"Nintendo Switch",2),k=new r(5,"Super Smash Ultimate","./Img/superSmash.jpg",7e4,"Nintendo Switch",4),S=new r(6,"Pokemon let's Go Pikachu","./Img/pokemonPika.jpg",15e3,"Nintendo Switch",6),y=new r(7,"Zelda Breath of the wild","./Img/zelda.jpg",5e4,"Nintendo Switch",5);a.push(v,k,S,y);a.forEach(e=>{let t=`
    <img src="${e.img}" class="img">
    <p>${e.nombre}</p>
    <div class="txtContenedor">
      <div class ="content">
        <p>Precio</p> <p class="precios" >${e.precio}</p>
      </div>
      <div class="content"> 
        <p>Stock </p><p class="stock">${e.stock}</p>
      </div>
   </div>
   <div class="id"><input type ="hidden" value =${e.id}></div>
    `;var n=document.createElement("div");n.setAttribute("class","contenedorJuego"),n.innerHTML=t,u.appendChild(n)});const l=document.querySelectorAll(".contenedorJuego");for(let e=0;e<l.length;e++)l[e].addEventListener("click",function(){l[e].classList.toggle("seleccionado")});const g=d.concat(a);console.log(g);const w=document.getElementById("boton");w.addEventListener("click",()=>{let e=0;const t=document.querySelectorAll(".contenedorJuego.seleccionado .id input "),n=document.querySelectorAll(".contenedorJuego.seleccionado .txtContenedor .content .stock");for(let s=0;s<t.length;s++)g.forEach(o=>{o.id==t[s].value&&(e+=o.precio,n[s].innerHTML=o.descontarStock(1),console.log(o.stock))});alert("su total es de $"+e)});window.addEventListener("DOMContentLoaded",e=>{});
