window.addEventListener("load",twitter)
window.addEventListener("resize",twitter)
window.addEventListener("load",navmenu)

/*Twitterタイムライン格闘 with yuiくん*/
function twitter(){
    if (document.body.clientWidth > 1200){
        let h = document.getElementById("text").clientHeight;
        document.getElementById("twittercontents").setAttribute("data-height",h+"px")
    }
    else {
        document.getElementById("twittercontents").setAttribute("data-height","500px")
    }
}

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
