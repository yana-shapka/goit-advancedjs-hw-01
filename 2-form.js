import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const m=(t,a)=>{try{localStorage.setItem(t,JSON.stringify(a))}catch(o){console.log(o)}},n=t=>{try{const a=localStorage.getItem(t);return a?JSON.parse(a):null}catch(a){return console.log(a),null}},l=document.querySelector(".feedback-form"),s="feedback-form-state",e={email:"",message:""},r=n(s);r&&(e.email=r.email||"",e.message=r.message||"",l.elements.email.value=e.email,l.elements.message.value=e.message);l.addEventListener("input",t=>{e[t.target.name]=t.target.value,m(s,e)});l.addEventListener("submit",t=>{if(t.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log("Submitted formData:",e),localStorage.removeItem(s),l.reset(),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map