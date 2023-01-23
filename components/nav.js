class nav extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
              <img class="logo" src="assets/logo.svg" alt="Logo">
              <span class="heading">Pratik Acharjee</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse navbar-collapse " id="navbarNav">
              <ul class=" navitem navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="about.html">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="expertise.html">Areas of Expertise</a>
                  </li>
                  
                  <li class="nav-item">
                      <a class="nav-link" href="index.html#contact">Contact</a>
                  </li>
                  
              </ul>
          </div>
      </div>
  </nav>
      `;
    }
  }
  
  customElements.define('nav-component', nav);