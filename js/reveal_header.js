window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 20) {
        document.getElementById("change_opacity").style.opacity="100";
        document.getElementById("change_padding").style.padding="5px 0 5px 10%";
    } else {
        document.getElementById("change_opacity").style.opacity="0";
        document.getElementById("change_padding").style.padding="5px 0 5px 30%";
    }
}