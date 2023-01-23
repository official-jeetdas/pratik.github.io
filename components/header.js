class header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/favicon.svg" type="image/x-icon">
    <!-- bootstrap cdn -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <!-- bootstrap cdn -->
    <!-- css link -->
    <link rel="stylesheet" href="css/style.css">
    <!-- css link -->
    <!-- google fonts link -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet">

    <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&family=Roboto+Mono:wght@200&display=swap"
        rel="stylesheet">
    <!-- google fonts link -->
    <!-- Icon CDN -->
    

      `;
    }
  }
  
  customElements.define('header-component', header);