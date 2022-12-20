;(function($){
    $(function(){
        var swiper = new Swiper('.swiper-container', {
            scrollbar: {
              el: '.swiper-scrollbar',
              hide: true,
              },

            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });

        $(window).on('load resize',function(){

          $('.page_f').each(function(){
            
            var w=$(this).width();
            var h=$(this).height();
            var l=$(this).find('iframe').attr('width');
            var s=parseInt(l);
            var u=w/s;
            
            $(this).find('iframe').css('transform','scale('+u+','+u+')');
            $(this).find('iframe').css('height',h/u);

          });

        });

    });
})(jQuery);