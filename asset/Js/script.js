//$('selecteur').methode() //possibilité d'enchainer les méthodes sauf pour le HTML
$('*').css('margin','0').css('padding','0').css('background-color','gold');
$('H1').css('font-size','4em').css('text-align','center').css('color','crimson').css('padding','20px');
$('#deux').css('font-size','3em').css('text-align','center').css('color','green').css('padding','10px').css('background-color','whitesmoke');
$('.trois').css('font-size','1.5em').css('text-align','center').css('color','grey').css('padding','10px');
$('ul li:first-child').css('font-size','1.5em').css('text-align','center').css('color','red').css('padding','5px').css('background-color','purple');

//Methode html
$('#un').html("Je suis le H2 modifier depuis le Jquerry");//on peut enchainer en CSS mais pas en HTML.
//Methode text ne prendra que le texte et pas les balises
$('ul li:last-child').text("Je suis le li du Jquery");
//methode de class
