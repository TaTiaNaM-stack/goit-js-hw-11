import{a as u,S as d,i}from"./assets/vendor-MjawMu3A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const m=document.querySelector('input[name="search-text"]');m.value;const f="https://pixabay.com/api/",g="54321863-b2668d69a653290eef8a021dd";async function c(r){return(await u.get(f,{params:{key:g,image_type:"photo",orientation:"horizontal",safesearch:!0,q:r}})).data}const l=document.querySelector(".gallery");c();const p={tags:"alt",largeImageURL:"data-source",webformatURL:"src",likes:0,views:0,comments:0,downloads:0},y=new d(".gallery_item a",p);function h(r=[],t={}){const o=r.map(({id:a,pageURL:e})=>`<li class="gallery_item" id="${a}">
    <a href="${e}"><img src="${t.webformatURL}"  data-source="${t.largeImageURL} alt="${t.tags}" loading="lazy" class="gallery_image"/>
    <div class="info">
        <p class="info_item">
            <b>Likes</b> ${t.likes}
        </p>
        <p class="info_item">   
            <b>Views</b> ${t.views}
        </p>
        <p class="info_item">
            <b>Comments</b> ${t.comments}
        </p>
        <p class="info_item">
            <b>Downloads</b> ${t.downloads}
        </p>
    </div>
    </a>
    </li>`).join("");return y.refresh(),o}function b(){l.innerHTML=""}function L(){document.querySelector(".loader");class r{constructor(){this.loader=document.createElement("div"),document.body.appendChild(this.loader)}}new r}function w(){const r=document.querySelector(".loader");r&&(r.style.display="none",document.body.removeChild(r))}function S(r){l.insertAdjacentHTML("beforeend",r)}const q=document.querySelector(".form"),v=document.querySelector('input[name="search-text"]');document.querySelector(".gallery");q.addEventListener("submit",$);async function $(r){r.preventDefault();const t=v.value.trim();if(t===""){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}b(),L();try{const o=await c(t);console.log(o),o.hits.length===0?i.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(S(h(o.hits)),i.success({title:"Success",message:`Found ${o.totalHits} images.`,position:"topRight"}))}catch(o){console.log(o.message),i.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}finally{w()}}
//# sourceMappingURL=index.js.map
