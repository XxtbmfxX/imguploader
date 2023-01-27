let dropZone = document.getElementById("drop-zone");
let button = document.getElementById("button");
let input = document.getElementById("image-input");
const Card = document.querySelector(".Main_card");
const mostrar = document.querySelector(".mostrar");
const oculto = document.querySelectorAll(".oculto");
const ore = document.querySelector(".ore");
const SelectButton = document.querySelector(".SelectButton");
const recomendation = document.querySelector(".recomendation");
const URL = document.querySelector(".URL");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  Card.classList.add("Main_card-drop");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  Card.classList.remove("Main_card-drop");
  //first droped file
  var file = e.dataTransfer.files[0];
  // Create an image element
  var img = document.createElement("img");
  var text = document.createElement("p");
  // Create a file reader
  var reader = new FileReader();
  // Add an event listener to the file reader to listen for the load event
  reader.addEventListener("load", function () {
    // Set the src of the image element to the result of the file reader
    img.src = reader.result;
    text.innerText = reader.result;
    Card.style.backgroundImage = `url(${img.src})`;
    Card.classList.add("Main_card-loaded");
    mostrar.style.display = "none";
    recomendation.style.display = "none";
    ore.style.display = "none";
    SelectButton.style.display = "none";
    oculto.forEach((e) => {
      e.style.display = "block";
    });
    URL.innerHTML = `${img.src}`;
  });
  // Read the file as data URL
  reader.readAsDataURL(file);

  // Append the image element to the body
});

input.addEventListener("change", function () {
  var reader = new FileReader();
  reader.onload = function () {
    var img = document.createElement("img");
    img.src = reader.result;
  };
  reader.readAsDataURL(input.files[0]);
});
