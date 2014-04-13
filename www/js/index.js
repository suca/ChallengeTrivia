
startGame = function () {
    alert("You started the game");
    Reveal.next();
};
goToSlide = function (layer) {
    Reveal.slide(layer);
};
setTimeout(function() {
    jQuery(".layout-loading").css("display","none");    
}, 5000);
