/* =============== Autotyping Function ================= */
var i = 0;
var txt = 'Web Developer';
var speed = 200;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text-js").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    typeWriter();
}, false);