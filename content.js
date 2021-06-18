document.arrive(".chat-line__message", function() {
    var $msgElem = $(this);
    if($msgElem.text().trim().split(" ").length <= 2) {
        $msgElem.hide();
    }
});
