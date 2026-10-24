function updateDateTime() {
    const date = new Date();
    const update = date.toLocaleString();
    document.getElementById('dateTime').innerHTML = update;
}
updateDateTime();
setInterval(updateDateTime, 1000);