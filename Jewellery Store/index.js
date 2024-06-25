document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var elementsToShow = document.querySelectorAll('.animate-left, .animate-right');
        
        elementsToShow.forEach(function (element) {
            var elementPosition = element.offsetTop;
            if (scrollPosition > elementPosition - window.innerHeight / 1.5) {
                element.classList.add('animate-visible');
            }
        });
    });
});
