$(document).ready(function() {
    $('html').on('mouseup mousedown', function(e) {
    e.preventDefault();
});

    $("html").bind("contextmenu",function(){
       return false;
    }); 
}); 
function clearData(){
window.clipboardData.setData('text','')
}
function ccd(){
if(clipboardData){
clipboardData.clearData();
}
}
setInterval("ccd();", 1000);
