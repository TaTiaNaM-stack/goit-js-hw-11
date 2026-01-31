import{S as p,a as f,i as a}from"./assets/vendor-MjawMu3A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const c=document.querySelector(".gallery"),y=new p(".gallery_item a");function g(t=[]){const s=t.map(({id:r,pageURL:n,webformatURL:e,largeImageURL:o,tags:i,likes:l,views:u,comments:d,downloads:m})=>`<li class="gallery_item" id="${r}">
    <a href="${n}"><img src="${e}"  data-source="${o} alt="${i}" loading="lazy" class="gallery_image"/>
    <div class="info">
        <p class="info_item">
            <b>Likes</b> ${l}
        </p>
        <p class="info_item">   
            <b>Views</b> ${u}
        </p>
        <p class="info_item">
            <b>Comments</b> ${d}
        </p>
        <p class="info_item">
            <b>Downloads</b> ${m}
        </p>
    </div>
    </a>
    </li>`).join("");return y.refresh(),s}function h(){c.innerHTML=""}function b(){document.querySelector(".loader");class t{constructor(){this.loader=document.createElement("div"),document.body.appendChild(this.loader)}}new t}function L(){const t=document.querySelector(".loader");t&&(t.style.display="none",document.body.removeChild(t))}function S(t){c.insertAdjacentHTML("beforeend",t)}const q=document.querySelector('input[name="search-text"]');q.value;const $="https://pixabay.com/api/",v="54321863-b2668d69a653290eef8a021dd";async function _(t){return(await f.get($,{params:{key:v,image_type:"photo",orientation:"horizontal",safesearch:!0,q:t}})).data}const w=document.querySelector(".form"),E=document.querySelector('input[name="search-text"]');document.querySelector(".gallery");w.addEventListener("submit",P);async function P(t){t.preventDefault();const s=E.value.trim();if(s===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}h(),b();try{const r=await _(s);console.log(r),r.hits.length===0?a.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(S(g(r.hits)),a.success({title:"Success",message:`Found ${r.totalHits} images.`,position:"topRight"}))}catch(r){console.log(r.message),a.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
