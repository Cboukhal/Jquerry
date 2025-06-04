// header
const header = document.querySelector('header');
const imgban = document.querySelector('#baniere img');
const   imgQsn = document.querySelector('.image img')
const   texQsn = document.querySelector('#qsn .texte')
const   service1 = document.querySelector('#services .service:first-child');
const   service2 = document.querySelector('#s2');
const   service3 = document.querySelector('#services .service:last-child');
const   art1 = document.querySelector('#blog .article:first-child');
const   art2 = document.querySelector('.art2');
const   art3 = document.querySelector('.art3');
const   art4 = document.querySelector('#blog .article:last-child');

window.addEventListener('scroll',()=>{
    window.scrollY > 80 ? header.style.backgroundColor = 'green' : header.style.backgroundColor = 'transparent';
});

// baniere
function chargerCat() {
    fetch('https://random.dog/woof.json')
    .then(reponse=>reponse.json())
    .then(data=>{
        if(data.url.includes('mp4')){
            chargerCat();
            return ;
        }
        console.log(data);
        imgban.src = data.url;
    })
}
setInterval(chargerCat, 3000);

//qsn
window.addEventListener('scroll',()=>{
    if(window.scrollY > 400)
    {
        imgQsn.style.animation = 'sortieGauche 2s ease-in-out';
        texQsn.style.animation = 'sortieDroite 2s ease-in-out';
    }
})

//service

window.addEventListener('scroll',()=>{
    if(window.scrollY > 400)
    {
        service1.style.animation = 'sortieGauche 2s ease-in-out';
        service2.style.animation = 'sortieHaut 2s ease-in-out';
        service3.style.animation = 'sortieDroite 2s ease-in-out';
    }
})

//blog

window.addEventListener('scroll',()=>{
    if(window.scrollY > 400)
    {
        art1.style.animation = 'sortieGauche 2s ease-in-out';
        art2.style.animation = 'sortieHaut 2s ease-in-out';
        art3.style.animation = 'sortieBas 2s ease-in-out';
        art4.style.animation = 'sortieDroite 2s ease-in-out';
    }
})
//API pour les communes
//https://geo.api.gouv.fr/communes
//Remplis automatiquement le champ ville à partie du code postal saisi par le formulaire