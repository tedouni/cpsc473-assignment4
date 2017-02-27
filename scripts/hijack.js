function addLinkClickHandler() {
    'use strict';
    addEventListener('click', function(event) {
        event.preventDefault();
    });
}

function getLinksArray() {
    'use strict';
    //link tag = 'a'
    var link = document.getElementsByTagName('a');
    var linkArray = [].slice.call(link);

    return linkArray;
}

function initializeEvents() {
    'use strict';

    var links = getLinksArray();

    links.forEach(addLinkClickHandler);
}

initializeEvents();

//tested using snippet in developer's tools
