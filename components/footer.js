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
                    <br>
                    <p class="copyright"> Pratik Acharjee <span><img 
                    src="assets/copyright.svg" alt="copyright"></span> 2021</p>
                    
                </div>
                <div class="f-right col-lg-9 col-md-6 col-sm-12">
                    <p class="foot-address">
                    Chamber : 32, Kalitara Bose Ln., Beleghata, Kolkata - 700010
                    .<br><br>
                    <span class="poweredby"> Powered By: <a  href="https://kalyanjit.me/" target="_blank" rel="noopener noreferrer">Kalyanjit Das</a></span>
                    <br> 
                        <a href="https://www.facebook.com/Prateekach" target="_blank" rel="noopener noreferrer"><img class="contact-icon"
                                src="assets/fb.svg" alt="facebook"></a>

                        <a href="https://www.linkedin.com/in/pratik-acharjee-7b0445224/" target="_blank" rel="noopener noreferrer"><img class="contact-icon"
                                src="assets/linkedin.svg" alt="Linkedin"></a>

                        <a href="#" target="_blank" rel="noopener noreferrer"><img class="contact-icon"
                                src="assets/tt.svg" alt="tweeter"></a>
                               
                    </p>
                   
                </div>
                
    </footer>
    
      `;
    }
  }
  
  customElements.define('footer-component', footer);