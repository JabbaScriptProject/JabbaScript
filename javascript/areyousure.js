let cont = document.querySelector("#continue");
let sure = false;

cont.addEventListener('click', jegus);

function jegus() {
    if (sure == false) {
        cont.innerHTML = "are you sure?";
        sure = true;
    } else {
        window.open("https://irritant.nikirakoon.nl/main.html", "_self");
    }
}

