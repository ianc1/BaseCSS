

(function() {

    var isMobileSafari = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/);
    
    var openMenu = null;

    if (isMobileSafari) {
        document.addEventListener('touchstart', dropdown);
    }

    function dropdown(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;

        // Check if menu button click.
        var isButtonClick = target.matches('.dropdown > button') 
            || target.parentNode.matches('.navbar > button');

        if (isButtonClick) {
            var menu = target.parentNode.querySelector('.dropdown-menu')
                || target.parentNode.parentNode.querySelector('.nav-collapse');

            // Close open menus first.
            if (openMenu && openMenu !== menu) {
                toggleMenu(openMenu);

            // Dont close current menu on second button click.
            } else if (openMenu) {
                return;
            }

            // Open clicked menu.
            toggleMenu(menu);
            openMenu = menu;

        // Close open menu on background click.
        } else if (openMenu) {
            toggleMenu(openMenu);
            openMenu = null;
        }
    }

    function toggleMenu(menu) {
        menu.classList.toggle('show');
    }

})();
