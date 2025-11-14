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
setInterval(updateClock, 1000);

// --- Theme toggle and persistence ---
(function(){
    const btn = document.getElementById('theme-toggle');
    const storageKey = 'theme-preference';

    if (!btn) return; // safety

    function applyTheme(theme){
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
            btn.textContent = '☀️ Light';
        } else {
            document.documentElement.classList.remove('dark');
            btn.textContent = '🌙 Dark';
        }
    }

    const saved = localStorage.getItem(storageKey);
    if(saved){
        applyTheme(saved);
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    btn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        const next = isDark ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(storageKey, next);
    });
})();