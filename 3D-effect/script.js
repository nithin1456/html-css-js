const container = document.querySelector('.container')
const card = document.querySelector('.card');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


container.addEventListener('mousemove',(e) => {
   let Xaxis = (window.innerWidth /2 - e.pageX) /25;
   let Yaxis = (window.innerWidth /2 - e.pageY) /25;
   card.style.transform = `rotateY(${Xaxis}deg) rotateX(${Yaxis}deg)`;
});

container.addEventListener('mouseleave' , (e) =>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;
    title.style.transform = " translateZ(0px)";
    sneaker.style.transform = "  translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = " translateZ(0px)";
    description.style.transform = " translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";

});

container.addEventListener('mouseenter',(e) =>{
    card.style.transition = 'none';
    title.style.transform = " perspective(800px) translateZ(150px)";
    
    purchase.style.transform = " perspective(1000px) translateZ(100px)";
    description.style.transform = " perspective(1000px) translateZ(100px)";
    sizes.style.transform = " perspective(1000px) translateZ(100px)";
    sneaker.style.transform = "perspective(2000px) translateZ(100px) rotateZ(-45deg)";
    

    
    
});