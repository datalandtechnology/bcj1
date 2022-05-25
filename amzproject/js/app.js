$(document).ready(function(){
    $(".navbuttons").click(function(){
        $(".navbuttons").toggleClass("changes");
    });



    $(window).scroll(function(){
        let position = $(this).scrollTop();
        // console.log(position);
        if(position >= 200){
            $(".navbar").addClass("navmenus");
        }else{
            $(".navbar").removeClass("navmenus");
        }
    });

    $(window).scroll(function (){
       let position = $(this).scrollTop();
       // console.log(position);
       if(position >= 650 ){
           $(".cameraimgs").addClass("fromleft");
           $(".missiontexts").addClass("fromright");
       }else{
           $(".cameraimgs").removeClass("fromleft");
           $(".missiontexts").removeClass("fromright");
       }
    });

    $(".gallerylists").click(function (){
        let value = $(this).attr('data-filter');
        // console.log(value);
        if(value === "all"){
            $(".filters").show(300);
        }else{
            $(".filters").not("." + value).hide(300);

            $(".filters").filter("."+value).show(300);
        }
    });

    $(".gallerylists").click(function (){
        // $(this).addClass("activeitems");
        $(this).addClass("activeitems").siblings().removeClass("activeitems");
    });



    $(window).scroll(function(){
       let position = $(this).scrollTop();
       // console.log(position);
        if(position >= 4300){
            $(".cardones").addClass("movefromleft");
            $(".cardtwos").addClass("movefrombuttom");
            $(".cardthrees").addClass("movefromright");
        }else{
            $(".cardones").removeClass("movefromleft");
            $(".cardtwos").removeClass("movefrombuttom");
            $(".cardthrees").removeClass("movefromright");
        }
    });
})