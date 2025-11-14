function updateClock() {
    const zones = {
        Nigeria: 'Africa/Lagos',
        UK: 'Europe/London',
        Malaysia: 'Asia/Kuala_Lumpur'
    };

    for (const [country, timezone] of Object.entries(zones)){
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone:  timezone
        }

        const timeString = now.toLocaleTimeString("en-GB", options);
        document.getElementById(`time${country}`).textContent = timeString;
    }
}

updateClock();
setInterval(updateClock, 1000);x