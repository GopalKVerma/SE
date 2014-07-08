$(document).ready(function() {
   var maxHeight, middleHeight, rightHeight;
   maxHeight = $('#leftcol').height();

   if( maxHeight < $('#middlecol').height()){
      maxHeight = $('#middlecol').height();
   }
   if( maxHeight < $('#rightcol').height()){
      maxHeight = $('#rightcol').height();
   }
   $('#leftcol').height( maxHeight );
   $('#middlecol').height( maxHeight );
   $('#rightcol').height( maxHeight );
});
