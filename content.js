function onlyUnique(value, index, self) {
    // Don't count common/meme words
    if (['', 'lol', 'lulw', 'lmao', 'omg', 'kekw', 'kekew', 'omegalul', 'pog', 'monkaw', 'pog', 'poggers', 'pepelaugh', 'rip'].includes(value)) {
        return false;
    }
    // Don't count single character words
    if (value.length === 1) {
        return false;
    }
    // Don't count numbers
    if (/^\d+$/.test(value)) {
        return false;
    }
    // Don't count @mentions
    if (value.charAt(0) === '@') {
        return false;
    }
    // Don't count duplicate words
    return self.indexOf(value) === index;
}

// Remove single word or emote-only messages
document.arrive(".chat-line__message", function() {
    var $msgElem = $(this);
    var msgWords = $msgElem.text().trim().toLowerCase().split(" ").filter(onlyUnique);
    if(msgWords.length <= 2 || msgWords[0] === 'boga_bot:') {
        $msgElem.hide();
        console.log($msgElem.text().trim());
    }
});

// Hide subs / resubs
document.arrive(".user-notice-line", function() {
    $(this).hide();
});

// Hide stupid leaderboard thing above chat
document.arrive(".channel-leaderboard", function() {
    $(this).hide();
});
