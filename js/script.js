var header_element_scroll_class = "condensed";

function init() {
    window.addEventListener('scroll', function(e){
        var header = document.querySelector("header");
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = header.scrollHeight;
        if (distanceY > shrinkOn) {
            header.className = header_element_scroll_class;
        } else {
            if (header.className == header_element_scroll_class) {
              header.className = "";
            }
        }
    });
}
window.onload = init();
