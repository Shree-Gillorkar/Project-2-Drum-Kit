//button press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  animation(event.key);
});
var drumButtonLen = document.querySelectorAll(".drum").length;

for (var i = 0; i <= drumButtonLen; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);
  })
};

//key press and make sound
function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "k":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      alert("wrong key");
  }
}

function animation(currentkey){
  var anim= document.querySelector("."+currentkey);
  anim.classList.add("pressed");
  setTimeout(function(){
    anim.classList.remove("pressed");
  },100);
}
