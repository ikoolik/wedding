$(document).ready(function () {
    initToggle('map');
    initToggle('route');
    $('.slider').responsiveSlides({
        auto: false,
        nav: true,
        prevText: "<i class='fa fa-arrow-circle-down'></i>",
        nextText: "<i class='fa fa-arrow-circle-up'></i>"
    });
})


function initToggle (key) {

    var handle = $(`#${key}-handle`),
        container = $(`#${key}-container`);


    handle.click(function () {
        container.toggle();

        if(container.is(':visible')) {
            handle.text('Спрятать');
        } else {
            handle.text('Показать')
        }
    })
}
