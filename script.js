function showTime() {
	const options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true, // Use 12-hour format if you want
    };
    
    const currentTime = new Date().toLocaleString('en-US', options);
    document.getElementById('currentTime').innerHTML = `${currentTime} (Los Angeles time)`;
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
