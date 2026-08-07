// ===== Moti real i Shqipërisë (Open-Meteo, falas, pa API key) =====
// Përfshin qytetet kryesore + Kuçovën. Azhornon çdo 10 minuta.
const CITIES = [
    { name: 'Kuçova', lat: 40.8039, lon: 19.9167 },
    { name: 'Tirana', lat: 41.3275, lon: 19.8187 },
    { name: 'Durrës', lat: 41.3231, lon: 19.4414 },
    { name: 'Vlorë', lat: 40.4686, lon: 19.4831 },
    { name: 'Shkodër', lat: 42.0693, lon: 19.5129 },
    { name: 'Korça', lat: 40.6186, lon: 20.7808 },
    { name: 'Elbasan', lat: 41.1125, lon: 20.0822 },
    { name: 'Fier', lat: 40.7239, lon: 19.5564 },
    { name: 'Berat', lat: 40.7058, lon: 19.9522 },
    { name: 'Gjirokastër', lat: 40.0756, lon: 20.1389 }
];

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
    return `${w.icon} ${t}&deg;C`;
}

// ===== Strip i motit për qytetet =====
function ensureWeatherStrip() {
    if (document.getElementById('weather-strip')) return;
    const header = document.querySelector('.site-header');
    if (!header) return;
    const strip = document.createElement('div');
    strip.className = 'weather-strip';
    strip.id = 'weather-strip';
    strip.innerHTML = `
        <div class="weather-strip-label">Moti sot</div>
        <div class="weather-strip-cities">
            ${CITIES.map(() => '<div class="weather-city">-</div>').join('')}
        </div>
    `;
    header.after(strip);
}

async function updateWeather() {
    const els = document.querySelectorAll('.utility-weather');
    const strip = document.getElementById('weather-strip');

    try {
        const lat = CITIES.map(c => c.lat).join(',');
        const lon = CITIES.map(c => c.lon).join(',');
        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`,
            { headers: { 'Accept': 'application/json' } }
        );
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();

        CITIES.forEach((city, i) => {
            const d = data[i];
            if (!d || !d.current) return;
            const html = formatWeather(d.current.weather_code, d.current.temperature_2m);

            if (city.name === 'Kuçova') {
                els.forEach(el => el.innerHTML = `<strong>${city.name}</strong>: ${html}`);
            }

            const card = strip && strip.querySelectorAll('.weather-city')[i];
            if (card) {
                card.innerHTML = `
                    <span class="weather-city-name">${city.name}</span>
                    <span class="weather-city-cond">${html}</span>
                `;
            }
        });
    } catch (e) {
        console.warn('Moti nuk u azhornua:', e.message);
    }
}

ensureWeatherStrip();
updateWeather();
setInterval(updateWeather, WEATHER_INTERVAL_MS);
