$.fn.popupModal = function (settings) {
    var closeButton = settings.modal.find(".close");

    this.click(function () {
        settings.modal.addClass('open');
    });

    closeButton.click(function() {
        settings.modal.removeClass('open');
    });

    settings.modal.click(function() {
        return false;
    });

    return this;
};