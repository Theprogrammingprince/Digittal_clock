function updateClock() {
    const zones = {
        nigeria: 'Africa/Lagos',
        uk: 'Europe/London',
        malaysia: 'Asia/Kuala_Lumpur'
    };

    for (const [country, timezone] of Object.entries(zones)){
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timezone
        }
    }
}