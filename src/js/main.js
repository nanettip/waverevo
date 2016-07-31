$(function () {
    var body = $("body");
    var tabs = body.find("nav-tabs");

    tabs.find("li a")
        .click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        });
});