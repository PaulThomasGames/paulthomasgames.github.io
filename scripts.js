function openURL (url) {
    window.open("https://" + url, '_blank').focus();
}

const rotations = [0, 0, 90, 270];

window.onload = (event) => {
    var randomRotSelection = Math.floor(Math.random() * rotations.length)
    document.documentElement.style.filter = `hue-rotate(${rotations[randomRotSelection]}deg)`;
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