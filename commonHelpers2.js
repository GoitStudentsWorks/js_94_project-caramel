import{g as l,S as i,b as q,m as O,s as p,d as b,e as f,f as Q,F as G,a as u,h as F,i as X,j as Z,k as tt}from"./assets/footer-1599085c.js";import{P as et,a as ot}from"./assets/vendor-081dd1c4.js";const st=document.getElementById("removeFromIcon"),W=document.getElementById("modalProduct"),nt=document.getElementById("closeModalProductBtn"),L=document.getElementById("addToCartBtn"),$=document.getElementById("removeFrom"),ct=document.getElementById("modalProductImage"),at=document.getElementById("modalProductName"),rt=document.getElementById("modalProductCategory"),it=document.getElementById("modalProductSize"),dt=document.getElementById("modalProductPopularity"),lt=document.getElementById("modalProductDescription"),ut=document.getElementById("modalProductPrice"),A=document.querySelector(".modal-overlay"),K=document.getElementById("scrollToTopBtn");st.classList.add("visually-hidden");function T(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}W.style.display="block",document.body.style.overflow="hidden",A.style.display="flex",window.addEventListener("click",V);const e=l(i);let o=q(e,t);O(o,L,$),L.addEventListener("click",n),$.addEventListener("click",c),K.style.display="none",ct.src=t.img,at.textContent=t.name;const s=r=>r.replace(/_/g," ");rt.innerHTML=`Category: <span id="priceText">${s(t.category)}</span>`,document.getElementById("priceText").style.color="black",it.innerHTML=`Size: <span id="priceTexte">${t.size}</span>`,document.getElementById("priceTexte").style.color="black",dt.innerHTML=`Popularity: <span id="priceTex">${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",lt.textContent=`${t.desc}`,ut.textContent=`$ ${t.price}`;function n(){e.push(t),a()}function c(){e.splice(o,1),a()}function a(){p(i,e),b(),o=q(e,t),f(t._id,o),O(o,L,$)}}function C(){document.body.style.overflow="",W.style.display="none",A.style.display="none",K.style.display="flex",window.removeEventListener("click",V)}nt.addEventListener("click",C);document.addEventListener("keydown",function(t){t.key==="Escape"&&C()});function V(t){t.target===A&&C()}const M=document.querySelector(".list-prod");l(i);function pt(t,e){t.innerHTML=e}async function N(t){const e=ht(t);pt(M,e)}M.addEventListener("click",mt);M.addEventListener("click",gt);function mt(t){const e=t.target.closest(".buy-btn");if(!e)return;const s=t.target.closest(".prod-item").getAttribute("data-js-product-id");e.querySelectorAll("svg[data-js-product='"+s+"']");const n=l(i);let c=n.findIndex(a=>a._id===s);if(c!==-1)n.splice(c,1),c=-1;else{const a=l(G).find(r=>r._id===s);a&&(n.push(a),c=0)}p(i,n),f(s,c)}function gt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");Q(s).then(n=>{T(n)}).catch(n=>{console.error(n)})}function ht(t){return t.map(({_id:e,name:o,img:s,category:n,size:c,price:a,popularity:r,is10PercentOff:d})=>{const m=l(i),y=m.find(h=>h._id===e)?"":"is-hidden",E=m.find(h=>h._id===e)?"is-hidden":"",g=ft(d);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" data-js-label-discont="${d}" style="visibility: ${g};">
              <use href="${u}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} width="140" height="140" loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${n.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button" aria-label="Buy">
            <svg class="card-product-svg ${y}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${u}#check"></use>
            </svg>
            <svg class="card-product-svg ${E}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${u}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function ft(t){return t===!0?"visible":"hidden"}const w=document.querySelector(".pagination-container"),yt=document.querySelector("#pagination"),D=document.querySelector(".list-prod-container"),z=document.querySelector(".filter-nomatches-container"),H="firstset";j("first");async function j(t){const{keyword:e,category:o}=t;let s=9;window.matchMedia("(max-width: 767px)").matches?s=6:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches&&(s=8);const n={keyword:e||"",category:o||"",page:1,limit:s},{results:c,totalPages:a}=await F(n);if(a===0?(D.classList.add("visually-hidden"),z.classList.remove("visually-hidden"),w.classList.add("visually-hidden")):(D.classList.remove("visually-hidden"),z.classList.add("visually-hidden"),w.classList.remove("visually-hidden")),p(H,c),N(c),a){let r=1;a>1&&(window.matchMedia("(max-width: 767px)").matches?r=3:window.matchMedia("(min-width: 768px)").matches&&(r=5));const d={totalItems:c.length*a,itemsPerPage:n.limit,visiblePages:r,page:1,centerAlign:!0,usageStatistics:!1,template:{moveButton:'<a href="#" class="tui-page-btn need-hide tui-{{type}}"><span class="for-add-text-{{type}}">1</span><span class="tui-ico-{{type}}">{{type}}</span></a>',moreButton:'<span  class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></span>'}};new et(yt,d).on("afterMove",async g=>{n.page=g.page;const{results:h}=await F(n);p(H,h),N(h)});const y=document.querySelector(".for-add-text-first"),E=document.querySelector(".for-add-text-last");if(y){const g=document.querySelector(".for-add-text-first");g.textContent=1}if(E){const g=document.querySelector(".for-add-text-last");g.textContent=a}a===1?w.classList.add("visually-hidden"):w.classList.remove("visually-hidden")}}class vt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=6}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return ot.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class bt{updateLsWithList(e){const o={keyword:null,category:null,page:1,limit:6};localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}clearLocalStorage(){localStorage.reset("products"),localStorage.reset("options")}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}const R=document.querySelector(".filter-form"),P=document.querySelector(".filter-select");document.querySelector("filter-search");const x=new vt,v=new bt;X().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.split("_").join(" "),P.append(s)});const e=wt();P.append(e)});function wt(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}R.addEventListener("submit",function(t){t.preventDefault();let e=t.target.elements.searchQuery.value.trim();try{let o=JSON.parse(localStorage.getItem("options"))||{};e===""?(o.keyword=null,v.clearLocalStorage(),v.defaultApiOptions()):(o.keyword=e,x.getFoodList(o).then(function(s){v.updateLsWithList(s,o),j(o)}).catch(function(s){console.error("Error fetching food list:",s.message)}))}catch(o){console.error("Error:",o.message)}R.reset()});P.addEventListener("change",function(){const t=P.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),v.defaultApiOptions()):(e.category=t,x.category=t,x.getFoodList().then(function(o){v.updateLsWithList(o,e),j(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const J=document.querySelector(".popular-product-list");let Y=5;window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches&&(Y=6);Z(Y).then(t=>{J.insertAdjacentHTML("beforeend",Et(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const n=s.getAttribute("data-js-button"),c=I(n,t);k(c._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let n=s.target;if(n.closest(".popular-card")){const a=n.closest(".popular-card").getAttribute("data-js-product-id");Pt(a)}else if(n.closest(".button-add-product")){const c=n.closest(".button-add-product").previousElementSibling,a=c.getAttribute("data-js-button"),r=I(a,t),d=l(i);k(r._id)||(d.push(r),p(i,d),b(),f(r._id,0)),n.closest(".button-add-product").classList.add("visually-hidden"),c.classList.remove("visually-hidden")}else if(n.closest(".button-remove-product")){const c=n.closest(".button-remove-product").getAttribute("data-js-button"),a=I(c,t),r=l(i),d=k(a._id);p(i,r.filter(m=>d._id!==m._id)),b(),f(a._id,-1),n.closest(".button-remove-product").classList.add("visually-hidden"),n.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}J.addEventListener("click",o)}).catch(t=>{console.error(t)});function Pt(t){Q(t).then(e=>{T(e)}).catch(e=>{console.error(e)})}function I(t,e){return e.find(s=>s._id.toString()===t)}function k(t){return l(i).find(o=>o._id===t)}function St(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function Et(t){return t.map(({_id:e,name:o,img:s,category:n,popularity:c,size:a,price:r,is10PercentOff:d})=>{const m=parseInt(c.toString()[0]),y=St(o,14);return`  <li class="popular-item">

            <button class="button-remove-product" data-js-button=${e} type="button" aria-label="Delete" >

        <svg class="svg-remove-product" width="12" height="12">
          <use href="${u}#check"></use>
        </svg>
      </button>

      <button class="button-add-product" data-js-button=${e} type="button" aria-label="Add" >

        <svg class="svg-add-product" width="12" height="12">
          <use href="${u}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${y}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${n.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${m}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function Lt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),n=s?"":"is-hidden",c=s?"is-hidden":"",a=$t(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
      ${o.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="${u}#icon-discount"></use>
      </svg>
      </div>`}

    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${o.img}"
            width="105" height="105" alt="${o.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${a}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn" aria-label="Buy">
            <svg class="card-product-svg ${n}" 
            data-js-discont="${o._id}" width="18" height="18">
            <use href="${u}#check"></use>
          </svg>
          <svg class="card-product-svg ${c}" 
          data-js-discont="${o._id}" width="18" height="18">
          <use href="${u}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function $t(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let S=[];const _=document.querySelector(".products-discount");async function It(){S=(await tt()).slice(0,2);const e=l(i),o=At(e),s=Lt(S,o);kt(s)}It();function kt(t){_.insertAdjacentHTML("beforeend",t)}_.addEventListener("click",xt);_.addEventListener("click",Bt);function xt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount");e.querySelectorAll("svg");const s=o.dataset.id,n=l(i);if(n.find(c=>s===c._id))p(i,n.filter(c=>s!==c._id)),b(),f(s,-1);else{const c=S.find(a=>s===a._id);n.push(c),p(i,n),b(),f(s,0)}}function Bt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,n=S.find(c=>s===c._id);T(n)}function At(t=[]){return t.map(e=>e._id)}const B=document.getElementById("scrollToTopBtn"),U=360;window.onscroll=function(){document.body.scrollTop>U||document.documentElement.scrollTop>U?B.classList.add("show"):B.classList.remove("show")};B.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
