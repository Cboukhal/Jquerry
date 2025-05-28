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
// $('body').html("<selection id='align'></section>");
$('#align').html("<div></div><div></div><div></div><div></div>");
$("div").addClass("div");
$('#align').addClass("alignement"); //ajouter une class
$('#align').removeClass("alignement"); //supprime une class
$('#align').toggleClass("alignement"); //ajoute ou supprime une class

//methode des attributs
$('img').attr("src","../asset/image/dragon or.webp");
$('img').attr("alt","dragon doré");
$('img').removeAttr("alt","dragon doré");//sans précision, il supprime tout les att

//methode pour ajouter au début et à la fin d'un élément
//after et before
$('h1').before("****************************************************************************************************************************************");
$('h1').after("<hr>");

//prepend et append
$('body').prepend('<br><br>');//ajoute au début avant le before
$('body').append("<section id='sect2'></section>");
$('#sect2').append("<div></div>");
$('#sect2').addClass("alignement");
$("div").addClass("div");

//methode pour supprimer ou vider un elem
$('body').append('<br><br>');//ajoute au début avant le before
$('body').append("<section id='sect3'></section>");
$('#sect3').append("<div></div><div></div><div></div><div></div>");
$('#sect3').addClass("alignement");
$("div").addClass("div");
$("#sect3 div:first-child").remove()//supprime l'élém cibler
$("#sect3 div:last-child").remove()//supprime l'élém cibler
$("#sect3").empty();//pour vider l'élém

//___________________________________Evénement___________________________________\\