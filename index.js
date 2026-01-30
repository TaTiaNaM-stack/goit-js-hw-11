import{S as u,a as d,i as a}from"./assets/vendor-MjawMu3A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const l=document.querySelector(".gallery");new u(".gallery_item a",{tags:"alt",largeImageURL:"src",webformatURL:"src",likes:0,views:0,comments:0,downloads:0});function m(e=[]){return e.map(({id:r,pageURL:i})=>`<li class="gallery_item" id="${r}">
    <a href="${i}"><img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery_image"/>
    <div class="info">
        <p class="info_item">
            <b>Likes</b> ${likes}
        </p>
        <p class="info_item">   
            <b>Views</b> ${views}
        </p>
        <p class="info_item">
            <b>Comments</b> ${comments}
        </p>
        <p class="info_item">
            <b>Downloads</b> ${downloads}
        </p>
    </div>
    </a>
    </li>`).join("")}function c(){l.innerHTML=""}function p(){const e=document.createElement("div");e.className="Loading images, please wait...",document.body.appendChild(e),e.style.display="block",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.padding="20px",e.style.backgroundColor="#fff",e.style.color="rgba(0, 0, 0, 0.8)"}function f(){const e=document.querySelector(".loader");e&&(e.style.display="none",document.body.removeChild(e))}function g(e){l.insertAdjacentHTML("beforeend",e)}const y=document.querySelector('input[name="search-text"]');y.value;const h="https://pixabay.com/api/",b="54321863-b2668d69a653290eef8a021dd";async function L(e){return(await d.get(h,{params:{key:b,image_type:"photo",orientation:"horizontal",safesearch:!0,q:e}})).data}const w=document.querySelector(".form"),S=document.querySelector('input[name="search-text"]');document.querySelector(".gallery");w.addEventListener("submit",v);async function v(e){e.preventDefault();const s=S.value.trim();if(s===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}c(),p();try{const r=await L(s);console.log(r),r.hits.length===0?a.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(g(m(r.hits)),a.success({title:"Success",message:`Found ${r.totalHits} images.`,position:"topRight"}))}catch(r){console.log(r.message),a.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}finally{f()}}c();
//# sourceMappingURL=index.js.map
