
// Current Date & Time
function updateClock() {
    const now = new Date();

    // Format Options
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    // Update Card Text
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, dateOptions);
    document.getElementById('time').textContent = now.toLocaleTimeString(undefined, timeOptions);
}

// Run immediately, then repeat every 1000ms (1 second)
updateClock();
setInterval(updateClock, 1000);




// Ticker
$(document).ready(function () {

    var $ticker = $('#newsTicker');
    var $tickerContents = $ticker.html();
    $ticker.append($tickerContents);
});