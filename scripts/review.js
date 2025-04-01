document.getElementById('currentyear').innerHTML = (new Date().getFullYear());

document.getElementById('lastModified').innerHTML = document.lastModified;

const key = "count";
var count = parseInt(localStorage.getItem(key)) || 0;

count++;

localStorage.setItem(key, count);

document.getElementById("count").innerText = `${count} Reviews`;
