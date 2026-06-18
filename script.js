document.addEventListener('DOMContentLoaded', function() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            var windowHeight = window.innerHeight;
            var elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 150) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", reveal);
    reveal();
});
