$(document).ready(function(){
    
});
var clickR=5,clickT=5,clickL=5,clickB=5,plusnum=15;

 function movebox(e){
    debugger;
    var clickedbtn=e.key;
    //var clickR =1;
    if(clickedbtn=="ArrowRight"){
        clickR=clickR+plusnum;
        $(".box").css("margin-left",clickR+"px")
    }
    if(clickedbtn=="ArrowUp"){
        clickB=clickB-plusnum;
        $(".box").css("margin-top",clickB+"px")
    }
    if(clickedbtn=="ArrowLeft"){
        clickR=clickR-plusnum;
        $(".box").css("margin-left",clickR+"px")
    }
    if(clickedbtn=="ArrowDown"){
        clickB=clickB+plusnum;
        $(".box").css("margin-top",clickB+"px")
    }
 }