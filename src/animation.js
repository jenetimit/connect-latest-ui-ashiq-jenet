VanillaTilt.init(document.querySelectorAll(".pakage-div-two,.pakage-div-three"),{
    max: 3,
    speed: 40,
    glare : true,
    "max-glare":1,
});


$(window).on("scroll", function(){
    //console.log("scrolltop",$(window).scrollTop());
    //console.log("height",$(window).height());
    //console.log("linechart top:",$(".line-chart").offset().top);
    if($(".statistics-row").offset().top - $(window).scrollTop() < $(window).height()/2 - 200 ){
        //alert("On viewport");
        $(".statistics-row").addClass("anim");
    }
});