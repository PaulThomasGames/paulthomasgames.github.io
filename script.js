const background_url_prefix = "assets/bgs/background_";

window.addEventListener("load", (event) => {
    $("#asset_title").css('opacity', '0');
    $("#asset_petals").css('opacity', '0');

    $("#asset_title").attr('draggable', 'false');
    $("#asset_petals").attr('draggable', 'false');

    $("#background_image").attr('draggable', 'false');
    $("#background_video").attr('draggable', 'false');

    $("#asset_petals").on("animationstart", function(){
        $("#asset_petals").css('opacity', '1');
    })

    $("#asset_title").on("animationstart", function(){
        $("#asset_title").css('opacity', '1');
    })

    $("#social_box").css("opacity",0);
    $("#arrow_hint").css("opacity",0);
    $("#background_video").trigger("play");
    scrollWin();

    setTimeout(()=>{
        $("#asset_petals").addClass("logo_anim");
        $("#asset_title").addClass("logo_anim");

        setTimeout(()=>{$("#asset_petals").removeClass("logo_anim"); $("#asset_title").removeClass("logo_anim"); $("#asset_petals").addClass("can_hover")},2400);

        $("#asset_petals").removeClass("logo_base");
        $("#asset_title").removeClass("logo_base");
        $("#social_box").animate({"opacity":1},2000);
        $("#social_box").addClass("socials_anim");
        scrollWin();
    }, 400);

    setTimeout(()=>{
        $("#background_video").addClass("animate_video");
        $("#background_video").removeClass("hide_video");
        $("#dark_cover").addClass("hide_cover");
        $("#dark_cover").hide();
        document.getElementById("background_video").currentTime = 3;
        scrollWin();
    }, 100);

    setTimeout(()=>{$("#arrow_hint").animate({"opacity":0.5},800);}, 2400);
});

var current_bg = 0;

$(window).scroll(scrollWin);
    
function scrollWin(){

    $('.fade').each( function(i){
        var half_of_object = $(this).offset().top + $(this).outerHeight() *0.5;
        var half_of_window = $(window).scrollTop() + $(window).height() * 0.5;

        var diff = half_of_object - half_of_window;
        var dist = $(window).height() * 0.650;
        var skw_fac = dist / 4;
        var skw = (-(Math.min(Math.sign(-diff),0)+1)) * skw_fac;
        var opac = Math.max(-Math.pow(diff / (dist + skw), 2) + 1, 0);

        var dist_2 = $(window).height() * 0.15;
        var tlate_fac = 5;
        var tlate = (2 / (1 + Math.pow(Math.E, -diff/dist_2)) - 1) * tlate_fac;

        if(i == 0) {
            console.log(opac);
            $("#background_video").css('opacity', opac);
        }

        // var top_of_object_b = $(this).offset().top;
        // var frac_of_window_1_b = $(window).scrollTop() + $(window).height() * 0.5;
        // var frac_of_window_2_b = $(window).scrollTop() + $(window).height() * -0.25;

        // if( frac_of_window_1_b > top_of_object_b && frac_of_window_2_b < top_of_object_b){
        //     // $("#background_image").css('transform', `translateY(${-diff/100}vh)`);
        // }

        $(this).css('transform', `translateY(${-tlate}vh)`);
        $(this).css('opacity', opac);

    });

    $('.fade').each( function(j){
        var top_of_object = $(this).offset().top;
        var frac_of_window_1 = $(window).scrollTop() + $(window).height() * 0.5;
        var frac_of_window_2 = $(window).scrollTop() + $(window).height() * -0.25;

        if( frac_of_window_1 > top_of_object && frac_of_window_2 < top_of_object){

            if(j != current_bg) {
                current_bg = j;
                $('#background_image').css("background-image", `url(${background_url_prefix + j.toString()}.png)`);
                console.log('switch');
            }
            
        }
    }); 
}

$(window).scroll();


function openURL(url) {
    window.open("https://" + url, '_blank').focus();
}

function clickFlower() {
    if($("#asset_petals").hasClass("logo_base")){return};
    if($("#asset_petals").hasClass("logo_anim")){return};
    if($("#asset_petals").hasClass("spin_flower")){return};
    var tmp = document.createElement("input");
    document.body.appendChild(tmp);
    tmp.focus();
    document.body.removeChild(tmp);
    window.scrollTo(0,0);
    $("#asset_petals").addClass("spin_flower");
    setTimeout(()=>{$("#asset_petals").removeClass("spin_flower"); $("#asset_petals").addClass("can_hover")},1300)
    console.log("Press");
}