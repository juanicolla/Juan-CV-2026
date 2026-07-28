window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    header.classList.toggle("scrolled",window.scrollY>50);

});