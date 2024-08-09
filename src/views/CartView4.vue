<template>
    <main class="px-5 py-5" style="background-color: grey">
    <!-- <div class="container-fluid"> -->
    <section class="d-flex flex-column bg-white">
      <h2 class="ms-5 mt-5">購物車</h2>
      <div class="container d-flex flex-row justify-content-center mt-5">
        <div class="col-3 d-flex flex-column align-items-center">
          <div class="circle d-flex justify-content-center position-relative w-100">
            <h4 class="my-circle rounded-circle text-center text-white py-2 bg-primary">
              1
            </h4>
            <div class="progress position-absolute start-100 top-50 translate-middle" role="progressbar"
              aria-label="Info example" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-info" style="width: 100%"></div>
            </div>
          </div>
          <div>
            <p>確認購物車</p>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div class="d-flex justify-content-center position-relative w-100">
            <h4 class="my-circle rounded-circle text-center text-white py-2 bg-primary">
              2
            </h4>
            <div class="progress position-absolute start-100 top-50 translate-middle" role="progressbar"
              aria-label="Info example" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-info" style="width: 100%"></div>
            </div>
          </div>
          <div>
            <p>付款與運送方式</p>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div class="d-flex justify-content-center position-relative w-100">
            <h4 class="my-circle rounded-circle text-center text-white py-2 bg-primary">
              3
            </h4>
            <div class="progress position-absolute start-100 top-50 translate-middle" role="progressbar"
              aria-label="Info example" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-info" style="width: 100%"></div>
            </div>
          </div>
          <div>
            <p>填寫資料</p>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <h4 class="my-circle rounded-circle text-center text-white py-2 bg-primary">
            4
          </h4>
          <p>完成訂購</p>
        </div>
      </div>
      <div class="horizon px-3">
        <hr>
      </div>
    </section>

    <section class="d-flex flex-column bg-white">
      <h1 class="p-1 d-flex justify-content-center">訂單成立</h1>
      <h2 class="p-5">訂單明細</h2>
      <div class="row d-flex justify-content-around">
        <div class="col-9 col-sm-8 col-md-7 col-lg-6 d-flex justify-content-start align-items-center">
          <div class="my-circle1 rounded-circle bg-secondary"></div>
          <div class="px-3 mt-2">
            <p class="py-1">Leo/need</p>
            <p class="text-grey">#3939</p>
          </div>
        </div>
        <div class="col-2 col-sm-3 col-md-4 col-lg-5 d-flex justify-content-end align-items-center">
          <div class="col d-flex justify-content-end">
            <p class="mt-1 me-3">x1</p>
            <span class="ms-4 text-end mt-1">$3939</span>
          </div>
        </div>
      </div>
      <div class="horizon px-3">
        <hr>
      </div>
      <div class="row d-flex justify-content-around">
        <div class="col-9 col-sm-8 col-md-7 col-lg-6 d-flex justify-content-start align-items-center">
          <div class="my-circle2 rounded-circle bg-secondary"></div>
          <div class="px-3 mt-2">
            <p class="py-1">Sekai Album</p>
            <p class="">#2525</p>
          </div>
        </div>
        <div class="col-2 col-sm-3 col-md-4 col-lg-5 d-flex justify-content-end align-items-center">
          <div class="col d-flex justify-content-end">
            <p class="mt-1 me-3">x1</p>
            <span class="ms-4 text-end mt-1">$3939</span>
          </div>
        </div>
      </div>
      <div class="horizon px-3">
        <hr>
      </div>
      <div class="row d-flex justify-content-around">
        <div class="col-9 col-sm-8 col-md-7 col-lg-6 d-flex justify-content-start align-items-center">
          <div class="my-circle3 rounded-circle bg-secondary"></div>
          <div class="px-3 mt-2">
            <p class="py-1">Engeki</p>
            <p class="">#2539</p>
          </div>
        </div>
        <div class="col-2 col-sm-3 col-md-4 col-lg-5 d-flex justify-content-end align-items-center">
          <div class="col d-flex justify-content-end">
            <p class="mt-1 me-3">x1</p>
            <span class="ms-4 text-end mt-1">$3939</span>
          </div>
        </div>
      </div>
      <div class="horizon px-3">
        <hr>
      </div>
      <h2 class="px-5 mt-3">寄送資料</h2>
      <div class="row d-flex flex-wrap">
        <h5 class="p-5 mt-2">姓名:&nbsp;&nbsp;初音未來</h5>
        <h5 class="px-5 mt-2">電話:&nbsp;&nbsp;0939520520</h5>
        <h5 class="p-5 mt-2 text-wrap">Email:&nbsp;&nbsp;LoveMiku@gmail.com</h5>
        <h5 class="px-5 mt-2">地址:&nbsp;&nbsp;141-0033&nbsp;&nbsp;東京都品川區西品川一丁目1番1號</h5>
      </div>



      <div class="horizon px-3">
        <hr>
      </div>
      <div class="row px-3 d-flex justify-content-end">
        <div class="col-4 col-md-2 col-lg-1">
          <p>數量:</p>
          <p>小計:</p>
          <p>運費:</p>
          <p>總計:</p>
        </div>
        <div class="col-3 col-lg-1">
          <p class="d-flex justify-content-end">3</p>
          <p class="d-flex justify-content-end">$11817</p>
          <p class="d-flex justify-content-end">$2122</p>
          <p class="d-flex justify-content-end">$13939</p>
        </div>
      </div>
      <div class="horizon px-3">
        <hr>
      </div>
      <div class="row d-flex justify-content-between flex-wrap">
        <div class="col-6 d-flex p-5"></div>
        <div class="col-6 d-flex justify-content-end p-5"><RouterLink to="/" button type="button" class="btn btn-primary">返回首頁</RouterLink>
        </div>

      </div>



    </section>
    <!-- </div> -->
  </main>
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
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">World's End Dancehall</a></li>
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
    #dropdown-menu-item {
      transform: translateX(-70%);
    }

    @media (max-width:991px) {
      #dropdown-menu-item {
        transform: translateX(0%);
      }
    }

    .my-circle {
      width: 50px;
      height: 50px;
      background-color: black;
    }

    .my-circle1 {
      width: 70px;
      height: 70px;
      background-color: black;
      background-image: url(../assets/images/LN.jpg);
      background-size: cover;
    }

    .my-circle2 {
      width: 70px;
      height: 70px;
      background-color: black;
      background-image: url(../assets/images/25.jpg);
      background-size: cover;
    }

    .my-circle3 {
      width: 70px;
      height: 70px;
      background-color: black;
      background-image: url(../assets/images/engeki.jpg);
      background-size: cover;
    }

    a {
      text-decoration: none;
    }

    .progress {
      width: 75%;
    }

    /* .circle{
      position: relative;
    } */

    @media (max-width:991px) {
      .progress {
        width: 70%;
      }
    }

    @media (max-width:768px) {
      .progress {
        width: 55%;
      }
    }

    @media (max-width:576px) {
      .progress {
        width: 50%;
      }
    }

    @media (max-width:516px) {
      .progress {
        width: 35%;
      }
    }

    @media (max-width:450px) {
      .progress {
        width: 20%;
      }
    }
  </style>