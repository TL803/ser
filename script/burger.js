document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById('burgerButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    function openMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (burgerButton) {
        burgerButton.addEventListener('click', openMenu);
    }
    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', closeMenu);
    }

    document.addEventListener('click', (event) => {
        if (mobileMenu && mobileMenu.classList.contains('active') &&
            !event.target.closest('#mobileMenu') &&
            !event.target.closest('#burgerButton')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    function updateSelectClass(select) {
        if (select.value) {
            select.classList.add('has-value');
        } else {
            select.classList.remove('has-value');
        }
    }

    document.addEventListener('change', function (e) {
        if (e.target.classList.contains('brand')) {
            updateSelectClass(e.target);
        }
    });

    window.addEventListener('load', function () {
        document.querySelectorAll('.brand').forEach(function (select) {
            updateSelectClass(select);
        });
    });
});