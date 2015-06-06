
$(document).ready(function() {
    $('html').on('mouseup mousedown', function(e) {
    e.preventDefault();
});

    $("html").bind("contextmenu",function(){
       return false;
    }); 
}); 

