"use strict"


function getData(el) {
    let temp = el.getAttribute("data-row");
    let tempName = el.getAttribute("data-name");
    message.innerHTML = `${tempName } is in row #${temp}`;
}