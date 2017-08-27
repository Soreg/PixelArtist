var colorPicked = "FF0000";
var colors = document.getElementsByClassName("userColor");
var picker = document.getElementById("colorPicker");
var pixels = document.getElementsByClassName("pixel");
var remove = document.querySelector("#remove");
//console.log(selects.length);
//alert(window.getComputedStyle(document.getElementById('colorPosition2'),null).getPropertyValue('background'));
function draw() {
  function changeSize() {
    var val = document.getElementById("pixelSize").value;
    drawPixels(val);
  }

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

  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function() {
      colorPicked = window.getComputedStyle(this, null).getPropertyValue("background-color");
    });
  }

  for (var i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('mousedown', function() {
      this.style.backgroundColor = colorPicked;
    });
  }

  remove.addEventListener('click', function() {
    for (var i = 0; i < pixels.length; i++) {
      pixels[i].style.backgroundColor = "#FFF";
    }
  })

  picker.addEventListener("change", watchColorPicker, false);
  function watchColorPicker(event) {
    colorPicked = picker.value;
  }
}

draw();
