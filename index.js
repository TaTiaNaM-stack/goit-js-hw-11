import{S as m,a as p,i as a}from"./assets/vendor-MjawMu3A.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),f=new m(".gallery_item a");function y(t=[]){return t.map(({id:o,webformatURL:s,largeImageURL:e,tags:r,likes:n,views:l,comments:u,downloads:d})=>`<li class="gallery_item" id="${o}">
    <a href="${e}"><img src="${s}" alt="${r}" loading="lazy" class="gallery_image"/>
    <div class="info">
        <p class="info_item">
            <b>Likes</b> ${n}
        </p>
        <p class="info_item">   
            <b>Views</b> ${l}
        </p>
        <p class="info_item">
            <b>Comments</b> ${u}
        </p>
        <p class="info_item">
            <b>Downloads</b> ${d}
        </p>
    </div>
    </a>
    </li>`).join("")}function g(){c.innerHTML=""}function h(){const t=document.querySelector(".loader"),i=document.querySelector(".visibility");t&&i&&(t.style.display="block",document.body.appendChild(t));class o{constructor(){this.loader=document.createElement("div"),document.body.appendChild(this.loader)}}new o}function b(){const t=document.querySelector(".loader");t&&(t.style.display="none",document.body.removeChild(t))}function S(t){c.insertAdjacentHTML("beforeend",t),f.refresh()}const L=document.querySelector('input[name="search-text"]');L.value;const q="https://pixabay.com/api/",v="54321863-b2668d69a653290eef8a021dd";async function _(t){return(await p.get(q,{params:{key:v,image_type:"photo",orientation:"horizontal",safesearch:!0,q:t}})).data}const $=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');document.querySelector(".gallery");$.addEventListener("submit",E);async function E(t){t.preventDefault();const i=w.value.trim();if(i===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}g(),h();try{const o=await _(i);console.log(o),o.hits.length===0?a.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(S(y(o.hits)),a.success({title:"Success",message:`Found ${o.totalHits} images.`,position:"topRight"}))}catch(o){console.log(o.message),a.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}finally{b()}}
//# sourceMappingURL=index.js.map
