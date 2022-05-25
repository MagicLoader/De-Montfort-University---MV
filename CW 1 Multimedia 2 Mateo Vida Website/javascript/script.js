function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let sliderImages = document.querySelectorAll(".slide");
  arrowLeft = document.querySelector("#arrow-left");
  arrowRight = document.querySelector("#arrow-right");
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Init slider
function startSlide() {
  reset();

  
  sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function(){
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
    
  }
  slideRight();
});

startSlide();


function foodDisplayText1(){
  document.getElementById("text1").style.display = "block";
}

function foodDisplayText2(){
  document.getElementById("text2").style.display = "block";
}

function foodDisplayText3(){
  document.getElementById("text3").style.display = "block";
}

function foodDisplayText4(){
  document.getElementById("text4").style.display = "block";
}

function foodDisplayText5(){
  document.getElementById("text5").style.display = "block";
}

function foodDisplayText6(){
  document.getElementById("text6").style.display = "block";
}


