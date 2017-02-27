var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;
var ONE_KEY = 49;
var TWO_KEY = 50;
var THREE_KEY = 51;
var FOUR_KEY = 52;
var FIVE_KEY = 53;
var SIX_KEY = 54;
var SEVEN_KEY = 55;
var EIGHT_KEY = 56;
var NINE_KEY = 57;
var THUMBNAIL_COUNT = 0;
var thumbnails;

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;

}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        //console.log(event.keyCode);
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        }
        if (event.keyCode === ONE_KEY) {
            if (0 < THUMBNAIL_COUNT) {
                setDetailsFromThumb(thumbnails[0]);
            }
        }
        if (event.keyCode === TWO_KEY) {
            if (1 < THUMBNAIL_COUNT) {
                setDetailsFromThumb(thumbnails[1]);
            }
        }
        if (event.keyCode === THREE_KEY) {
            if (2 < THUMBNAIL_COUNT) {
                setDetailsFromThumb(thumbnails[2]);
            }(thumbnails[2]);
        }
        if (event.keyCode === FOUR_KEY) {
            if (3 < THUMBNAIL_COUNT) {
                setDetailsFromThumb(thumbnails[3]);
            }(thumbnails[3]);
        }
        if (event.keyCode === FIVE_KEY) {
            if (4 < THUMBNAIL_COUNT) {
                setDetailsFromThumb(thumbnails[4]);
            }(thumbnails[4]);
        }
        if (event.keyCode === SIX_KEY) {
            if (5 < THUMBNAIL_COUNT) {
                setDetailsFromThumb(thumbnails[5]);
            }
        }
        if (event.keyCode === SEVEN_KEY) {
            if (6 < THUMBNAIL_COUNT) {
                setDetailsFromThumb(thumbnails[6]);
            }
        }
        if (event.keyCode === EIGHT_KEY) {
            if (7 < THUMBNAIL_COUNT) {
                setDetailsFromThumb(thumbnails[7]);
            }
        }
        if (event.keyCode === NINE_KEY) {
            if (8 < THUMBNAIL_COUNT) {
                setDetailsFromThumb(thumbnails[8]);
            }
        }

    });
}

function initializeEvents() {
    'use strict';
    thumbnails = getThumbnailsArray();
    THUMBNAIL_COUNT = thumbnails.length;
    //console.log(THUMBNAIL_COUNT)
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();
