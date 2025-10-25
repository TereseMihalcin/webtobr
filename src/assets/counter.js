
console.log('test');


var ahri = '../assets/sitting.png';
console.log('test');
// const imageContainer = document.getElementById("seconds");
// console.log("trs"+imageContainer);
// imageContainer.innerHTML = `<img src=${ahri} alt="sitting ahri">`;

let images = ['/sitting.png', '/meow.png', '/crazy.png'];

let index = 0;
const imgElement = document.querySelector('#seconds');

// console.log(imgElement);

function change() {
  imgElement.src = images[index];
  index > 1 ? index = 0 : index++;
}

window.onload = function () {
   setInterval(change, 1000);
};


