import{a as u,S as d,i}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="43966863-3e3d2a956fed7cb918868d7e8",f="https://pixabay.com/api/";async function y(s){const r={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(f,{params:r})).data}let m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const r=document.querySelector(".gallery"),n=s.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${o.likes}</p>
          <p><b>Views:</b> ${o.views}</p>
          <p><b>Comments:</b> ${o.comments}</p>
          <p><b>Downloads:</b> ${o.downloads}</p>
        </div>
      </li>
    `).join("");r.insertAdjacentHTML("beforeend",n),m.refresh()}function h(){const s=document.querySelector(".gallery");s.innerHTML=""}const l=document.querySelector(".form"),c=document.querySelector(".loader");l.addEventListener("submit",w);function b(){c.style.display="block"}function L(){c.style.display="none"}async function w(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){i.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}b(),h();try{const n=await y(r);if(n.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(n.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),l.reset()}}
//# sourceMappingURL=index.js.map
