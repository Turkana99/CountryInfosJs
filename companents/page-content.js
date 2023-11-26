import { render } from "../index.js";
import InfoModal from "./infoModal.js";

async function getCountries() {
  // Await-den ist. edecemse function mutleq async olmalidir.
  const response = await fetch("https://restcountries.com/v3.1/all"); // Fetch netice olaraq prmise qaytardigi ucun await-den ist. edirik.

  const countries = await response.json(); // Promise type-ni json formatina cevirmek ucun yaziriq.
  return countries;
}

export default function PageContent() {
  const parser = new DOMParser(); // DOMParser adinda classimizdan obyekt yaradiriq
  const parsed = parser.parseFromString(pageContent, "text/html"); // text formatindan document(DOM) cevirir
  const inputGroup = parsed.querySelector(".input-group"); // Dom elemtinden select edirik
  let findCountry = parsed.querySelector("#find-country");
  const cards = parsed.querySelector(".cards");
  let countriesOptions = `
  <option>Select country</option>`;

  getCountries().then((response) => {
    // .then metodunun icerisi data geldikden sonra ise dusur
    let names = response.map((x) => x.name); // Name-lerden ibaret bir array
    for (const name of names) {
      // Array eleementlerini dovre saliriq
      countriesOptions += `<option value="${name.common}">${name.common}</option>`;
    }
    findCountry.innerHTML = countriesOptions;
  });

  for (const btn of cards.querySelectorAll(`button[data-id="more-info"]`)) {
    btn.addEventListener("click", (event) => {
      render({
        id: "content",
        component: InfoModal,
        append: true,
        data: {
          name: "Azerbaijan",
          imageUrl: "./img/az1.png",
          description: `Praesent non dictum dolor, vitae interdum erat. Nam quis consectetur mi. In consequat condimentum tortor, et lobortis est convallis ac. Quisque volutpat posuere dui, pellentesque vulputate dolor. Morbi dapibus orci eu est consectetur, sed pretium mauris laoreet. Pellentesque sodales ante non justo viverra, sit amet consectetur nisl vulputate.`,
        },
      });
    });
  }

  let wrapper = document.createElement("div");

  wrapper.appendChild(inputGroup);
  wrapper.appendChild(cards);

  $(document).ready(function () {
    // Slect-2 hhazir kitabxana kodu
    $("#find-country").select2();

    $("#find-country").on("change", function () {
      fetch(
        `https://restcountries.com/v3.1/name/${
          $(this).find(":selected")[0].value
        }`
      )
        .then((response) => {
          return response.json();
        })
        .then(
          ([
            {
              name: { common },
              flags: { png, alt },
            },
          ]) => {
            cards.innerHTML = "";
            let temp = `<div class="card card1 bg-dark">
          <div class="container">
              <img src="${png}" alt="${alt}">
          </div>
          <div class="noi-dung">
              <h3>${common}</h3>
              <p>${alt}</p>
              <button data-id='more-info' class="btn btn1" type="button"  data-toggle="modal" data-target="#exampleModal" id="myBtn">More Info</button>
          </div>
      </div>`;
            temp = temp + temp + temp;
            cards.innerHTML = temp;
          }
        );
    });
  });
  return wrapper;
}

let pageContent = `
<div class="input-group px-5">
<select id="find-country" class="w-100">
</select>

</div>
<div class="cards px-5 pt-5">
        <div class="card card1 bg-dark">
            <div class="container">
                <img src="https://images.pexels.com/photos/980221/pexels-photo-980221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Ảnh 1">
            </div>
            <div class="noi-dung">
                <h3>Azerbaijan</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit neque illum nostrum. Quod obcaecati quasi temporibus asperiores similique illum consequatur animi, unde dolores perspiciatis? Aliquam exercitationem obcaecati explicabo voluptates?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button data-id='more-info' class="btn btn1" type="button"  data-toggle="modal" data-target="#exampleModal" id="myBtn">More Info</button>
            </div>
        </div>

        <div class="card card2 bg-dark">
            <div class="container">
                <img src="https://images.pexels.com/photos/2067048/pexels-photo-2067048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Ảnh 2">
            </div>
            <div class="noi-dung">
                <h3>Norway</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit neque illum nostrum. Quod obcaecati quasi temporibus asperiores similique illum consequatur animi, unde dolores perspiciatis? Aliquam exercitationem obcaecati explicabo voluptates?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button data-id='more-info' class="btn2">More Info</button>
            </div>
        </div>

        <div class="card card3 bg-dark">
            <div class="container">
                <img src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Ảnh 3">
            </div>
            <div class="noi-dung">
                <h3>Singapore</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit neque illum nostrum. Quod obcaecati quasi temporibus asperiores similique illum consequatur animi, unde dolores perspiciatis? Aliquam exercitationem obcaecati explicabo voluptates?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button  data-id='more-info' class="btn3">More Info</button>
            </div>
        </div>
    </div>`;
