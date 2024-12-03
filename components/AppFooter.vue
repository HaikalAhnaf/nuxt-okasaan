<template>
    <div>
        <footer class="text-center text-lg-start bg-white text-muted shadow-lg">
            <!-- Section: Links  -->
            <section class="d-flex justify-content-center">
            <div class="container py-2 text-center text-md-start mt-5 border-bottom">
                <!-- Grid row -->
                <div class="row mt-3 pt-5">
                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center"><NuxtLink :to='`/${$i18n.locale}/laundry`' style="text-decoration: none;">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4 Roboto" style="color: #931A25;">
                    {{$t('HalamanLaundryIndex')}}
                    </h6></NuxtLink>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/laundry/Okaasan`' class="text-reset" style="text-decoration: none;">{{$t('HalamanLaundryOkaasan')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/laundry/Training`' class="text-reset" style="text-decoration: none;">{{$t('HalamanLaundryTraining')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/laundry/LaundryEquipmentDanSupplies`' class="text-reset" style="text-decoration: none;">{{$t('HalamanLaundryLaundryEquipmentDanSupplies')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/laundry/Wimala`' class="text-reset" style="text-decoration: none;">{{$t('HalamanLaundryWimala')}}</NuxtLink>
                    </p>
                </div>
                
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mb-4 text-center"><NuxtLink :to='`/${$i18n.locale}/Agency`' style="text-decoration: none;">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4 Roboto" style="color: #931A25;">
                    {{$t('HalamanAgencyIndex')}}
                    </h6></NuxtLink>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/agency/Event`' class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyEvent')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/agency/StrategicMarketing`' class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyStrategicMarketing')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/agency/ResearchMarketing`' class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyResearchMarketing')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/agency/strategicmarketing/SocialMedia`' class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyStrategicMarketingSocialMedia')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/agency/StrategicMarketing/ProduksiFotoDanVideo`' class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyStrategicMarketingPhotodanVideoProduction')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink :to='`/${$i18n.locale}/agency/StrategicMarketing/Website`' class="text-reset" style="text-decoration: none;">{{$t('HalamanAgencyStrategicMarketingWebsite')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink class="text-reset" style="text-decoration: none;" :to='`/${$i18n.locale}/agency/ResearchMarketing/Demographic`'>{{$t('HalamanAgencyResearchMarketingDemographic')}}</NuxtLink>
                    </p>
                    <p class="footer-text">
                    <NuxtLink class="text-reset" style="text-decoration: none;" :to='`/${$i18n.locale}/agency/ResearchMarketing/Geographic`'>{{$t('HalamanAgencyResearchMarketingGeographic')}}</NuxtLink>
                    </p>


                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4 justify-content-end"><NuxtLink :to='`/${$i18n.locale}/ContactUs`' style="text-decoration: none;">
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
                        <a href="https://linktr.ee/devavrata.sinergi?utm_source=linktree_profile_share&ltsid=68f78ad5-8fa8-4144-84d2-79502e15e6f4"
                            class="link-white" target="_blank" style="text-decoration: none;color: #931A25;">
                            <i class="fa fa-link"></i>
                        </a>
                        </button>             
                    </span>

                    </div>
                    <!-- Right -->
                </div>
                <!-- Grid column -->
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