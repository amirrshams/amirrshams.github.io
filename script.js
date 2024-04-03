document.addEventListener("DOMContentLoaded", function() {
    // Initially make the first section active
    document.querySelector('.section').classList.add('active');

    window.addEventListener('scroll', () => {
        let sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            let rect = section.getBoundingClientRect();
            let topDistance = window.innerHeight / 3;

            if (rect.top <= topDistance && rect.bottom >= topDistance) {
                section.classList.add('active');
                if (index > 0) {
                    sections[index - 1].classList.remove('active');
                }
                if (index < sections.length - 1) {
                    sections[index + 1].classList.remove('active');
                }
            }
        });
    });
});