function openURL (url) {
    window.open("https://" + url, '_blank').focus();
}

window.onload = (event) => {
    document.getElementById("p_intro").innerHTML = `Hello there, my name is Paul Thomas and I'm ${moment().diff('2007-07-08', 'years')} years old.<br>I design video games and other digital media.`;
    if($(window).width() < $(window).height()) {
        document.getElementById("box_main").style.display = "none";
        document.getElementById("box_alt").style.display = "block";
    } else {
        document.getElementById("box_main").style.display = "block";
        document.getElementById("box_alt").style.display = "none";
    }

    const horizontal_elements = document.getElementsByClassName("horizontal");
    const media_entries = ["THE NEW APARTMENT", "BACKROOMS FOUND FOOTAGE", "TURKEY TERMINATOR", "PROJECTED RAYMARCHING"]
    const media_string = media_entries.join(' / ') + ' /&nbsp';

    for (const element of horizontal_elements) {
        element.innerHTML = media_string;
    }

}

window.onresize = (event) => {
    if($(window).width() < $(window).height()) {
        document.getElementById("box_main").style.display = "none";
        document.getElementById("box_alt").style.display = "block";
    } else {
        document.getElementById("box_main").style.display = "block";
        document.getElementById("box_alt").style.display = "none";
    }
}