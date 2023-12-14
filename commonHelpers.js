import{g as $,s as f,S as a,a as m,c as F}from"./assets/footer-1599085c.js";import"./assets/vendor-081dd1c4.js";const N="/js_94_project-caramel/assets/success_order-9f386e63.png",R="/js_94_project-caramel/assets/error-2fc6af04.png";let n=[],r=[];const o={},k=document.querySelector(".js-item-count"),E=document.querySelector(".js-empty-basket"),L=document.querySelector(".js-filled-basket"),w=document.querySelector(".js-items-container"),z=document.querySelector(".total-count-text"),C=document.querySelector(".js-checkout-form"),A=document.querySelector(".js-item-button"),G=document.querySelector("#countProducts");C.addEventListener("submit",te);A.addEventListener("click",U);W();function W(){try{K(),h(n),J(),w.innerHTML=q(n,r),g(n)}catch{d()}}function Y(e,s){for(let t=0;t<=n.length;t+=1){const{_id:c}=n[t];if(c===e){n[t].count=s,f(a,n);return}}}function J(){r=[],n.forEach(e=>{e.count<2||e.count===void 0?r.push({hide:"hide",disabled:"disabled"}):r.push({hide:"",disabled:""})})}function K(){n=$(a),n.forEach(e=>{e.category=e.category.split("_").join(" "),f(a,n)})}function U(e){const s=e.target.closest("button");if(!s)return;switch(s.attributes.class.value){case"basket-clear-container":I();break;case"delete-item-button":const c=j(e);V(c),$(a),w.innerHTML=q(n,r);break;case"decrease-button":S(e,-1);break;case"increase-button":S(e,1);break}}function I(){n=[],localStorage.setItem(a,JSON.stringify(n)),h(n)}function V(e){for(let s=0;s<=n.length;s+=1){const{_id:t}=n[s];if(t===e){n.splice(s,1),f(a,n),h(n),g(n);return}}}function h(e){k&&(k.textContent=e.length),G.textContent=`Cart (${e.length})`,Z(e.length)}function j(e){return e.target.closest("li").dataset.id}function S(e,s){try{const t=j(e),c=e.target.closest("div");let i=Number(c.children.counter.textContent)+s;if(c.children.counter.textContent=i,Y(t,i),g(n),i<=1){X(c);return}Q(c)}catch{d()}}function X(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function Q(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function Z(e){if(e===0){E.classList.remove("hide"),L.classList.add("hide");return}else E.classList.add("hide"),L.classList.remove("hide")}function q(e,s){for(let t=0;t<e.length;t+=1)e[t].hide=s[t].hide,e[t].disabled=s[t].disabled;return e.map(({_id:t,name:c,img:i,category:u,size:B,is10PercentOff:ae,price:D,count:O=1,hide:H="",disabled:P=""})=>`<li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${i}" alt="${c}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${c}</h4>
              <button type="button" class="delete-item-button" aria-label="Delete">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="${m}#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${u}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${B}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${D}</p>
              <div class="item-counter-container">
                <button class="decrease-button" ${P} name="decrease" type="button aria-label="decrease"">
                  <svg class="decrease-icon ${H}" width="18" height="18">
                    <use href="${m}#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${O}</p>
                <button class="increase-button" name="increase" type="button" aria-label="increase">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="${m}#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function g(e){let s=0;e.forEach(({price:t,count:c=1})=>{s+=t*c}),z.textContent=`$${s.toFixed(2)}`}const ee=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;async function te(e){try{e.preventDefault();const s=e.target.elements.email.value;if(!ne(s))throw new Error("Your E-mail is not valid");let t=[];n.forEach(({_id:i,count:u=1})=>{t.push({productId:i,amount:u})});const c=await F(s,t);se(c)}catch{d()}}function ne(e){return ee.test(e)}function se(e){console.dir(o),o.message=e.message,o.title="Order success",o.image=N,M(o),T(),y(),ie()}function d(){o.message="Sorry, Update page and try again...",o.title="Something went wrong",o.image=R,M(o),T(),y()}function M(e){b.innerHTML=`<img class="modal-img" src="${e.image}" alt="${e.title}">
      <div class="modal-title-message">${e.title}</div>
      <div class="modal-text">${e.message}</div>`}const ce=document.querySelector("[data-js-modal-open]"),oe=document.querySelector("[data-modal-close]"),_=document.querySelector("[data-modal]"),b=document.querySelector("#js-modal-info"),p=document.querySelector(".backdrop");function y(){try{ce.addEventListener("click",l),p.addEventListener("click",l),document.addEventListener("keydown",v),oe.addEventListener("click",l)}catch{d()}}function l(){document.removeEventListener("keydown",v),p.removeEventListener("click",l),_.classList.toggle("is-hidden"),x(),b.innerHTML=""}function v(e){e.code==="Escape"&&(document.removeEventListener("keydown",v),p.removeEventListener("click",l),_.classList.add("is-hidden"),x(),b.innerHTML="")}function T(){document.body.style.overflow="hidden"}function x(){document.body.style.overflow=""}function ie(){I(),C.reset()}y();
//# sourceMappingURL=commonHelpers.js.map
