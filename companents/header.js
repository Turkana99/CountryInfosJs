export default function Header() {
  let header = `
  <header class="scd_header pb-3 bg-dark">
    <div class="container d-flex flex-wrap justify-content-between pt-3">
      <div>
        <span class="frs_title">CountryInfos</span>
      </div>
      <div>
        <ul class="nav me-auto pt-1">
          <li class="nav-item">
            <a
              class="nav-link px-2">Home
              </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-2"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-2"
              >Blog</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-2"
              >Fag</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-2"
              >Contact us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>`;
  return header;
}
