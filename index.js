import"./assets/styles-B3di-5fm.js";import{i as n,S as c,a as m}from"./assets/vendor-DtRopbQG.js";let o="";const i={params:{key:"49358798-a0fde913d86352b572e9384bf",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0}},g=document.querySelector(".form"),u=document.querySelector("input"),s=document.querySelector(".gallery"),l=document.querySelector(".loader");g.addEventListener("submit",h);u.addEventListener("input",p);document.addEventListener("DOMContentLoaded",()=>{l.classList.add("hidden")});function p(t){o=t.target.value.trim()}function h(t){t.preventDefault();const e=t.currentTarget;if(o===""){n.show({message:"Fill in the search field!",messageColor:"white",iconUrl:"./img/cancel-circle.svg",position:"topRight",color:"#ef4040"});return}i.params.q=o,s.innerHTML="",l.classList.remove("hidden"),f(i).then(a=>{s.insertAdjacentHTML("beforeend",y(a)),d.refresh()}),e.reset(),o=""}let d=new c(".gallery a",{captionsData:"alt",captionDelay:250});function f(t){return m.get("https://pixabay.com/api/?",t).then(e=>{var a,r;if(!((r=(a=e.data)==null?void 0:a.hits)!=null&&r.length))throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.data.hits}).catch(e=>(n.show({message:`${e.message}`,messageColor:"white",iconUrl:"./img/cancel-circle.svg",position:"topRight",color:"#ef4040"}),[]))}function y(t){return t.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
    <img
    class="gallery-image"
    src="${e.webformatURL}"
    alt="${e.tags}"
    />
    </a>
    <p class="item-text">Likes: ${e.likes}</p>
    <p class="item-text">Views: ${e.views}</p>
    <p class="item-text">Comments: ${e.comments}</p>
    <p class="item-text">Downloads: ${e.downloads}</p>
    </li>`).join("")}
//# sourceMappingURL=index.js.map
