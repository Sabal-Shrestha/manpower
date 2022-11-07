class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="top-footer">
      <div class="container">
        <div class="row g-5">
          <div class="col-md-12 col-lg-6">
            <div class="row g-4 flex-fill">
              <div class="col-md-12">
                <div class="info-box">
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>Our Address</h4>
                  <p>Sifal, Kathmandu, Nepal</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="fa-solid fa-envelope"></i>
                  <h4>Email Us</h4>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="fa-solid fa-phone"></i>
                  <h4>Call Us</h4>
                  <p>+977-23456789</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 form-box">
            <h4>Get Our Service</h4>
            <form action="">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Name*"
                    required
                  />
                </div>
                <div class="col-md-6 form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="3"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="text-center">
                  <button type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section id="middle-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <h4>Address</h4>
            <ul>
              <li>Sifal</li>
              <li>Kathmandu, Nepal</li>
              <li>Email: contact@gmail.com</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <h4>Useful Links</h4>
            <ul>
              <li>About</li>
              <li>Hire employee</li>
              <li>Contractor & Interim Solution</li>
              <li>Project Solution</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <h4>Useful Links</h4>
            <ul>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <h4>Follow Us On:</h4>
            <ul>
              <a href="#" class="twitter"
                ><i class="fa-brands fa-twitter"></i
              ></a>
              <a href="#" class="facebook">
                <i class="fa-brands fa-facebook"></i
              ></a>
              <a href="#" class="instagram"
                ><i class="fa-brands fa-instagram"></i
              ></a>
              <a href="#" class="linkedin"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <p>
            &copy;2022 Copyright <strong>CubixTech</strong>. All Rights Reserved
          </p>
          <p>Designed by <a href="">CubixTech</a></p>
        </div>
      </div>
      <button onclick="topFunction()" id="goToTop" title="Go to top">
        <i class="fas fa-arrow-up"></i>
      </button>
    </footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    />
  `;
  }
}
customElements.define("my-footer", MyFooter);

(function (d, w, c) {
  w.ChatraID = "99ijTmoJgpnR3Mvoq";
  var s = d.createElement("script");
  w[c] =
    w[c] ||
    function () {
      (w[c].q = w[c].q || []).push(arguments);
    };
  s.async = true;
  s.src = "https://call.chatra.io/chatra.js";
  if (d.head) d.head.appendChild(s);
})(document, window, "Chatra");

function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}
function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
(mybutton = document.getElementById("goToTop")),
  (window.onscroll = function () {
    scrollFunction();
  });
