
$(document).ready(function(){
    $(window).on('load',function(){
        $('#preloader').fadeOut(200);
    });

    if($(window).width() <= 768){
        $('.nav-link').on('click',function(){
            $('button.navbar-toggler').click();
            
        });
    }   

    
    

    $(window).scroll(function(){
         if ($(this).scrollTop() > 30){
            $('header').addClass('topfix').removeClass('normal');
            $('.logoimg').attr("src","images/hpc.png");
            $('#back-to-top').show();
         }else{
            $('header').removeClass('topfix').addClass('normal');
            $('.logoimg').attr("src","images/hpw.png");
            $('#back-to-top').hide();
         }

         /* ------------------
        Header Links Color
        -------------------*/
        if($(this).scrollTop() <= ($('#about').offset().top-65)){
            $('a.nav-link[href="#"]').addClass('active');
        }else{
            $('a.nav-link[href="#"]').removeClass('active');
        }
    
        if($(this).scrollTop() >= ($('#about').offset().top-65) && $(this).scrollTop() < ($('#testimonials').offset().top-65)){
            $('a.nav-link[href="#about"]').addClass('active');
        }else{
            $('a.nav-link[href="#about"]').removeClass('active');
        }
    
        if($(this).scrollTop() >= ($('#skills').offset().top-65) && $(this).scrollTop() < ($('#portfolio').offset().top-65)){
            $('a.nav-link[href="#skills"]').addClass('active');
        }else{
            $('a.nav-link[href="#skills"]').removeClass('active');
        }
    
        if($(this).scrollTop() >= ($('#portfolio').offset().top-65) && $(this).scrollTop() < ($('#connect').offset().top-65)){
            $('a.nav-link[href="#portfolio"]').addClass('active');
        }else{
            $('a.nav-link[href="#portfolio"]').removeClass('active');
        }

        if($(this).scrollTop() >= ($('#contact').offset().top-65)){
            $('a.nav-link[href="#contact"]').addClass('active');
        }else{
            $('a.nav-link[href="#contact"]').removeClass('active');
        }
     });

    
    /* appcache updation script */
    var appCache = window.applicationCache;

    appCache.update(); // Attempt to update the user's cache.

    if (appCache.status == window.applicationCache.UPDATEREADY) {
    appCache.swapCache();  // The fetch was successful, swap in the new cache.
    }
});


  