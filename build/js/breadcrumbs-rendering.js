const breadcrumbsRenderer=e=>{const t=document.querySelector(".breadcrumbs"),r=document.createElement("ul");r.classList.add("breadcrumbs__list"),t.append(r);for(let t=0;t<e.length;t++){const c=document.createElement("li");c.classList.add("breadcrumbs__item"),r.append(c);const d=document.createElement("a");d.classList.add("breadcrumbs__link"),d.href=e[t].href,d.textContent=e[t].text,c.append(d)}};export{breadcrumbsRenderer};