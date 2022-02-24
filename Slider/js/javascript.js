$(document).ready(function(){
    var imagenes = $(".slider li").length;
    var imgPos = 1;


    $(".slider li").hide();
    $(".slider li:first").show();
    $(".paginacion li:first").css({"color" : "#CD6E2E"});

    $(".paginacion li").click(paginacion);
    $(".derecha span").click(siguienteSlide);
    $(".izquierda span").click(previoSlide);

    setInterval(function(){
        siguienteSlide()
    }, 6000);

    function paginacion(){
        var paginacionPos = $(this).index() + 1;

        $(".slider li").hide();
        $(".slider li:nth-child("+ paginacionPos +")").fadeIn();
        $(".paginacion li").css({"color" : "#858585"});
        $(this).css({"color" : "#CD6E2E"});
        imgPos = paginacionPos;
    }

    function siguienteSlide(){
        if(imgPos >= imagenes){
            imgPos = 1;
        } else {
            imgPos++;
        }
        $(".paginacion li").css({"color" : "#858585"});
        $(".paginacion li:nth-child("+ imgPos +")").css({"color" : "#CD6E2E"});
        $(".slider li").hide();
        $(".slider li:nth-child("+ imgPos +")").fadeIn();
    }

    function previoSlide(){
        if(imgPos <= 1){imgPos = imagenes}
        else {imgPos--;}
        $(".paginacion li").css({"color" : "#858585"});
        $(".paginacion li:nth-child("+ imgPos +")").css({"color" : "#CD6E2E"});
        $(".slider li").hide();
        $(".slider li:nth-child("+ imgPos +")").fadeIn();
    }
});



