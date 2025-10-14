function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        var discordText = document.getElementById('discord-text');
        var originalText = discordText.innerText;
        discordText.innerText = 'Copied!';
        setTimeout(function() {
            discordText.innerText = originalText;
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
