import"./assets/styles-B3di-5fm.js";const r="feedback-form-state",e={email:"",message:""},o=document.querySelector(".feedback-form"),s=o.querySelector("input"),n=o.querySelector("textarea");o.addEventListener("submit",i);s.addEventListener("input",m);n.addEventListener("input",m);function m(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(r,JSON.stringify(e))}function l(){const t=localStorage.getItem(r);if(t){const a=JSON.parse(t);a.email&&(e.email=a.email,s.value=a.email),a.message&&(e.message=a.message,n.value=a.message)}}function i(t){t.preventDefault();const a=t.currentTarget;if(!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(r),a.reset(),e.email="",e.message=""}l();
//# sourceMappingURL=2-form.js.map
