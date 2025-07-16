<template>
    <div>
        <section class="pb-5 d-flex align-items-center min-vh-100 position-relative">
            <div class="container">
                <div class="col-md-4 d-none d-md-block h-100 position-absolute top-0 start-0 bg-main-1" style="z-index:-2;">
                </div>
                <div class="col-md-8 h-100 position-absolute top-0 end-0 bg-light" style="z-index:-2;">
                </div>
                <div class="row align-items-center justify-content-center">
                    <!-- Left Content -->
                    <div class="col-xl-5 col-lg-6">
                        <div class="bg-white p-5 shadow">
                            <h1 class="display-3 fw-bold text-main-2">Devavrata <span class="text-black">Sinergi Indonesia</span></h1>
                            <p class="lead my-4">{{ $t('indexQuotes') }}</p>
                            <!-- <a class="btn text-white btn-lg Poppins" style="background-color: #931A25;" href="#features" role="button">DETAILS</a> -->
                        </div>
                    </div>

                    <!-- Logo Section -->
                    <div class="col-xl-5 col-lg-6 ">
                        <img src="/images/logo/DSI.png" alt="DSI Logo" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Ensure the logo container takes full height */
.col-xl-5.d-flex {
    height: 100%;
}
</style>
