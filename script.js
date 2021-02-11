
const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.menu li');
const ligne = document.querySelector('.cont-line');

// const icons = document.querySelector("");

btnMenu.addEventListener('click',()=>{

    ligne.classList.toggle('active'); //active est une classe CSS 
    nav.classList.toggle('show-nav'); //menu visible est une classe CSS qui nous permet  
    //de faire disparaitre le menu
});

allItemNav.forEach((e)=>{
    e.addEventListener('click',()=>{
        nav.classList.toggle('show-nav'); //menu visible est une classe CSS qui nous permet  
        ligne.classList.remove('active'); //active est une classe CSS 
    })
})

// /*controller les medias par javascript */
// if(window.matchMedia('(max-width: 1300px)'))
// {
//     allItemNav.forEach(item =>{
//         item.addEventListener('click', () => {

//             nav.classList.toggle('menu-visible');
//             ligne.classList.toggle('active');
        
//         })
//     }); 
    
// }
// // icons.style.zIndex = "-1";
