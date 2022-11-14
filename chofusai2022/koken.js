window.addEventListener("load",navmenu)

let hamburger;
let nav;
/*ハンバーガーメニューあれこれ*/
function navmenu(){
    hamburger = document.getElementById("menu-btn-check");
    nav = document.getElementsByClassName('menucontents');
    for(let i=0; i<nav.length; i++){
        nav[i].addEventListener('click', checkout);
    }
}
function checkout(){
    document.getElementById("menu-btn-check").checked = false;
}
