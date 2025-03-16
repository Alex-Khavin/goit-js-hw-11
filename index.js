import{i as u,S as d,a as f}from"./assets/vendor-DtRopbQG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();let n="";const l={params:{key:"49358798-a0fde913d86352b572e9384bf",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0}},p=document.querySelector(".form"),g=document.querySelector("input"),c=document.querySelector(".gallery"),m=document.querySelector(".loader");p.addEventListener("submit",y);g.addEventListener("input",h);document.addEventListener("DOMContentLoaded",()=>{m.classList.add("hidden")});function h(o){n=o.target.value.trim()}function y(o){o.preventDefault();const e=o.currentTarget;if(n===""){u.show({message:"Fill in the search field!",messageColor:"white",iconUrl:"./img/cancel-circle.svg",position:"topRight",color:"#ef4040"});return}l.params.q=n,c.innerHTML="",m.classList.remove("hidden"),L(l).then(i=>{c.insertAdjacentHTML("beforeend",w(i)),b.refresh()}),e.reset(),n=""}let b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){return f.get("https://pixabay.com/api/?",o).then(e=>{var i,s;if(!((s=(i=e.data)==null?void 0:i.hits)!=null&&s.length))throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.data.hits}).catch(e=>(u.show({message:`${e.message}`,messageColor:"white",iconUrl:"./img/cancel-circle.svg",position:"topRight",color:"#ef4040"}),[]))}function w(o){return o.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
    <img
    class="gallery-image"
    src="${e.webformatURL}"
    alt="${e.tags}"
    />
    </a>
    <div class="item-subtitle">
    <p class="item-text"><b>Likes</b> ${e.likes}</p>
    <p class="item-text"><b>Views</b> ${e.views}</p>
    <p class="item-text"><b>Comments</b> ${e.comments}</p>
    <p class="item-text"><b>Downloads</b> ${e.downloads}</p>
    </div>
    </li>`).join("")}
//# sourceMappingURL=index.js.map
