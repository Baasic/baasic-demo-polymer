// Sloth init
sloth({
    on: document.getElementsByClassName('fadein'),
    threshold: -100,
    callback: function(element){
        element.className += ' fadedin';
    }
});

// Detect scroll and resize header
// window.onscroll = function(e) {
//     var top  = window.pageYOffset || document.documentElement.scrollTop;
//     var header = document.querySelector(".header")
//     var headerHeight = header.clientHeight;
// };

// Navigation
var login = ".login";
var loginEl = document.querySelector(".login");
var cont = ".container";
var contEl = document.querySelector(".container");
var nav = ".login-toggle";
var navEl = document.querySelector(".login-toggle");

var toggleState = function (elem, one, two) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

navEl.onclick = function (e) {
    toggleState('.login', 'closed', 'open');
    toggleState('.container', 'push', 'pull');
    toggleState('.login-toggle', 'on', 'off');
    e.preventDefault();
    e.stopPropagation();
};

contEl.onclick = function () {
    if (loginEl.getAttribute('data-state') == 'open') {
        loginEl.setAttribute('data-state', 'closed')
        contEl.setAttribute('data-state', 'pull')
        navEl.setAttribute('data-state', 'off')
    }
};

// Tweens
$(function() {
    var heroMessage = $("#heroMessage"); 
    TweenLite.set($(".login"), {clearProps:"all"});
    TweenLite.to(heroMessage, 1.5, { opacity:1, ease:"Power4.easeInOut", delay:0.3} );
});
