document.getElementById('currentyear').innerHTML = (new Date().getFullYear());

document.getElementById('lastModified').innerHTML = document.lastModified;

const temperature = 10;
const conditions = 'Partly Cloudy';
const wind = 5;

const table = document.createElement('table');

function addRow(key, value) {
    const tr = document.createElement('tr');
    table.appendChild(tr);

    const keyTd = document.createElement('td');
    tr.appendChild(keyTd);
    keyTd.classList.add('key');
    keyTd.innerText = key;

    const valueTd = document.createElement('td');
    tr.appendChild(valueTd);
    valueTd.classList.add('value');
    valueTd.innerText = value;
}

addRow('Temperature:', temperature + ' °C');
addRow('Conditions:', 'Partly Cloudy');
addRow('Wind:', wind + ' km/h');

function calculateWindChill(t, v) {
    if (t > 10) {
        return null;
    }
    if (v < 4.8) {
        return null;
    }

    const f = temperature * 9 / 5 + 32;
    const m = v / 1.609;

    const mm = Math.pow(m, 0.16);
    const chill = 35.74 + 0.6215 * f - 35.75 * mm + 0.4275 * f * mm;

    const c = (chill - 32) * 5 / 9;

    return c;
}

const wc = calculateWindChill(temperature, wind);
if (wc !== null) {
    addRow('Wind Chill:', wc.toFixed(1) + ' °C');
}

const weather = document.querySelector('.weather').appendChild(table);


