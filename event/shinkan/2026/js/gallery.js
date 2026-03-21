let photos = [];
let index = 0;

const img = document.getElementById("gallery-img");
const caption = document.getElementById("gallery-caption");

function showPhoto(i) {
    const p = photos[i];
    img.src = p.src;
    caption.textContent = p.caption;
}

fetch("data/gallery.json")
    .then(r => r.json())
    .then(data => {
        photos = data.photos;
        showPhoto(index);
    });

document.getElementById("next").onclick = () => {
    index = (index + 1) % photos.length;
    showPhoto(index);
};

document.getElementById("prev").onclick = () => {
    index = (index - 1 + photos.length) % photos.length;
    showPhoto(index);
};

function showPhoto(i) {

    img.style.opacity = 0;

    setTimeout(() => {
        const p = photos[i];
        img.src = p.src;
        caption.textContent = p.caption;
        img.style.opacity = 1;
    }, 150);

}