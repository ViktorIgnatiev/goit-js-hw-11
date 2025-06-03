import{a as c,S as u,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d="43966863-3e3d2a956fed7cb918868d7e8",f="https://pixabay.com/api/";async function p(e){const o={key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await c.get(f,{params:o})).data}let y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(e){const o=document.querySelector(".gallery"),n=e.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${s.likes}</p>
          <p><b>Views:</b> ${s.views}</p>
          <p><b>Comments:</b> ${s.comments}</p>
          <p><b>Downloads:</b> ${s.downloads}</p>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",n),y.refresh()}function g(){const e=document.querySelector(".gallery");e.innerHTML=""}function h(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function b(){const e=document.querySelector(".loader");e&&(e.style.display="none")}const l=document.querySelector(".form");document.querySelector(".loader");l.addEventListener("submit",L);async function L(e){e.preventDefault();const o=e.target.elements["search-text"].value.trim();if(!o){i.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}h(),g();try{const n=await p(o);if(n.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(n.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b(),l.reset()}}
//# sourceMappingURL=index.js.map
