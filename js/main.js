document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});


ScrollReveal().reveal('.header');
ScrollReveal().reveal('.noticias' , { delay: 500});
ScrollReveal().reveal('.section' , { delay: 500});
ScrollReveal().reveal('.section.two' , { delay: 500});

function copy(){
    alert("NAME: Nestor Martinez. EMAIL: nestorjose0503@gmail.com")
}
