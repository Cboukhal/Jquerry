const score = document.querySelector('h1 p');
let n = 0;
//fonction niveau
function niveau(n){
    const niveau = document.querySelector('h1 span');
    if(n >= 20 && n < 40)
            niveau.innerHTML = 'niveau 2';
     if(n >= 40 && n < 60)
            niveau.innerHTML = 'niveau 3';
    if(n >= 60)
            niveau.innerHTML = 'niveau 4';
    if(n == 100)
            niveau.remove();
}

//fonction seconde
function seconde(n){
    let c;
    c = 'bubulle 20s forwards';
    if(n >= 20 && n < 40){
            c = 'bubulle 10s forwards';
        }
        if(n >= 40 && n < 60){
            c = 'bubulle 5s forwards';
        }
        if(n >= 60){
            c = 'bubulle 2s forwards';
        }
        return c;
}

function creerbulle() {
    //créer bulle
    const bulle = document.createElement('div');//creér les balises div
    bulle.classList.add('bulle');//ajout class bulle
    document.body.appendChild(bulle);//insérer élém dans le body

    //Mettre les tailles à nos bulles
    let taille = Math.ceil(Math.random() * 100) + 100 + "px";
    bulle.style.width = taille;
    bulle.style.height = taille;

    //positionnement
    let posTop = Math.ceil(Math.random() * 100) + 50 +"%";
    let posLeft = Math.ceil(Math.random() * 100) + "%";
    bulle.style.top = posTop;
    bulle.style.left = posLeft;

    //vitesse et niveau
    // if(n <= 10)
    //     bulle.style.animation = 'bubulle 20s forwards';
    // else if(n > 10 && n < 20)
    //     bulle.style.animation = 'bubulle 10s forwards';
    // else
    //     bulle.style.animation = 'bubulle 5s forwards';

    bulle.style.animation = seconde(n);
    //éclate les bulles
    bulle.addEventListener('click',()=>{
        n++;
        bulle.remove();
        score.innerHTML = n;
        niveau(n);
    })

    if(n >= 100)
        {
            score.innerHTML = 'fin du game';
            bulle.remove();
        }

    //Détruire les bulles non click
    setTimeout(()=>{
        bulle.remove();
    },5000);
}
setInterval(creerbulle, 500);

//Réaliser des niveaux en faisant appel à la fonction, si le score est - de 20, on est au niveau 1 avec une vitesse de 20s
//score 20 et 40 niveau 2 vitesse 10s
//score 40 et 60 niveau 3 vitesse 5s
//score >60 niveau 4 vitesse 2s
//score =100 fin du game