window.addEventListener("load",twitter)
function twitter(){
    const h = document.body.clientWidth > 1200 ? document.getElementById("text").clientHeight : 500
    document.getElementById("twittercontents").setAttribute("data-height", `${h}px`)
}

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
