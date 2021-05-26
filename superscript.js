/* $(window).on('load',function(){
    $('html,body').animate({scrollTop : 0});
    });*/
function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop-80;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
};

function openArticle(b,c){
    var content0=document.getElementById(b).innerHTML;
    var content1=document.getElementById(c).innerHTML;
    document.getElementById(c).innerHTML=content0;
                    var y=findPos(document.getElementById(c));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });             
   
};