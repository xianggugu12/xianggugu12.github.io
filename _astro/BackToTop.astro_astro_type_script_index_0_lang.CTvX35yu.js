document.addEventListener("astro:page-load",()=>{window.addEventListener("scroll",function(o){const n=window.scrollY,e=document.getElementById("back-to-top");e&&n>1e3?e.classList.add("active"):e&&e.classList.remove("active")});const t=document.getElementById("back-to-top");t&&t.addEventListener("click",function(o){window.scrollTo({top:0,behavior:"smooth"})})});
