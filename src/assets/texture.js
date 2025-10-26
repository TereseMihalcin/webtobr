const imgElement = document.querySelector('#circle');
document.getElementById("rusty").onclick = rusty;
document.getElementById("metal").onclick = metal;
document.getElementById("rocks").onclick = rocks;
document.getElementById("brick").onclick = brick;

function rusty() {
  imgElement.src = "/textureMetal056C.png";
}
function metal() {
  imgElement.src = '/textureMetal055A.png';
}
function rocks() {
  imgElement.src = "/textureRocks007.png";
}
function brick() {
  imgElement.src = "/texturePavingStones123.png";
}


