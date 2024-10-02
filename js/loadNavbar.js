// loadNavBar.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/pages/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // Optional: Add functionality for the navbar burger button
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
            if ($navbarBurgers.length > 0) {
                $navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                    });
                });
            }

            // Sticky Navbar Functionality
            const navbar = document.querySelector('.navbar');
            const sticky = navbar.offsetTop;

            const handleScroll = () => {
                if (window.pageYOffset > sticky) {
                    navbar.classList.add('sticky');
                } else {
                    navbar.classList.remove('sticky');
                }
            };

            window.addEventListener('scroll', handleScroll);
        })
        .catch(error => console.error('Error loading navbar:', error));
});
