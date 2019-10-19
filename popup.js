
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

document.addEventListener('DOMContentLoaded', function() {
    const status = document.getElementById('status');
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        const tabUrl = tabs[0].url;
        const url = new URL(tabUrl);
        const basename = url.pathname.split('/').pop().split('?')[0];

        copyToClipboard(basename);

        status.innerHTML = `URL basename <em>${basename}</em> has been copied to your clipboard`;
    });
}, false);