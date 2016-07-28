$(document).ready(() => {
    initToggle('map');
    initToggle('route');
})


initToggle = key => {
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