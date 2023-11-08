import Header from "./companents/header.js";
import Jumbotron from "./companents/jumbotron.js";
import PageContent from "./companents/page-content.js";
import Footer from "./companents/footer.js";
import InfoModal from "./companents/infoModal.js";

function render() {
  document.getElementById("header").innerHTML = Header();
  document.getElementById("jumbotron").innerHTML = Jumbotron();
  document.getElementById("main").innerHTML = PageContent();
  document.getElementById("footer").innerHTML = Footer();
}

render();

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = btn.addEventListener("click", function () {
  document.getElementById("modalMain").innerHTML = InfoModal();
  let modal = document.getElementById("myModal");
  document.getElementById('content').style.overflowY="hidden";
  modal.style.display = "block";
  document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
    document.getElementById('content').style.overflowY="visible";
  });
});


// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
