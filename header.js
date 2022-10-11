class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="index.html">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
               
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Product
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="our-products.html#hire-employees">Hire employee</a></li>
                    <li><a class="dropdown-item" href="our-products.html#contractor">Contract And Interim Solutions </a></li>
                    <li><a class="dropdown-item" href="our-products.html#project-solution">Project Solution</a></li>
                  </ul>
                </li>
              
                <li class="nav-item">
                <a class="nav-link" href="pricing.html">Pricing</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="about-us.html">About</a>
            </li>
              
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">Blog</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#contact-us">Contact</a>
              </li>
           
              </ul>
            </div>
          </div>
        </nav>
      </header>
        `;
  }
}
customElements.define("my-header", MyHeader);
