
(function() {

    var isMobileSafari = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/);

    var openMenu = null;

    document.addEventListener('click', dropdown);

    if (isMobileSafari) {
        document.addEventListener('touchstart', dropdown);
    }

    function dropdown(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;

        // Check if menu button click.
        var isButtonClick = target.matches('.dropdown > button') 
            || target.parentNode.matches && target.parentNode.matches('.navbar > button');

        if (event.type === 'click' && isButtonClick) {
            var menu = target.parentNode.querySelector('.dropdown-menu')
                || target.parentNode.parentNode.querySelector('.nav-collapse');

            // Close other open menus first.
            if (openMenu && openMenu !== menu) {
                toggleDropdownMenu(openMenu);
            }

            // Open/Close clicked menu.
            toggleDropdownMenu(menu);
            openMenu = openMenu !== menu ? menu : null;
        }

        // Close open menu on menu item or background click. 
        // On mobile Safari a background click must be handled with the touchstart event.
        else if (event.type === 'click' && openMenu 
                || openMenu && isMobileSafari && !isButtonClick && !openMenu.contains(target)) {
            toggleDropdownMenu(openMenu);
            openMenu = null;
        }

        return true;
    }

    function toggleDropdownMenu(menu) {
        menu.classList.toggle('show');
    }

})();
