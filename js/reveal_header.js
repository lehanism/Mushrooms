window.onscroll = function() {
    if (document.body.scrollTop > 500) {
        document.getElementById("change_opacity").style.opacity="100";
        document.getElementById("change_padding").style.padding="5px 0 5px 10%";
    } else {
        document.getElementById("change_opacity").style.opacity="0";
        document.getElementById("change_padding").style.padding="5px 0 5px 30%";
    }

    if (document.body.scrollTop > 700) {
        document.getElementById("reveal_htext").style.opacity="100";
    } else {
        document.getElementById("reveal_htext").style.opacity="0";
    }
}