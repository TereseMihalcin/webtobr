//console.log('stunk');
// https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame

var firstLeft = document.getElementById("first-left");
var secondLeft = document.getElementById("second-left");
var firstRight = document.getElementById("first-right");
var secondRight = document.getElementById("second-right");
var firstAhri = document.getElementById("first-ahri");
var secondAhri = document.getElementById("second-ahri");
var first = true;
var second = false;
var zoomie = document.getElementById("first-ahri");
var element = zoomie;
let start;
var score = document.getElementById("score");
var finalScore = 0;
var totalQuestions = 2;

function defineZoomie() {
  if(first == true) {
    var zoomie = document.getElementById("first-ahri");
  }else if(second == true) {
    
    var zoomie = document.getElementById("second-ahri");
  }
  return zoomie;
}

// defining the onclick functions
document.getElementById("start").onclick = startAnimation;
document.getElementById("next").onclick = startAnimation;
firstLeft.onclick = isCorrect;
secondLeft.onclick = isCorrect;
firstRight.onclick = isCorrect;
secondRight.onclick = isCorrect;


function step(timestamp) {
  
  var whichZoomie = defineZoomie();
  var element = whichZoomie;
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  // Math.min() is used here to make sure the Zoomie stops at exactly 200px
  const shift = Math.min(4.0 * elapsed, 2000);
  element.style.transform = `translateX(${shift}px)`;
  if (shift < 2000) {
    requestAnimationFrame(step);
  }
}

function startAnimation() {
  if(first){
    requestAnimationFrame(step);
    setTimeout(showQuestion, 2000);
  }else if(second){
    start = undefined;
    requestAnimationFrame(step);
    setTimeout(showQuestion, 2000);
  }
  
}

function showQuestion() {
  if(first){
    firstLeft.style.display = "block";
    firstRight.style.display = "block";
    firstLeft.classList.add("yellow");
    firstRight.classList.add("yellow");
  }else if(second){
    secondLeft.style.display = "block";
    secondRight.style.display = "block";
    secondLeft.classList.add("yellow");
    secondRight.classList.add("yellow");
  }
}

function hideQuestion() {
  firstLeft.style.display = "none";
  firstRight.style.display = "none";
}

function isCorrect() {
  var whichZoomie = defineZoomie();
    if(this.src == whichZoomie.src) {
      this.classList.add("green");
      this.classList.remove("yellow");
        alert("Yes!");
        finalScore++;
    }else{
      this.classList.add("red");
      this.classList.remove("yellow");
        alert("Nope!");
    }
    if(first){
      first = false;
      second = true;
      document.getElementById("next").removeAttribute("disabled");
      document.getElementById("start").setAttribute("disabled", true);
    }else if(second){
      second = false;
      document.getElementById("next").setAttribute("disabled", true);

      // end of the game
      showScore();
    }
    hideQuestion();
}

function showScore() {
  score.innerHTML = finalScore+"/"+totalQuestions+" correct!"; 
  score.removeAttribute("hidden");
}