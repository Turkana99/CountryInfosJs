import Header from "./companents/header.js";
import Jumbotron from "./companents/jumbotron.js";
import PageContent from "./companents/page-content.js";
import Footer from "./companents/footer.js";
import InfoModal from "./companents/infoModal.js";

export function render(...params) {
  for (const elem of params) {
    if (!elem.append) {
      document.getElementById(elem.id).innerHTML = elem.data
        ? elem.component(elem.data)
        : elem.component();
    } else {
      document
        .getElementById(elem.id)
        .appendChild(elem.data ? elem.component(elem.data) : elem.component());
    }
  }
}

render(
  { id: "header", component: Header, append: false },
  { id: "jumbotron", component: Jumbotron, append: false },
  { id: "main", component: PageContent, append: true },
  { id: "footer", component: Footer, append: false }
);
// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// let span = btn.addEventListener("click", function () {
//   document.getElementById("modalMain").innerHTML = InfoModal();
//   let modal = document.getElementById("myModal");
//   document.getElementById("content").style.overflowY = "hidden";
//   modal.style.display = "block";
//   document
//     .getElementsByClassName("close")[0]
//     .addEventListener("click", function () {
//       document.getElementById("myModal").style.display = "none";
//       document.getElementById("content").style.overflowY = "visible";
//     });
// });

function openInfoModal() {}
