<template>
    <div>
        <footer class="text-center text-lg-start bg-white text-muted shadow-lg">
            <!-- Section: Links  -->
            <section class="d-flex justify-content-center">
            <div class="container py-2 text-center text-md-start mt-5 border-bottom">
                <!-- Grid row -->
                <div class="row mt-3 pt-5">
                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center"><NuxtLink to="/Laundry" style="text-decoration: none;">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4 Roboto" style="color: #931A25;">
                    {{$t('HalamanLaundryIndex')}}
                    </h6></NuxtLink>
                    <p class="footer-text">
                    <NuxtLink to="/laundry/Okaasan" class="text-reset" style="text-decoration: none;">{{$t('HalamanLaundryOkaasan')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink to="/laundry/Training" class="text-reset" style="text-decoration: none;">{{$t('HalamanLaundryTraining')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink to="/laundry/LaundryEquipmentDanSupplies" class="text-reset" style="text-decoration: none;">{{$t('HalamanLaundryLaundryEquipmentDanSupplies')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink to="/laundry/Wimala" class="text-reset" style="text-decoration: none;">{{$t('HalamanLaundryWimala')}}</NuxtLink>
                    </p>
                </div>
                
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mb-4 text-center"><NuxtLink to="/Agency" style="text-decoration: none;">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4 Roboto" style="color: #931A25;">
                    {{$t('HalamanAgencyIndex')}}
                    </h6></NuxtLink>
                    <p class="footer-text">
                    <NuxtLink to="/agency/Event" class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyEvent')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink to="/agency/StrategicMarketing" class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyStrategicMarketing')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink to="/agency/strategicmarketing/SocialMedia" class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyStrategicMarketingSocialMedia')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink to="/agency/strategicmarketing/ProduksiFotoDanVideo" class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyStrategicMarketingPhotodanVideoProduction')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink to="/agency/strategicmarketing/Website" class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyStrategicMarketingWebsite')}}</NuxtLink>
                    </p>


                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4 justify-content-end"><NuxtLink to="ContactUs" target="_blank" style="text-decoration: none;">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4 Roboto" style="color: #931A25;">
                        {{$t('HalamanKontakKami')}}
                    </h6></NuxtLink>
                    <!-- Right -->
                    <div>
                    <p class="Poppins" style="text-align: justify; color: black;">{{$t('KontakKamiAlamat')}}</p>
                    <span class="d-inline-block Poppins" tabindex="0" data-mdb-toggle="tooltip" title="Linktree Devavrata">
                        linktree: 
                        <button type="button" class="rounded-9 btn btn-outline-black">
                        <NuxtLink to="https://linktr.ee/devavrata.sinergi?utm_source=linktree_profile_share&ltsid=68f78ad5-8fa8-4144-84d2-79502e15e6f4"
                            class="link-white" target="_blank" style="text-decoration: none;color: #931A25;">
                            <i class="fa fa-link"></i>
                        </NuxtLink>
                        </button>             
                    </span>

                    </div>
                    <!-- Right -->
                </div>
                <!-- Grid column -->
                </div>
                <!-- Grid row -->
                <div class="row">
                <div class="row mb-5">
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg d-flex align-items-center">
                        <div class="lc-block"><NuxtLink to="../Laundry/Okaasan">
                            <img class="img-fluid" src="/images/footer/Okasaan_Transparan.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </NuxtLink></div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg d-flex align-items-center">
                        <div class="lc-block"><NuxtLink to="../Laundry/Wimala">
                            <img class="img-fluid" src="/images/footer/Wimala_Transapran.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </NuxtLink></div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg d-flex align-items-center">
                        <div class="lc-block">
                            <img class="img-fluid" src="/images/footer/Alliance.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg d-flex align-items-center">
                        <div class="lc-block">
                            <img class="img-fluid" src="/images/footer/PRIMUS.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg d-flex align-items-center">
                        <div class="lc-block">
                            <img class="img-fluid" src="/images/footer/SHARP.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg d-flex align-items-center">
                        <div class="lc-block">
                            <img class="img-fluid" src="/images/footer/Electrolux.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg d-flex align-items-center">
                    <div class="lc-block">
                        <img class="img-fluid" src="/images/footer/electroniccity.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                    </div><!-- /lc-block -->
                </div><!-- /col -->
                <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg d-flex align-items-center">
                    <div class="lc-block">
                        <img class="img-fluid" src="/images/footer/NORMALBARU.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                    </div><!-- /lc-block -->
                </div><!-- /col -->
                </div>
                </div>
            </div>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="text-center p-4 text-black Poppins" style="background-color: white">
            © 2024 Copyright :
            <a class="fw-bold" href="https://devavrata.co.id/" style="text-decoration: none; color: #931A25;">Devavrata Sinergi</a>
            </div>
            <!-- Copyright -->
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer-text {
    color: black;
    font-family: 'Poppins', sans-serif;

    }
    .footer-text:hover {
    color: #931A25;
    }
    .Poppins {
    font-family: 'Poppins', sans-serif;
    }

    .Roboto {
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    }

    .Worksans {
    font-family: 'Work Sans', sans-serif;
    }
</style>