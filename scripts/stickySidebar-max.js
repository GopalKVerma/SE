function stickySidebar() {
 
var config = $.extend({
headerSelector: '#header',
navSelector: '#topmenu',
contentSelector: '#middlecol',
footerSelector: '#footer',
sidebarTopMargin: 20,
footerThreshold: 40
});
 
var fixSidebr = function() {
 
   var sidebarSelector = $('#leftcol');
   var adbarSelector = $('#rightcol');
   var navSelector = $('#topmenu');
   var viewportHeight = $(window).height();
   var viewportWidth = $(window).width();
   var documentHeight = $(document).height();
   var headerHeight = $(config.headerSelector).outerHeight();
   var navHeight = $(config.navSelector).outerHeight();
   var sidebarHeight = sidebarSelector.outerHeight();
   var contentHeight = $(config.contentSelector).height();
   var footerHeight = $(config.footerSelector).outerHeight();
   var scroll_top = $(window).scrollTop();
   var breakingPoint1 = headerHeight + navHeight;
   var breakingPoint2 = documentHeight - (sidebarHeight + footerHeight + config.footerThreshold);

   // calculate
   if (scroll_top < headerHeight) {
      sidebarSelector.removeClass('sticky').css('top',  "0px");
      adbarSelector.removeClass('sticky').css('top',  "0px");
      navSelector.removeClass('sticky').css('top', "-5px");
   }else if ((scroll_top >= headerHeight) && (breakingPoint1 + sidebarHeight <  viewportHeight) ) {
      sidebarSelector.addClass('sticky').css('top', scroll_top - breakingPoint1+navHeight + 5);
      adbarSelector.addClass('sticky').css('top', scroll_top - breakingPoint1+navHeight + 5);
      navSelector.addClass('sticky').css('top', scroll_top - breakingPoint1 + navHeight);
      navSelector.css('z-index', '10');
   } else if (scroll_top >= headerHeight && (breakingPoint1 + sidebarHeight) > viewportHeight ) {
      if( (documentHeight - scroll_top - viewportHeight) <= (sidebarHeight + breakingPoint1 - viewportHeight) ){
          var bartop = sidebarSelector.css('top');
          sidebarSelector.removeClass('sticky').css('top',  bartop + scroll_top );
          adbarSelector.removeClass('sticky').css('top',  bartop + scroll_top);
          navSelector.addClass('sticky').css('top', scroll_top - breakingPoint1 + navHeight);
          navSelector.css('z-index', '10');
      }else{
          sidebarSelector.addClass('sticky').css('top', scroll_top - breakingPoint1+navHeight) + 5;
          adbarSelector.addClass('sticky').css('top', scroll_top - breakingPoint1+navHeight + 5);
          navSelector.addClass('sticky').css('top', scroll_top - breakingPoint1 + navHeight);
          navSelector.css('z-index', '10');
      }
   } 
};
$(window).on('scroll', $.proxy(fixSidebr, this));
$(window).on('resize', $.proxy(fixSidebr, this))
$.proxy(fixSidebr, this)();
});
stickySidebar();
