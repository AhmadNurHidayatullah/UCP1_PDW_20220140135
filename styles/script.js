
function updateDateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();


    var meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    var date = now.toDateString();

    var waktuElement = document.getElementById('waktu');
    waktuElement.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + meridiem + '<br>' + date;

    setTimeout(updateDateTime, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    updateDateTime();
});


