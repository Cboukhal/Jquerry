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