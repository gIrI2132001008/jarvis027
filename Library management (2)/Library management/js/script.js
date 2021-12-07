window.onload = function()
    { 
        document.querySelector(".preloader").style.display="none"; 
    }
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#Login').click(function(){
        $('.Login-form').addClass('popup');
    });

    $('.Login-form form .fa-times').click(function(){
        $('.Login-form').removeClass('popup');
    });
    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.Login-form').removeClass('popup');
        
              $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }


        });

    });

}); 