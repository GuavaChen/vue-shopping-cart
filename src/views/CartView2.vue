<script>
// import { eventBus } from '../composable/eventBus.js'
import eventBus from "../composable/eventBus.js";

export default {
  data() {
    return {
      quantity: 0,
      subtotal: 0,
      shipping: 0,
      total: 0,
    };
  },
  created() {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      this.quantity = cartData.quantity;
      this.subtotal = cartData.subtotal;
      this.shipping = cartData.shipping;
      this.total = cartData.total;
    }
  },
  methods: {
    // setupEventListener() {
    //   eventBus.on("cartData", (data) => {
    //     console.log("Received data:", data);
    //     this.quantity = data.quantity;
    //     this.subtotal = data.subtotal;
    //     this.shipping = data.shipping;
    //     this.total = data.total;
    //   });
    // },
  },
  beforeUnmount() {
    // 清理事件監聽器
    eventBus.off("cartData");
  },
};
</script>

<template>
  <main class="px-5 py-5" style="background-color: grey">
    <!-- <div class="container-fluid"> -->
    <section class="d-flex flex-column bg-white">
      <h2 class="ms-5 mt-5">購物車</h2>
      <div class="container d-flex flex-row justify-content-center mt-5">
        <div class="col-3 d-flex flex-column align-items-center">
          <div
            class="circle d-flex justify-content-center position-relative w-100"
          >
            <h4
              class="my-circle rounded-circle text-center text-white py-2 bg-primary"
            >
              1
            </h4>
            <div
              class="progress position-absolute start-100 top-50 translate-middle"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="33"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-info" style="width: 100%"></div>
            </div>
          </div>
          <div>
            <p>確認購物車</p>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div class="d-flex justify-content-center position-relative w-100">
            <h4
              class="my-circle rounded-circle text-center text-white py-2 bg-primary"
            >
              2
            </h4>
            <div
              class="progress position-absolute start-100 top-50 translate-middle"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="33"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-info" style="width: 33%"></div>
            </div>
          </div>
          <div>
            <p>付款與運送方式</p>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div class="d-flex justify-content-center position-relative w-100">
            <h4 class="my-circle rounded-circle text-center text-white py-2">
              3
            </h4>
            <div
              class="progress position-absolute start-100 top-50 translate-middle"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="33"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-info" style="width: 0%"></div>
            </div>
          </div>
          <div>
            <p>填寫資料</p>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <h4 class="my-circle rounded-circle text-center text-white py-2">
            4
          </h4>
          <p>完成訂購</p>
        </div>
      </div>
      <div class="horizon px-3">
        <hr />
      </div>
    </section>

    <section class="d-flex flex-column bg-white">
      <h2 class="p-5">付款方式</h2>
      <div class="form-check ms-5 fs-5">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          信用卡付款
        </label>
      </div>
      <div class="horizon px-5">
        <hr />
      </div>
      <div class="form-check ms-5 fs-5">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          網路ATM
        </label>
      </div>
      <div class="horizon px-5">
        <hr />
      </div>
      <div class="form-check ms-5 fs-5">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          超商代碼
        </label>
      </div>
      <div class="horizon p-3">
        <hr />
      </div>
      <h2 class="p-5">運送方式</h2>
      <div class="form-check ms-5 fs-5">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault1"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          黑貓宅配
        </label>
      </div>
      <div class="horizon px-5">
        <hr />
      </div>
      <div class="form-check ms-5 fs-5">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault1"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          超商店到店
        </label>
      </div>

      <div class="horizon px-3">
        <hr />
      </div>
      <div class="row px-3 d-flex justify-content-end">
        <div class="col-4 col-md-2 col-lg-1">
          <p>數量:</p>
          <p>小計:</p>
          <p>運費:</p>
          <p>總計:</p>
        </div>
        <div class="col-3 col-lg-1">
          <p class="d-flex justify-content-end">{{ quantity }}</p>
          <p class="d-flex justify-content-end">${{ subtotal }}</p>
          <p class="d-flex justify-content-end">${{ shipping }}</p>
          <p class="d-flex justify-content-end">${{ total }}</p>
        </div>
      </div>
      <div class="horizon px-3">
        <hr />
      </div>
      <div class="row d-flex justify-content-between flex-wrap">
        <div class="col-6 d-flex p-5">
          <RouterLink to="/cart1" button type="button" class="btn btn-secondary"
            >上一步</RouterLink
          >
        </div>
        <div class="col-6 d-flex justify-content-end p-5">
          <RouterLink to="/cart3" button type="button" class="btn btn-primary"
            >下一步</RouterLink
          >
        </div>
      </div>
    </section>
    <!-- </div> -->
  </main>
  <div class="container">
    <footer class="py-5">
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="logo">
            <img
              src="../assets/images/pjsk.png"
              alt=""
              width="60"
              height="60"
            /><span class="px-2" style="font-size: larger; font-weight: bolder"
              >Project Sekai</span
            >
          </div>
          <h5 class="py-3">初音就是軟體</h5>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <h5>Project Sekai</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">Home</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">Features</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">Pricing</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">FAQs</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">About</a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Wowaka</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >Rolling girl</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >Unhappy Refrain</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >World's End Dancehall</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >Unknown Mother Goose</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >Ura-Omote Lovers</a
              >
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Ryo</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">Melt</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >odds and ends</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >Black Rock Shooter</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >初めての恋が終わる時</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >Love is War</a
              >
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Doriko</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >歌に形はないけれど</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">夕日坂</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >letter song</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"
                >ロミオとシンデレラ</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">last will</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"
      >
        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i class="bi bi-facebook"></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i class="bi bi-instagram"></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i class="bi bi-twitter"></i
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style>
#dropdown-menu-item {
  transform: translateX(-70%);
}

@media (max-width: 991px) {
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

@media (max-width: 991px) {
  .progress {
    width: 70%;
  }
}
@media (max-width: 768px) {
  .progress {
    width: 55%;
  }
}
@media (max-width: 576px) {
  .progress {
    width: 50%;
  }
}
@media (max-width: 516px) {
  .progress {
    width: 35%;
  }
}
@media (max-width: 450px) {
  .progress {
    width: 20%;
  }
}
</style>
