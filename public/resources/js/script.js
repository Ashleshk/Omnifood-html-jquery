$(document).ready(function(){
    /* Sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction==='down'){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });
    
    /* Scroll to specific section */
    
    $('.js--scroll-to-plans').click(function(){
        $('body, html').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    }); 
    $('.js--scroll-to-features').click(function(){
        $('body, html').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
    
    /* Generic scroll to section function for navigation items */
    
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
          }
        }
    });
    
    /* animate.css effects on scrolling into view for the first time */
    
    $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animated fadeIn');   
    },{
        offset:'50%'
    }); 
    
    $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animated fadeInUp');   
    },{
        offset:'50%'
    }); 
    
    $('.js--wp-3').waypoint(function(){
        $('.js--wp-3').addClass('animated fadeIn');   
    },{
        offset:'50%'
    });    
    
    $('.js--wp-4').waypoint(function(){
        $('.js--wp-4').addClass('animated pulse');   
    },{
        offset:'50%'
    });
    
    /* Responsive navigation menu */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        if(icon.hasClass('ion-close-round')){
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
        else {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        }
        nav.slideToggle(200);
    });
    
    /* Responsive menu auto hiding on resize fix */
    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        if(window.innerWidth>767){
            nav.css("display","");
            if(icon.hasClass('ion-close-round')){
                icon.removeClass('ion-close-round');
                icon.addClass('ion-navicon-round');
            }
        }
    });
    
    
    /* Closing mobile nav menu on click */
    $('.js--main-nav li a').click(function(){
        if($('.js--nav-icon i').is(":visible")){
            $('.js--nav-icon').trigger("click");
        }
    });
    
});