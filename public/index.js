// jshint esversion:6

// expand and shrink project images
let img1 = document.querySelector(".project1 img"),
    img2 = document.querySelector(".project2 img"),
    backgroundImage = document.querySelector(".background-image");

onHover(img1);
onHover(img2);
changeBackground(backgroundImage);

// console.log(typeof(img1));

function onHover(item) {
  item.onmouseover = () => enlarge(item);
  item.onmouseout = () => shrink(item);
}
function enlarge (x) {
  x.style.width = "110%";
  x.style.marginLeft = "0px";
}
function shrink(y) {
  y.style.width = "100%";
}

function changeBackground(image) {
  image.onmouseover = () => {
    image.src = "Photos/tree3.png";
  };
  image.onmouseout = () => {
    image.src = "Photos/tree-background.png";
  };
  image.onclick = () => {
    image.src = "Photos/tree2.png";
  };
}
