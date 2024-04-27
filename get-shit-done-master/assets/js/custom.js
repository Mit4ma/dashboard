var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    var opacityValue = scrollPosition / 170;
    $(".blur").css("opacity", opacityValue);
});
