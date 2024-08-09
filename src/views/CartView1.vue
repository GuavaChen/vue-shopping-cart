<script>
import CountBtn from "../components/CountBtn.vue";
import eventBus from "../composable/eventBus.js";
export default {
  components: {
    CountBtn,
  },
  data() {
    return {
      quantities: {
        item1: 0,
        item2: 0,
        item3: 0,
      },
      prices: {
        item1: 2539,
        item2: 2525,
        item3: 3939,
      },
    };
  },
  computed: {
    totalQuantity() {
      return (
        this.quantities.item1 + this.quantities.item2 + this.quantities.item3
      );
    },
    totalPrice() {
      return (
        this.quantities.item1 * this.prices.item1 +
        this.quantities.item2 * this.prices.item2 +
        this.quantities.item3 * this.prices.item3
      );
    },
    totalShipping() {
      return (
        this.quantities.item1 * this.prices.item1 +
        this.quantities.item2 * this.prices.item2 +
        this.quantities.item3 * this.prices.item3 +
        39520
      );
    },
  },
  methods: {
    updateQuantity(item, count) {
      this.quantities[item] = count;
    },
    setLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.quantities));
    },
    sendDataToCartView2() {
      eventBus.emit("cartData", {
        quantity: this.totalQuantity,
        subtotal: this.totalPrice,
        shipping: 39520,
        total: this.totalShipping,
      });
    },
    goToNextStep() {
      const cartData = {
        quantity: this.totalQuantity,
        subtotal: this.totalPrice,
        shipping: 39520,
        total: this.totalShipping,
      };
      localStorage.setItem("cartData", JSON.stringify(cartData));
      this.$router.push("/cart2");
    },
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
              <div class="progress-bar bg-info" style="width: 33%"></div>
            </div>
          </div>
          <div>
            <p>確認購物車</p>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <div class="d-flex justify-content-center position-relative w-100">
            <h4 class="my-circle rounded-circle text-center text-white py-2">
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
              <div class="progress-bar bg-info" style="width: 0%"></div>
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
      <h2 class="p-5">訂單明細</h2>
      <div class="row d-flex justify-content-around">
        <div
          class="col-9 col-sm-8 col-md-7 col-lg-6 d-flex justify-content-start align-items-center"
        >
          <div class="my-circle1 rounded-circle bg-secondary"></div>
          <div class="px-3 mt-2">
            <p class="py-1">Leo/need</p>
            <p class="text-grey">#3939</p>
          </div>
        </div>
        <div
          class="col-2 col-sm-3 col-md-4 col-lg-5 d-flex justify-content-end align-items-center"
        >
          <div class="col d-flex justify-content-end">
            <CountBtn
              :initialCount="quantities.item1"
              @update-count="updateQuantity('item1', $event)"
            />
            <span class="ms-4 text-end mt-1">${{ prices.item1 }}</span>
          </div>
        </div>
      </div>
      <div class="horizon px-3">
        <hr />
      </div>
      <div class="row d-flex justify-content-around">
        <div
          class="col-9 col-sm-8 col-md-7 col-lg-6 d-flex justify-content-start align-items-center"
        >
          <div class="my-circle2 rounded-circle bg-secondary"></div>
          <div class="px-3 mt-2">
            <p class="py-1">Sekai Album</p>
            <p class="">#2525</p>
          </div>
        </div>
        <div
          class="col-2 col-sm-3 col-md-4 col-lg-5 d-flex justify-content-end align-items-center"
        >
          <div class="col d-flex justify-content-end">
            <CountBtn
              :initialCount="quantities.item2"
              @update-count="updateQuantity('item2', $event)"
            />
            <span class="ms-4 text-end mt-1">${{ prices.item2 }}</span>
          </div>
        </div>
      </div>
      <div class="horizon px-3">
        <hr />
      </div>
      <div class="row d-flex justify-content-around">
        <div
          class="col-9 col-sm-8 col-md-7 col-lg-6 d-flex justify-content-start align-items-center"
        >
          <div class="my-circle3 rounded-circle bg-secondary"></div>
          <div class="px-3 mt-2">
            <p class="py-1">Engeki</p>
            <p class="">#2539</p>
          </div>
        </div>
        <div
          class="col-2 col-sm-3 col-md-4 col-lg-5 d-flex justify-content-end align-items-center"
        >
          <div class="col d-flex justify-content-end">
            <CountBtn
              :initialCount="quantities.item3"
              @update-count="updateQuantity('item3', $event)"
            />
            <span class="ms-4 text-end mt-1">${{ prices.item3 }}</span>
          </div>
        </div>
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
          <p class="d-flex justify-content-end">{{ totalQuantity }}</p>
          <p class="d-flex justify-content-end">${{ totalPrice }}</p>
          <p class="d-flex justify-content-end">$39520</p>
          <p class="d-flex justify-content-end">${{ totalShipping }}</p>
        </div>
      </div>
      <div class="horizon px-3">
        <hr />
      </div>
      <div class="row d-flex justify-content-between flex-wrap">
        <RouterLink class="col-6 icon-link p-5 text-black" to="/">
          <i class="bi bi-arrow-left mb-2"></i>
          返回購物
        </RouterLink>
        <div class="col-6 d-flex justify-content-end p-5">
          <RouterLink @click="goToNextStep" to="/cart2" class="btn btn-primary"
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
