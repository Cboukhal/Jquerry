const ecran = document.getElementById('ecran');
const button = document.querySelectorAll('button');
let affich = "";
let valeur1 = affich;
let valeur2 = affich;
let opera = 0;
let cal = 0;

ecran.innerHTML = affich;
function operateur(button){
    if(button == "+" || button == "-" || button == "/" || button == "*" || button == "=")
        return 1;
    else
        return 0;
}
function effacer(button){

}
function calclul(valeur1,valeur2,opera){
    switch (opera) {
        case "+":
            
            return (valeur1 + valeur2);
        case "-":
            
            return (valeur1 - valeur2);
        case "*":
            
            return (valeur1 * valeur2);
        case "/":
            if(valeur2 == 0)
                return 'Erreur'
            else
            return (valeur1 / valeur2);
    
        default:
            return (valeur1);
    }
}

for(let i=0;i< button.length;i++)
    {
    button[i].addEventListener('click',()=>{     
    if(operateur(button[i].textContent) != 1)
    {
        affich = affich + button[i].textContent;
        ecran.innerHTML = affich;
    }
    else
    {
        valeur2 = Number(affich);
        cal++;
        if(cal == 2)
        {
            valeur1 = calclul(valeur1,valeur2,opera);
            ecran.innerHTML = valeur1;
            if(button[i].textContent != '=')
                cal = 1;
            else
                cal = 0;
        }
        else
            valeur1 = valeur2;
        opera = button[i].textContent;
        affich = "";
    }
})
}
