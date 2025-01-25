/*

Archivo (Omnibus-Type) is licensed under the SIL Open Font License, Version 1.1.

Funnel Sans (Dicotype) is licensed under the SIL Open Font License, Version 1.1.

Bootstrap (The Bootstrap Authors) is licensed under the MIT License.

https://openfontlicense.org

https://github.com/twbs/bootstrap/blob/v5.3.3/LICENSE

*/


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