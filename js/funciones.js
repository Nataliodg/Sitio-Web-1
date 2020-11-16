$(document).ready(listo);
// JQuery(document).ready(listo);

function listo() 
{
    // alert("Hola Mundo");
    $(".hamb").click(function(e)
    {
        e.preventDefault();//Lo deja por defecto
        $("header .container nav").toggleClass("open");
        $(".hamb i").toggleClass("fa-times");
    });
    $("header .container nav a").click(function()
    {
        $("header .container nav").removeClass("open");
        $(".hamb i").removeClass("fa-times");

        var dev = $(this).attr("href");
        //alert(dev);//Forma de probar
        $("html,body").animate({
            "scrollTop": $(dev).offset().top - 76
        })
    })
}
