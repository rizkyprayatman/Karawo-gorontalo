var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
var tanggal =  d + "/" + m + "/" + y;
   
$("#date").val(tanggal);

$(document).ready(function(){
    $('a.close').click(function(eve){
        
        eve.preventDefault();
        $(this).parents('div.pop-up').fadeOut('slow');
    });
});
