/*ハンバーガーメニューあれこれ*/
window.addEventListener("load",navmenu)
function navmenu(){
    nav = document.getElementsByClassName('menucontents');
    for(let i=0; i<nav.length; i++){
        nav[i].addEventListener('click', checkout);
    }
}
function checkout(){
    document.getElementById("menu-btn-check").checked = false;
}
