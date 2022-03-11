window.transitionToRPage = function(href) {
    document.querySelector('body').style.animation = "slideOutR 1s";
    setTimeout(function() {
        window.location.href = href
    }, 300)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.animation = "slideInR 1s";
});

window.transitionToLPage = function(href) {
    document.querySelector('body').style.animation = "slideOutL 1s";
    setTimeout(function() {
        window.location.href = href
    }, 300)
}

function pageScroll() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
}
