const says = document.querySelector('#says');

function change() {

  // fade out
  var intervalID = setInterval(function () {
    if (!says.style.opacity) {
        says.style.opacity = 1;
    }
    if (says.style.opacity > 0) {
        says.style.opacity -= 0.1;
    }
    else {
        clearInterval(intervalID);
    }
  }, 200);

  // fade in
  setTimeout(() => {  
    says.innerHTML = 'He means Happy Halloween'; 
    var opacity = 0;

    var intervalID = setInterval(function() {
  
        if (opacity < 1) {
            opacity = opacity + 0.1
            says.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
    setTimeout(() => {  
      says.innerHTML = 'Jeff says reaaaahhh'; 
    }, 4000);
  }, 2100);

  says.style.opacity = 1;

}
says.addEventListener('click', change);


