import{a as l,S as u,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d="43966863-3e3d2a956fed7cb918868d7e8",f="https://pixabay.com/api/";async function p(t){const o={key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await l.get(f,{params:o})).data}let m=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){const o=document.querySelector(".gallery"),a=t.map(n=>`
      <li class="gallery-item">
        <a href="${n.largeImageURL}">
          <img src="${n.webformatURL}" alt="${n.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${n.likes}</p>
          <p><b>Views:</b> ${n.views}</p>
          <p><b>Comments:</b> ${n.comments}</p>
          <p><b>Downloads:</b> ${n.downloads}</p>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",a),m.refresh()}function g(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){const t=document.querySelector(".loader-container");t.innerHTML='<div class="loader"></div>'}function b(){const t=document.querySelector(".loader-container");t.innerHTML=""}const c=document.querySelector(".form");c.addEventListener("submit",L);async function L(t){t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(!o){i.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}h(),g();try{const a=await p(o);if(a.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(a.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b(),c.reset()}}
//# sourceMappingURL=index.js.map
