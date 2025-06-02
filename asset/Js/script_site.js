$(document).ready(()=>{
    let image = $('#slider img')
    let nbrSlides = image.length;
    let imageActive = 0;
    image.eq(imageActive).show();
    returnSlide();
    function returnSlide()
    {  
        $('#sgauche').click(()=>{
            if(imageActive > 0)
                imageActive--;
            else
                imageActive = nbrSlides;
            image.not(imageActive).fadeOut(500);
            image.eq(imageActive).fadeIn(500);
        });
        $('#sdroite').click(()=>{
            imageActive++;
            if(imageActive == nbrSlides)
                imageActive = 0;
            image.not(imageActive).fadeOut(500);
            image.eq(imageActive).fadeIn(500);
        });
    }
})

/*-------------------------------------BURGER--------------------------------------*/
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click',()=>{
    burger.classList.toggle('croix');
    nav.classList.toggle('active');
})

/*-------------------------------------QSN--------------------------------------*/
$('.image img').mouseenter(()=>{ 
    $('.texte').show();
})
$('.apropos').mouseleave(()=>{ 
    $('.texte').hide();
})

/*-------------------------------------Service--------------------------------------*/
const btn = document.querySelectorAll(".services .btn");
const popup = document.querySelectorAll(".services .popup");
const fermer = document.querySelectorAll(".services .close");


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (event) => {
        event.preventDefault();//est une méthode JavaScript utilisée pour empêcher le comportement par défaut d’un événement dans le navigateur.
        popup[i].style.visibility = 'visible';
    });
    fermer[i].addEventListener('click', () => {
        popup[i].style.visibility = 'hidden';
    });
}


/*-------------------------------------articles--------------------------------------*/
let articles = $('.blog .article');
for(let article of articles){
    $(article).mouseenter(()=>{
        $(article).css('border','2px solid red').css('background-color','white').css('color','black')
    })
    $(article).mouseleave(()=>{
        $(article).css('border','').css('background-color','black').css('color','white')
    })
}

/*-------------------------------------Contact--------------------------------------*/
const champs = document.querySelectorAll('.contact input, .contact textarea');
for(let champ of champs){
    champ.addEventListener("focus",()=>{
        champ.style.backgroundColor = 'orange';
    })
}
for(let champ of champs){
    champ.addEventListener("blur",()=>{
        champ.style.backgroundColor = 'white';
    })
}