$.fn.popupModal = function (settings) {
    this.click(function () {
        settings.modal.addClass('open');
    });

    settings.modal.click(function() {
        settings.modal.removeClass('open');
    });
};