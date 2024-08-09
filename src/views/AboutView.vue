<script>
// import { RouterLink } from "vue-router";
// export default {
//   components: {
//     RouterLink,
//   },
// }
</script>

<template>
  <div class="vh-100">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100 cover-container">
                <div class="picture col-md-8 col-lg-7 col-xl-6 mb-4 mb-md-0">
                    <img src="../assets/images/sakisaki.jpg" class="img-fluid" alt="Phone image">
                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#" class="px-3"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="px-3"><i class="bi bi-discord"></i></a>
                        <a href="#" class="px-3"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
                <div class="password col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form action="./BS5-hw.html">
                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="email" id="form1Example13" class="form-control form-control-lg" required>
                            <label class="form-label" for="form1Example13">Email address</label>
                        </div>
                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="password" id="form1Example23" class="form-control form-control-lg" required>
                            <label class="form-label" for="form1Example23">Password</label>
                        </div>
                        <div class="d-flex justify-content-end align-items-center mb-3">
                            <a href="#!">Forgot password?</a>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg btn-block w-100">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
 @media (max-width: 992px) {
            .picture {
                position: relative;
            }

            .password {
                position: absolute;
            }
        }
</style>
