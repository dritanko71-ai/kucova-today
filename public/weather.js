// ===== Moti real i Kuçovës (Open-Meteo, falas, pa API key) =====
// Azhornon çdo 10 minuta.
const WEATHER_LAT = 40.8039;
const WEATHER_LON = 19.9167;
const WEATHER_INTERVAL_MS = 10 * 60 * 1000;

const WEATHER_CODES = {
    0: { text: 'i Kthjellët', icon: '&#9728;&#65039;' },
    1: { text: 'pjesërisht i vranët', icon: '&#9925;' },
    2: { text: 'i vranët', icon: '&#9925;' },
    3: { text: 'i mbuluar', icon: '&#9729;&#65039;' },
    45: { text: 'me mjegull', icon: '&#127788;&#65039;' },
    48: { text: 'me mjegull të ngricës', icon: '&#127788;&#65039;' },
    51: { text: 'me shi të imët', icon: '&#127783;&#65039;' },
    53: { text: 'me shi të imët', icon: '&#127783;&#65039;' },
    55: { text: 'me shi të imët', icon: '&#127783;&#65039;' },
    61: { text: 'me shi të lehtë', icon: '&#127783;&#65039;' },
    63: { text: 'me shi', icon: '&#127783;&#65039;' },
    65: { text: 'me shi të fortë', icon: '&#127783;&#65039;' },
    80: { text: 'me rrebesh shiu', icon: '&#127783;&#65039;' },
    81: { text: 'me rrebesh shiu', icon: '&#127783;&#65039;' },
    82: { text: 'me rrebesh të fortë', icon: '&#127783;&#65039;' },
    95: { text: 'me stuhi', icon: '&#9928;&#65039;' },
    96: { text: 'me stuhi dhe breshër', icon: '&#9928;&#65039;' },
    99: { text: 'me stuhi dhe breshër', icon: '&#9928;&#65039;' }
};

function formatWeather(code, temp) {
    const w = WEATHER_CODES[code] || { text: 'i Kthjellët', icon: '&#9728;&#65039;' };
    const t = Math.round(temp);
    return `${w.icon} ${w.text} &middot; ${t}&deg;C`;
}

async function updateWeather() {
    const el = document.querySelector('.utility-weather');
    if (!el) return;
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${WEATHER_LAT}&longitude=${WEATHER_LON}&current=temperature_2m,weather_code&timezone=auto`, {
            headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        el.innerHTML = formatWeather(data.current.weather_code, data.current.temperature_2m);
    } catch (e) {
        console.warn('Moti nuk u azhornua:', e.message);
    }
}

updateWeather();
setInterval(updateWeather, WEATHER_INTERVAL_MS);
