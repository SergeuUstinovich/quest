(()=>{const e=[{immg:"images/boy.png",name:"Brad Simmons",skill:"HTML, JS, ReactJS",earnin:"$8,000,000",earn:"В процесее",commis:"$520",comm:"Оплачено",compan:"Intertico",comp:"Web, UI/UX Design",reiting:2,button:"Посмотреть предложения"},{immg:"images/Avatar.png",name:"Jessie Clarcson",skill:"C#, ASP.NET, MS SQL",earnin:"$23,000,000",earn:"В ожидании",commis:"$1 600",comm:"Отклонен",compan:"Agoda",comp:"Houses & Hotels",reiting:4.5,button:"Посмотреть предложения"},{immg:"images/boy-22.png",name:"Lebron Wayde",skill:"PHP, Laravel, VueJS",earnin:"$34,000,000",earn:"Оплачено",commis:"$6 700",comm:"Оплачено",compan:"Intertico",comp:"Web, UI/UX Design",reiting:3,button:"Посмотреть предложения"},{immg:"images/skin1.png",name:"Natali Trump",skill:"Python, PostgreSQL, ReactJS",earnin:"$2,600,000",earn:"Оплачено",commis:"$14 000",comm:"Оплачено",compan:"The Hill",comp:"Insurance",reiting:3.6,button:"Посмотреть предложения"}];let t="reiting",n=!0;const a=document.getElementById("listApp"),m=document.getElementById("listForm"),o=(document.getElementById("file"),document.getElementById("formName")),c=document.getElementById("formSkills"),i=document.getElementById("formEarning"),d=document.getElementById("formCommis"),l=document.getElementById("formCompany"),r=document.getElementById("formCompTex"),u=document.getElementById("formRating"),s=document.getElementById("sor-dir"),p=document.getElementById("sor-name"),g=document.getElementById("filter-name-company"),E=document.getElementById("myDropdown");function y(){a.innerHTML="";let m=[...e];m=m.sort((function(e,a){let m=e[t]<a[t];if(0==n&&(m=e[t]>a[t]),m)return-1})),""!==g.value.trim()&&(m=m.filter((function(e){if(e.compan.includes(g.value.trim()))return!0})));for(const e of m){const t=document.createElement("div"),n=document.createElement("div"),m=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),l=document.createElement("img"),r=document.createElement("h1"),u=document.createElement("p"),s=document.createElement("h1"),p=document.createElement("p"),g=document.createElement("h1"),E=document.createElement("p"),y=document.createElement("h1"),v=document.createElement("p"),f=document.createElement("div"),L=document.createElement("div"),_=document.createElement("div"),b=document.createElement("input"),I=document.createElement("input"),h=document.createElement("input"),S=document.createElement("input"),B=document.createElement("input"),C=document.createElement("div"),k=document.createElement("button");n.append(l),n.append(r),n.append(u),l.classList.add("b"),m.append(s),m.append(p),o.append(g),o.append(E),c.append(y),c.append(v),i.append(f),f.append(L),f.append(_),_.append(b),_.append(I),_.append(h),_.append(S),_.append(B),i.append(C),d.append(k),k.classList.add("buut"),t.append(n),t.append(m),t.append(o),t.append(c),t.append(i),t.append(d),a.append(t),t.classList.add("human","box"),n.classList.add("hum"),m.classList.add("earn","inv"),o.classList.add("comm","inv"),c.classList.add("comp","inv"),i.classList.add("rating"),f.classList.add("rating__body"),L.classList.add("rating__active"),_.classList.add("rating__item"),b.classList.add("rating__item"),I.classList.add("rating__item"),h.classList.add("rating__item"),S.classList.add("rating__item"),B.classList.add("rating__item"),C.classList.add("rating__value"),b.type="radio",I.type="radio",h.type="radio",S.type="radio",B.type="radio",b.value="1",I.value="2",h.value="3",S.value="4",B.value="5",d.classList.add("butt"),l.src=e.immg,r.textContent=e.name,u.textContent=e.skill,s.textContent=e.earnin,p.textContent=e.earn,g.textContent=e.commis,E.textContent=e.comm,y.textContent=e.compan,v.textContent=e.comp,C.textContent=e.reiting,k.textContent=e.button}const o=document.querySelectorAll(".rating");o.length>0&&function(){let e,t;for(let n=0;n<o.length;n++)(function(n){e=n.querySelector(".rating__active"),t=n.querySelector(".rating__value")})(o[n]),function(n=t.innerHTML){const a=n/.05;e.style.width=`${a}%`}();const n=document.querySelectorAll(".inv"),a=document.querySelectorAll(".human");document.querySelector(".active").onclick=function(){!function(){for(let e=0;e<n.length;e++)n[e].style.display="none";for(let e=0;e<a.length;e++)a[e].style.width="50%"}()},document.querySelector(".deactive").onclick=function(){!function(){for(let e=0;e<n.length;e++)n[e].style.display="";for(let e=0;e<a.length;e++)a[e].style.width="100%"}()}}()}y(),m.addEventListener("submit",(function(t){t.preventDefault(),e.push({name:o.value,skill:c.value,earnin:i.value,earn:"В процесее",commis:d.value,comm:"Оплачено",compan:l.value,comp:r.value,reiting:u.value,button:"Посмотреть предложения"}),y(),console.log(e)})),s.addEventListener("click",(function(){t="reiting",n=!n,y()})),p.addEventListener("click",(function(){t="name",n=!n,y()})),E.addEventListener("submit",(function(e){e.preventDefault()})),g.addEventListener("input",(function(){y()})),document.querySelector(".but_filter").onclick=function(){document.getElementById("myDropdown").classList.toggle("show")},document.querySelector(".but_create").onclick=function(){document.getElementById("myForm").classList.toggle("visible")}})();