let photos = [];
let index = 0;

const img = document.getElementById("gallery-img");
const video = document.getElementById("gallery-video");
const caption = document.getElementById("gallery-caption");
const counter = document.getElementById("gallery-counter");

function showPhoto(i) {
    const p = photos[i];

    img.style.display = "none";
    video.style.display = "none";

    if (p.type === "video") {
        video.src = p.src;
        video.style.display = "block";
    } else {
        img.src = p.src;
        img.style.display = "block";
    }

    caption.textContent = p.caption;
    counter.textContent = `${i + 1} / ${photos.length}`;
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
