$(function () {
    var body = $("body");
    var nav = body.find(">header>nav");
    var tabs = body.find("nav-tabs");
    var offset= -120;
    var characters = body.find("#characters");
    var charModal = body.find("#char-modal-backdrop");

    tabs.find("li a")
        .click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        });

    nav.find("li a")
        .linkScroller({ 
            offset: offset
        })
        .scrollNav({
            offset: offset
        });

    characters.find(".row .char-section .char-block")
        .popupModal({
            modal: charModal
        });
});