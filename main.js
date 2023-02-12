function setBackgroundColor(elementID) {
    document.getElementById(elementID).style.backgroundColor = '#b0a1b3';
    document.getElementById(elementID).style.color = '#F3E7B8';
};


function setMenuActive () {
    const currentURL = document.URL;
    const regexExp = /(?<=cheatsheet\/)([a-z]*)(?=\.html)/;
    const elementID = 'side-menu-' + currentURL.match(regexExp)[0];
    setBackgroundColor(elementID);
};
setMenuActive();

const increaseTextSize = function(event) {
    event.target.id = "menu-box-mouseover";
}

const restoreText = function(event) {
    event.target.id = "";
}

menuBox = document.getElementsByClassName('box');
for (box of menuBox) {
    box.addEventListener('mousemove', increaseTextSize,);
    box.addEventListener('mouseout', restoreText)
}



