<script setup>

</script>

<template>
  <!-- <nav class="px-5 navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/pjsk.png" alt="" width="30" height="30"><span class="px-2">Project Sekai</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Market</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./BS5-hw.html"><i class="bi bi-cart-fill"></i></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle"></i>
            </a>
            <ul id="dropdown-menu-item" class="dropdown-menu">
              <li><a class="dropdown-item" href="./BS5-login-2.html">login</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  <header class="mb-5">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/EE4152C5-C926-49BE-83C9-DB671768E55B_1_105_c.jpeg" class="d-block img-fluid w-100 h-100"
            style="max-height: 75vh;" alt="...">
          <div class="carousel-caption d-none d-md-block text-start">
            <h1>First slide label</h1>
            <p>Some representative placeholder content for the first slide.</p>
            <button type="button" class="btn btn-primary btn-lg">Sign up today</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/images/shiho2.jpeg" class="d-block img-fluid w-100 h-100" style="max-height: 75vh;" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h1>Second slide label</h1>
            <p>Some representative placeholder content for the second slide.</p>
            <button type="button" class="btn btn-primary btn-lg">Learn more</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/images/shiho1.jpeg" class="d-block w-100 h-100" style="max-height: 75vh;" alt="...">
          <div class="carousel-caption d-none d-md-block text-end">
            <h1>Third slide label</h1>
            <p>Some representative placeholder content for the third slide.</p>
            <button type="button" class="btn btn-primary btn-lg">Browse gallery</button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </header>
  <main class="container py-5">
    <section class="container">
      <!-- <div class="my-lax-box"></div> -->
      <h2 class="text-center animate__animated animate__bounce">Raw Denim Heirloom Man Braid</h2>
      <p class="text-center fs-5 animate__animated animate__bounce">Blue bottle crucifix vinyl post-ironic four dollar
        toast vegan taxidermy. Gastropub
        indxgo juice poutine, ramps microdosing banh mi pug.</p>
    </section>
    <section class="row py-5">
      <div class="col-12 col-lg-4 px-3 py-5 d-flex flex-column justify-content-center align-items-center"
        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <div class="my-circle-1 rounded-circle bg-secondary"></div>
        <h2 class="">Heading</h2>
        <h5 class="">Some representative placeholder content for the three columns of text below the carousel. This is
          the first column.</h5>
        <button type="button" class="btn btn-secondary">View details</button>
      </div>
      <div class="col-12 col-lg-4 px-3 py-5 d-flex flex-column justify-content-center align-items-center"
        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div class="my-circle-2 rounded-circle bg-secondary"></div>
        <h2 class="">Heading</h2>
        <h5 class="">Some representative placeholder content for the three columns of text below the carousel. This is
          the first column.</h5>
        <button type="button" class="btn btn-secondary">View details</button>
      </div>
      <div class="col-12 col-lg-4 px-3 py-5 d-flex flex-column justify-content-center align-items-center"
        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
        <div class="my-circle-3 rounded-circle bg-secondary"></div>
        <h2 class="">Heading</h2>
        <h5 class="">Some representative placeholder content for the three columns of text below the carousel. This is
          the first column.</h5>
        <button type="button" class="btn btn-secondary">View details</button>
      </div>
    </section>
    <section class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary btn-lg mb-5">Button</button>
    </section>
    <section class="row">
      <div class="col-3">
        <h2>Master Cleanse Reliac Heirloom.</h2>
      </div>
      <div class="col-9">
        <p class="p-3 fs-6">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
          farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
      </div>
    </section>
    <section class="mb-5">
      <div class="container">
        <div class="row">
          <div class="col-6 p-3">
            <div class="row">
              <div class="col-6 p-1" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <img src="../assets/images/an.webp" class="w-100" alt="">
              </div>
              <div class="col-6 p-1" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
                data-aos-duration="500">
                <img src="../assets/images/ichika.webp" class="w-100" alt="">
              </div>
            </div>
            <div class="row">
              <div class="col-12 p-1" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <img src="../assets/images/saki2.jpeg" class="w-100" alt="">
              </div>
            </div>
          </div>
          <div class="col-6 p-3">
            <div class="row">
              <div class="col-12 p-1" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <img src="../assets/images/saki3.webp" class="w-100" alt="">
              </div>
            </div>
            <div class="row">
              <div class="col-6 p-1" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
                data-aos-duration="500">
                <img src="../assets/images/shiho.webp" class="w-100" alt="">
              </div>
              <div class="col-6 p-1" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <img src="../assets/images/kanade.webp" class="w-100" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="d-flex justify-content-center flex-column">
      <h2 class="text-center mb-3">Pricing</h2>
      <p class="text-center fs-4 mb-5">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft
        biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
    </section>
    <section>
      <table class="table">
        <thead>
          <tr class="table-light">
            <th scope="col">Plan</th>
            <th scope="col">Speed</th>
            <th scope="col">Storage</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Start</th>
            <td>5 Mb/s</td>
            <td>15 GB</td>
            <td>Free</td>
            <td>
              <div class="form-check">
                <input class="form-check-input border-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Pro</th>
            <td>25 Mb/s</td>
            <td>25 GB</td>
            <td>$24</td>
            <td>
              <div class="form-check">
                <input class="form-check-input border-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Business</th>
            <td>36 Mb/s</td>
            <td>40 GB</td>
            <td>$50</td>
            <td>
              <div class="form-check">
                <input class="form-check-input border-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Exclusive</th>
            <td>48 Mb/s</td>
            <td>120 GB</td>
            <td>$72</td>
            <td>
              <div class="form-check">
                <input class="form-check-input border-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <div class="row d-flex justify-content-between flex-wrap">
        <a class="col-6 icon-link p-5" href="#">
          Learn More
          <i class="bi bi-arrow-right mb-2"></i>
        </a>
        <div class="col-6 d-flex justify-content-end p-5"><a href="#" button type="button"
            class="btn btn-primary">Button</a>
        </div>
      </div>
    </section>
    <section class="row d-flex flex-wrap">
      <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <h2>Pitchfork Kickstarter Taxidermy</h2>
      </div>
      <div class="col-12 col-md-6">
        <p class="p-3 fs-6">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
          farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food
          truck ugh squid celiac humblebrag.</p>
      </div>
    </section>
    <section class="row g-3 mt-5">
      <div class="col-12 col-lg-3">
        <div class="col bg-light p-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <div class="card bg-light border-0">
            <img src="../assets/images/saki4.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="col p-5 bg-light" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div class="card bg-light border-0">
            <img src="../assets/images/nene.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="col p-5 bg-light" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
          <div class="card bg-light border-0">
            <img src="../assets/images/enana.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="col p-5 bg-light" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
          <div class="card bg-light border-0">
            <img src="../assets/images/honami.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-5">
      <section class="row py-5">
        <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 order-1 mb-md-0 order-md-2" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
        data-aos-duration="600">
          <h2 class="lh-1">Shooting Stars</h2>
          <div class="fs-5">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo
            juice poutine.
          </div>
          <a class="icon-link mt-5" href="#">
            Learn More
            <i class="bi bi-arrow-right mb-2"></i>
          </a>
        </div>
        <div class="col-md-5 order-md-1 d-flex justify-content-center order-0" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
        data-aos-duration="600">
          <div class="my-circle-4 rounded-circle bg-secondary"></div>
        </div>
      </section>
      <hr>
      <section class="row py-5">
        <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
        data-aos-duration="600">
          <h2 class="lh-1">The Catalyzer</h2>
          <div class="fs-5">Shooting Stars
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
          </div>
          <a class="icon-link mt-5" href="#">
            Learn More
            <i class="bi bi-arrow-right mb-2"></i>
          </a>
        </div>
        <div class="col-md-5 d-flex justify-content-center" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
        data-aos-duration="600">
          <div class="my-circle-5 rounded-circle bg-secondary"></div>
        </div>
      </section>
      <hr>
      <section class="row py-5">
        <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0 order-1 order-md-2" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
        data-aos-duration="600">
          <h2 class="lh-1">The 400 Blows</h2>
          <div class="fs-5">Shooting Stars
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
          </div>
          <a class="icon-link mt-5" href="#">
            Learn More
            <i class="bi bi-arrow-right mb-2"></i>
          </a>
        </div>
        <div class="col-md-5 order-md-1 d-flex justify-content-center order-0" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
        data-aos-duration="600">
          <div class="my-circle-6 rounded-circle bg-secondary"></div>
        </div>
      </section>
    </section>
    <section class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary btn-lg mb-5">Button</button>
    </section>
    <section class="row py-5">
      <div class="col-xxl-5 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0 order-1 order-md-2" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
      data-aos-duration="600">
        <p class="mb-0 text-secondary">BRAND NAME</p>
        <p class="mt-0 mb-1 fs-2">The Catcher in the Rye</p>
        <div class="d-flex flex-wrap mt-1">
          <p class="text-primary">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
              class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
          </p>
          <p class="text-secondary ms-4">|&nbsp;&nbsp;4Reviews</p>
          <span class="ms-4 text-secondary">
            <i class="fa-brands fa-facebook-f me-1"></i>
            <i class="fa-brands fa-twitter me-1"></i>
            <i class="fa-solid fa-message"></i>
          </span>
        </div>
        <p>
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
          juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
          seitan poutine tumeric. Gastropub blue bottle austin listicle
          pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
        </p>
        <div class="d-flex mt-4">
          <p class="text-secondary">Color</p>
          <div class="rounded-circle my-circle-color ms-2" style="background-color: aliceblue"></div>
          <div class="rounded-circle my-circle-color ms-2" style="background-color: rgb(5, 5, 53)"></div>
          <div class="rounded-circle my-circle-color ms-2" style="background-color: teal"></div>
          <p class="text-secondary ms-4">Size</p>
          <select class="form-select w-25 ms-3" aria-label="Default select example">
            <option selected>SM</option>
            <option value="1">M</option>
            <option value="2">L</option>
            <option value="3">XL</option>
          </select>
          <hr />
        </div>
        <div class="d-flex mt-4 px-1 justify-content-between">
          <p class="fs-5">$39.00</p>
          <div class="d-flex">
            <button class="btn btn-primary btn-w mb-5" type="submit">
              Button
            </button>
            <div
              class="rounded-circle my-circle-heart text-secondary d-flex justify-content-center align-items-center ms-3 mt-1">
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-7 order-0 order-md-1" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <img class="w-100" src="../assets/images/gbc.jpeg" alt="">
      </div>
    </section>
    <section class="row g-3 mt-5">
      <div class="col-12 col-lg-3">
        <div class="col p-5">
          <div class="card border-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <img src="../assets/images/card1.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="col p-5">
          <div class="card border-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="../assets/images/card2.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="col p-5">
          <div class="card border-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
            <img src="../assets/images/card3.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="col p-5">
          <div class="card border-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
            <img src="../assets/images/card4.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="row g-3 mt-5">
      <div class="col-12 col-lg-3">
        <div class="col p-5">
          <div class="card border-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <img src="../assets/images/card5.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="col p-5">
          <div class="card border-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="../assets/images/card6.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="col p-5">
          <div class="card border-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
            <img src="../assets/images/card7.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="col p-5">
          <div class="card border-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
            <img src="../assets/images/card8.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <section class="map">
    <div class="feedback container w-25 p-5">
      <form action="">
        <p class="fs-4">Feedback</p>
        <span>Post-ironic portland shabby chic echo park, banjo fashion axe</span>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" class="btn btn-primary btn-lg mb-3 w-100">Button</button>
        <p>Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </form>
    </div>
    <div class="ratio ratio-16x9">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.2377410746253!2d120.69135171058538!3d23.95203188091682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693036a641b991%3A0xd04477c8d17bf64f!2zNTQw5Y2X5oqV57ij5Y2X5oqV5biC55Kw5bGx6LevNTDomZ8!5e0!3m2!1szh-TW!2stw!4v1721205501870!5m2!1szh-TW!2stw"
        width="600" height="450" style="border:0;filter:grayscale(1) contrast(1.2) opacity(0.7);" allowfullscreen=""
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
  <hr>
  <div class="container">
    <footer class="py-5">
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="logo"><img src="../assets/images/pjsk.png" alt="" width="60" height="60"><span class="px-2"
              style="font-size: larger;font-weight: bolder;">Project Sekai</span></div>
          <h5 class="py-3">初音就是軟體</h5>

        </div>
        <div class="col-6 col-md-2 mb-3">
          <h5>Project Sekai</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Wowaka</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Rolling girl</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Unhappy Refrain</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">World's End Dancehall</a>
            </li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Unknown Mother Goose</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Ura-Omote Lovers</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Ryo</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Melt</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">odds and ends</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Black Rock Shooter</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">初めての恋が終わる時</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Love is War</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Doriko</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">歌に形はないけれど</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">夕日坂</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">letter song</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">ロミオとシンデレラ</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">last will</a></li>
          </ul>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-facebook"></i></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-instagram"></i></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-twitter"></i></a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style>
a {
      text-decoration: none;
    }

    body {
      overflow-x: hidden;
    }


    .my-circle-1 {
      width: 200px;
      height: 200px;
      background-image: url(../assets/images/engeki.jpg);
      background-size: cover;
    }

    .my-circle-2 {
      width: 200px;
      height: 200px;
      background-image: url(../assets/images/25.jpg);
      background-size: cover;
    }

    .my-circle-3 {
      width: 200px;
      height: 200px;
      background-image: url(../assets/images/LN.jpg);
      background-size: cover;
    }

    .my-circle-4 {
      width: 200px;
      height: 200px;
      background-image: url(../assets/images/25ji-single.jpg);
      background-size: cover;
    }

    .my-circle-5 {
      width: 200px;
      height: 200px;
      background-image: url(../assets/images/ln-single-1.webp);
      background-size: cover;
    }

    .my-circle-6 {
      width: 200px;
      height: 200px;
      background-image: url(../assets/images/ln-single-2.jpg);
      background-size: cover;
    }

    #dropdown-menu-item {
      transform: translateX(-70%);
    }

    @media (max-width:991px) {
      #dropdown-menu-item {
        transform: translateX(0%);
      }
    }

    .my-circle-color {
      width: 20px;
      height: 20px;
      border: 1px solid black;
    }

    .my-circle-heart {
      width: 28px;
      height: 28px;
    }

    @media (max-width: 991px) {
      .ratio-16x9 {
        --bs-aspect-ratio: 150%;
      }
    }

    .map {
      position: relative;
    }

    .feedback {
      position: absolute;
      z-index: 9;
      background-color: white;
      top: 10%;
      right: 10%;
      border: 1px solid #ccc;
      min-width: 500px;
    }
</style>
