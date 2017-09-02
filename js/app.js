var colorPicked = "rgb(255, 0, 0)";
var colors = document.getElementsByClassName("userColor");
var picker = document.getElementById("colorPicker");
var pixels = document.getElementsByClassName("pixel");
var remove = document.querySelector("#remove");
var addColor = document.getElementById("addColorBtn");
var customColors = document.getElementById("customs");
var drawing = false;
// Initial function
function draw() {
  // Run function to change color
  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", selectedColor())
  }

  // Change size (number of pixels)
  function changeSize() {
    var val = document.getElementById("pixelSize").value;
    drawPixels(val);
  }

  // Draws pixels based on size
  function drawPixels(val) {
    var element = document.querySelector(".pixelContainer");
    element.innerHTML = "";
    var pixel;
    if (val === "large") {
      for (var i = 0; i < 100; i++) {
        pixel = document.createElement("div");
        pixel.className = "pixel pixelLarge";
        element.appendChild(pixel);
      }
    } else if (val === "medium") {
      for (var i = 0; i < 400; i++) {
        pixel = document.createElement("div");
        pixel.className = "pixel pixelMedium";
        element.appendChild(pixel);
      }
    } else {
      for (var i = 0; i < 1600; i++) {
        pixel = document.createElement("div");
        pixel.className = "pixel pixelSmall";
        element.appendChild(pixel);
      }
    }
  }

  changeSize();

  // Changes color to colorpicker
  picker.addEventListener("change", watchColorPicker, false);
  function watchColorPicker(event) {
    colorPicked = picker.value;
  }
  // Changes color of pixels
  for (var i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('mousedown', function() {
      this.style.backgroundColor = colorPicked;
    });
  }

 // Removes / resets canvas
  remove.addEventListener('click', function() {
    remove.style.margin = "40px auto 40px auto";
    for (var i = 0; i < pixels.length; i++) {
      pixels[i].style.backgroundColor = "#FFF";
      customColors.innerHTML = "";
    }
  })

  //Draw
  for (var i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", function() {
      if (drawing) {
        this.style.background = colorPicked;
      }
    });
  }
}
// Initial call
draw();

document.body.addEventListener("mousedown", function() {
  drawing = true;
})
document.body.addEventListener("mouseup", function() {
  drawing = false;
})

// Changes selected color
function selectedColor() {
  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function() {
      colorPicked = window.getComputedStyle(this, null).getPropertyValue("background-color");
    });
  }
}

// Add customs colors
addColor.addEventListener("click", function() {
  if (colors.length < 17) {
    remove.style.margin = "90px auto 30px auto";
    var customColor = document.createElement("div");
    customColor.className = "userColor";
    customColor.style.background = picker.value;
    customColors.appendChild(customColor);
    selectedColor();
    console.log(colors.length);
  } else {
    console.log("Too many colors");
  }
})
