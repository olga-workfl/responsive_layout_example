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
           var content0 = document.getElementById("info");
           var content1 = document.getElementById("article1");
           var content2 = document.getElementById("article2");
           var content3 = document.getElementById("article3");
           var content4 = document.getElementById("article4");
             var content5 = document.getElementById("article5");
           var content6 = document.getElementById("article6");
           var content7 = document.getElementById("article7");
           var content8 = document.getElementById("article8");
            var content_news0=document.getElementById("novosti-activ");
           var content_news1=document.getElementById("novosti1");
            var content_news2=document.getElementById("novosti2");
            var content_news3=document.getElementById("novosti3");
            var content_news4=document.getElementById("novosti4");
            var contentint0=document.getElementById("int");
            var contentint1=document.getElementById("interview1");
            var contentobz0=document.getElementById("obz");
            var contentobz1=document.getElementById("obzor1");
            

           function a()
                   { content0.innerHTML=content1.innerHTML;
                    var y=findPos(document.getElementById("info"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    }); 
                        
                };
        
           function b()
                {content0.innerHTML=content2.innerHTML;
               var y=findPos(document.getElementById("info"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });
                          
                        
                };
        
           function c()
                {content0.innerHTML=content3.innerHTML;
                var y=findPos(document.getElementById("info"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });
                          
                        
                };
        
           function d()
                {content0.innerHTML=content4.innerHTML;
               var y=findPos(document.getElementById("info"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });
                          
                        
                };

function news1()
                   { content_news0.innerHTML=content_news1.innerHTML;
                    var y=findPos(document.getElementById("novosti-activ"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    }); 
                        
                };
function news2()
                   { content_news0.innerHTML=content_news2.innerHTML;
                    var y=findPos(document.getElementById("novosti-activ"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    }); 
                        
                };
function news3()
                   { content_news0.innerHTML=content_news3.innerHTML;
                    var y=findPos(document.getElementById("novosti-activ"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    }); 
                        
                };
function news4()
                   { content_news0.innerHTML=content_news4.innerHTML;
                    var y=findPos(document.getElementById("novosti-activ"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    }); 
                        
                };


 function e()
                {content0.innerHTML=content5.innerHTML;
               var y=findPos(document.getElementById("info"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });
                          
                        
                };
 function f()
                {content0.innerHTML=content6.innerHTML;
               var y=findPos(document.getElementById("info"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });
                          
                        
                };
 function g()
                {content0.innerHTML=content7.innerHTML;
               var y=findPos(document.getElementById("info"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });
                          
                        
                };
 function h()
                {content0.innerHTML=content8.innerHTML;
               var y=findPos(document.getElementById("info"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });
                          
                        
                };

        
function i()
                {contentint0.innerHTML=contentint1.innerHTML;
               var y=findPos(document.getElementById("int"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });
                          
                        
                };
function l()
                {contentobz0.innerHTML=contentobz1.innerHTML;
               var y=findPos(document.getElementById("obz"));
                    window.scrollTo({
                        top:y,
                        behavior:'smooth'
                    });
                          
                        
                };
        