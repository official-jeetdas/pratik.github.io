class footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
        <div class="footer">
            <div class="row">
                <div class="f-left col-lg-3 col-md-6 col-sm-12">
                    <img class="footer-logo" src="assets/footer-logo.svg" alt="Logo"> <br>
                    <span class="footer-title">Adv.Pratik Acharjee</span>
                </div>
                <div class="f-right col-lg-9 col-md-6 col-sm-12">
                    <p class="foot-address">Address: Salt Lake, Kolkata, West Bengal.
                        <br>
                        Phone: +91 9876543210.
                        <br>
                        Email:pratik@gmail.com.
                        <br>
                        <a href="#" target="_blank" rel="noopener noreferrer"><img class="contact-icon"
                                src="assets/fb.svg" alt="facebook"></a>

                        <a href="#" target="_blank" rel="noopener noreferrer"><img class="contact-icon"
                                src="assets/ig.svg" alt="instagram"></a>

                        <a href="#" target="_blank" rel="noopener noreferrer"><img class="contact-icon"
                                src="assets/tt.svg" alt="tweeter"></a>
                    </p>
                </div>
                
    </footer>
    
      `;
    }
  }
  
  customElements.define('footer-component', footer);