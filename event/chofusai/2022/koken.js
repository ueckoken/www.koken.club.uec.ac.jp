/*ハンバーガーメニューあれこれ*/
window.addEventListener("load",navmenu)
function navmenu(){
    const nav = document.getElementsByClassName('menucontents');
    for (const element of nav){
        element.addEventListener('click', checkout);
    }
}
function checkout(){
    document.getElementById("menu-btn-check").checked = false;
}
