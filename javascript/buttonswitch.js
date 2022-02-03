let switch_button = document.querySelector('#jesees');
let switch_button2 = document.querySelector('#jeblind')

switch_button.addEventListener('mouseover', mouseOver);
switch_button.addEventListener('mouseout', mouseOut);
switch_button2.addEventListener('mouseover', mouseOver2);
switch_button2.addEventListener('mouseout', mouseOut2);

function mouseOver() {
    switch_button.src = "img/jesus.png"
}

function mouseOut() {
    switch_button.src = "img/ios.svg"
}

function mouseOver2() {
    switch_button2.src = "img/jesus.png"
}

function mouseOut2() {
    switch_button2.src = "img/android.svg"
}