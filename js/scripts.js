$(document).ready(() => {
    initToggle('map');
    initToggle('route');
    $('.slider').responsiveSlides({
        auto: false,
        nav: true,
        prevText: "<i class='fa fa-arrow-circle-down'></i>",
        nextText: "<i class='fa fa-arrow-circle-up'></i>"
    });
})


const initToggle = key => {
    let handle = $(`#${key}-handle`),
        container = $(`#${key}-container`);


    handle.click(() => {
        container.toggle();

        if(container.is(':visible')) {
            handle.text('Спрятать');
        } else {
            handle.text('Показать')
        }
    })
}
