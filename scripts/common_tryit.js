(function($) {
   $.TryIt = function(href, options) {
      var defaults = {
         url:href
      }
      var plugin = this;
      plugin.settings = {}
      var init = function() {
         plugin.settings = $.extend({}, defaults, options);
         $("body").append('<div id="source" style="display:none;"></div>');
         $("body").append('<div id="supportsource" style="display:none;"></div>');
         $("body").append('<div id="utilsource" style="display:none;"></div>');
         $("body").append('<div id="extrasource" style="display:none;"></div>');
         $("body").append('<div id="inputs" style="display:none;"></div>');
         $("body").append('<div id="filename" style="display:none;"></div>');
         $(".prettyprint.tryit").mousemove(function( e ) {       
            var width = $(this).width() + 12;
            var height = $(this).height() + 12;
            var posX = $(this).offset().left;
            var posY = $(this).offset().top;
            posX = Math.round( posX );
            posX = e.pageX - posX;
            X = width - posX;
            posY = Math.round( posY );
            posY = e.pageY - posY;
            if( X <= 36 && posY <= 16 ){
               $(this).css( 'cursor', 'pointer' );
            }else{
               $(this).css( 'cursor', 'default' );
            }
         });  
      }

      plugin.compile = function() {
         $(".prettyprint.tryit.java").click(function( e ) {
           var src = $(this).text();
           var supportsrc = "";
           var utilsrc = "";
           var extrasrc = "";
           var inputs = "";
           var filename = "";
           var url = "/computer_programming/try_java.php";

           if( $(this).attr("title") ){
                var supportid = $(this).attr("title").split(",");
                if( supportid[0] ){
                   supportsrc = $("#" + supportid[0].trim() + "").text();
                }
                if( supportid[1] ){
                   utilsrc = $("#" + supportid[1].trim() + "").text();
                }
                if( supportid[2] ){
                  filename = supportid[2];
                  extrasrc  = $("#" + supportid[2].trim() + "").text();
                }
                if( supportid[3] ){
                  filename = supportid[3];
                  inputs  = $("#" + supportid[3].trim() + "").text();
                }
           }
           $("#source").text(src);
           $("#supportsource").text(supportsrc);
           $("#utilsource").text(utilsrc);
           $("#extrasource").text(extrasrc);
           $("#inputs").text(inputs);
           $("#filename").text(filename);

           var width = $(this).width() + 12;
           var height = $(this).height() + 12;
           var posX = $(this).offset().left;
           var posY = $(this).offset().top;
           posX = Math.round( posX );
           posX = e.pageX - posX;
           X = width - posX;
           posY = Math.round( posY );
           posY = e.pageY - posY;
           src = "code=" + src;
           if( X <= 36 && posY <= 16 ){
              e.preventDefault();
              if( window.innerWidth <= 768 ){
                 var w = window.innerWidth;
                 var h = window.innerHeight;
                 $.colorbox({iframe:true, reposition:true, fixed:true,  opacity:.35, href:url, width:w, height:h});
              }else{
                 $.colorbox({iframe:true, reposition:true, fixed:true,  opacity:.35, href:url, width:960, height:650});
              }
           }
        });
        $(".prettyprint.tryit.c").click(function( e ) {
           var src = $(this).text();
           var supportsrc = "";
           var utilsrc = "";
           var extrasrc = "";
           var inputs = "";
           var filename = "";
           var url = "/computer_programming/try_c.php";

           if( $(this).attr("title") ){
                var supportid = $(this).attr("title").split(",");
                if( supportid[0] ){
                   supportsrc = $("#" + supportid[0].trim() + "").text();
                }
                if( supportid[1] ){
                   utilsrc = $("#" + supportid[1].trim() + "").text();
                }
                if( supportid[2] ){
                  filename = supportid[2];
                  extrasrc  = $("#" + supportid[2].trim() + "").text();
                }
                if( supportid[3] ){
                  filename = supportid[3];
                  inputs  = $("#" + supportid[3].trim() + "").text();
                }
           }
           $("#source").text(src);
           $("#supportsource").text(supportsrc);
           $("#utilsource").text(utilsrc);
           $("#extrasource").text(extrasrc);
           $("#inputs").text(inputs);
           $("#filename").text(filename);

           var width = $(this).width() + 12;
           var height = $(this).height() + 12;
           var posX = $(this).offset().left;
           var posY = $(this).offset().top;
           posX = Math.round( posX );
           posX = e.pageX - posX;
           X = width - posX;
           posY = Math.round( posY );
           posY = e.pageY - posY;
           src = "code=" + src;
           if( X <= 36 && posY <= 16 ){
              e.preventDefault();
              if( window.innerWidth <= 768 ){
                 var w = window.innerWidth;
                 var h = window.innerHeight;
                 $.colorbox({iframe:true, reposition:true, fixed:true,  opacity:.35, href:url, width:w, height:h});
              }else{
                 $.colorbox({iframe:true, reposition:true, fixed:true,  opacity:.35, href:url, width:960, height:650});
              }
           }
        });
        $(".prettyprint.tryit.python").click(function( e ) {
           var src = $(this).text();
           var supportsrc = "";
           var utilsrc = "";
           var extrasrc = "";
           var inputs = "";
           var filename = "";
           var url = "/computer_programming/try_python.php";

           if( $(this).attr("title") ){
                var supportid = $(this).attr("title").split(",");
                if( supportid[0] ){
                   supportsrc = $("#" + supportid[0].trim() + "").text();
                }
                if( supportid[1] ){
                   utilsrc = $("#" + supportid[1].trim() + "").text();
                }
                if( supportid[2] ){
                  filename = supportid[2];
                  extrasrc  = $("#" + supportid[2].trim() + "").text();
                }
                if( supportid[3] ){
                  filename = supportid[3];
                  inputs  = $("#" + supportid[3].trim() + "").text();
                }
           }
           $("#source").text(src);
           $("#supportsource").text(supportsrc);
           $("#utilsource").text(utilsrc);
           $("#extrasource").text(extrasrc);
           $("#inputs").text(inputs);
           $("#filename").text(filename);

           var width = $(this).width() + 12;
           var height = $(this).height() + 12;
           var posX = $(this).offset().left;
           var posY = $(this).offset().top;
           posX = Math.round( posX );
           posX = e.pageX - posX;
           X = width - posX;
           posY = Math.round( posY );
           posY = e.pageY - posY;
           src = "code=" + src;
           if( X <= 36 && posY <= 16 ){
              e.preventDefault();
              if( window.innerWidth <= 768 ){
                 var w = window.innerWidth;
                 var h = window.innerHeight;
                 $.colorbox({iframe:true, reposition:true, opacity:.35, href:url, width:w, height:h});
              }else{
                 var h = $(window).height();
                 h = 650;
                 $.colorbox({iframe:true, reposition:true, opacity:.35, href:url, width:960, height:h});
              }
           }
        });
      }

      var foo_private_method = function() {
      // code goes here
      }
      init();
   }
})(jQuery);
