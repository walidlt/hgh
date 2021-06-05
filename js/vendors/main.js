$(document).ready(function(){
   
    //nav slide toggle
    $('i.icon').click(function(){
        $('.nav-list').slideToggle();
    });
   
    //sticjey navBar
    $(window).ready(function(){
    
    
         var stickyNav = function(){
            var scrollTop = $(window).scrollTop(); 
                 
                 if (scrollTop > 50) 
                    $('header').addClass('sticky');
                 else 
                    $('header').removeClass('sticky'); 
                     
                                    };

         stickyNav();
        
         $(window).scroll(function() {
            stickyNav();   });
                            
                            });



                            
});


