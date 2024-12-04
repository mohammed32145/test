function down() {
    var caption = document.querySelector('#home .caption');
    var captionIcon = document.querySelector('.social-icon');

    var computedCaptionStyle = window.getComputedStyle(caption);
    var computedCaptionIconStyle = window.getComputedStyle(captionIcon);

    if (window.innerWidth <= 992) {
        if (computedCaptionStyle.marginTop === '200px' && computedCaptionIconStyle.marginBottom === '15px') {
            caption.style.marginTop = '0';
            captionIcon.style.marginBottom = '0';
        } 
        else if (computedCaptionStyle.marginTop === '0px' && computedCaptionIconStyle.marginBottom === '0px') {
            caption.style.marginTop = '200px';
            captionIcon.style.marginBottom = '15px';
        }
    } else {
        // When the screen width is greater than 992px
        caption.style.marginTop = '0';
        captionIcon.style.marginBottom = '0';
    }
}




