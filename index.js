import{S as l,a as u,i}from"./assets/vendor-MjawMu3A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const c=document.querySelector(".gallery"),m={tags:"alt",largeImageURL:"data-source",webformatURL:"src",likes:0,views:0,comments:0,downloads:0},d=new l(".gallery_item a",m);function f(r=[],t={}){const s=r.map(({id:a,pageURL:e})=>`<li class="gallery_item" id="${a}">
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
    </li>`).join("");return d.refresh(),s}function g(){c.innerHTML=""}function p(){const r=document.querySelector(".loader");r&&(r.style.display="none",document.body.removeChild(r))}function y(r){c.insertAdjacentHTML("beforeend",r)}const h=document.querySelector('input[name="search-text"]');h.value;const b="https://pixabay.com/api/",L="54321863-b2668d69a653290eef8a021dd";async function w(r){return(await u.get(b,{params:{key:L,image_type:"photo",orientation:"horizontal",safesearch:!0,q:r}})).data}const S=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');document.querySelector(".gallery");S.addEventListener("submit",v);async function v(r){r.preventDefault();const t=q.value.trim();if(t===""){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}g();try{const s=await w(t);console.log(s),s.hits.length===0?i.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(y(f(s.hits)),i.success({title:"Success",message:`Found ${s.totalHits} images.`,position:"topRight"}))}catch(s){console.log(s.message),i.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}finally{p()}}
//# sourceMappingURL=index.js.map
