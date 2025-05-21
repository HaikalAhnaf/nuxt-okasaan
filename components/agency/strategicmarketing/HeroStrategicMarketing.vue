<template>
    <div>
        <div class="container">
        <div class="row py-5">
            <div class="col-md-1 col-lg-1 d-none d-lg-flex align-items-center">
                <div class="lc-block d-flex Poppins" style="writing-mode: vertical-rl; transform:rotate(180deg)">
                    <NuxtLink :to='`/${$i18n.locale}/agency/strategicmarketing/SocialMedia`' class="btn btn-link my-1 text-dark text-decoration-none" role="button" style="font-size: small;">{{ $t('HalamanAgencyStrategicMarketingSocialMedia') }}</NuxtLink>
                    <NuxtLink :to='`/${$i18n.locale}/agency/StrategicMarketing/ProduksiFotoDanVideo`' class="btn btn-link my-1 text-dark text-decoration-none" role="button" style="font-size: small;">{{ $t('HalamanAgencyStrategicMarketingPhotodanVideoProduction') }}</NuxtLink>
                    <NuxtLink :to='`/${$i18n.locale}/agency/StrategicMarketing/Website`' class="btn btn-link my-1 text-dark text-decoration-none" role="button" style="font-size: small;">{{ $t('HalamanAgencyStrategicMarketingWebsite') }}</NuxtLink>
                </div><!-- /lc-block -->
            </div><!-- /col -->
            <div class="col-lg-6 col-md-6 col-12 px-xl-1">
                <div class="lc-block">
                    <img style="object-fit:cover" class="img-fluid w-75 " src="/images/sm/imgcompressors-MarketS.jpg" alt="Photo by Atikh Bana">
                </div><!-- /lc-block -->
            </div><!-- /col -->
            <div class="col-lg-4 col-md-6 d-flex align-items-center">
                <div class="lc-block pt-lg-0 pt-3">
                    <div editable="rich ">
                      <h1 class="h2 fw-bold text-uppercase Roboto">{{ $t('AgencyStrategicMarketingJudul') }}</h1>
                      <p class="my-3 Poppins" style="text-align: justify;">{{ $t('AgencyStrategicMarketingText') }}</p>

                    </div>
                </div>
            </div><!-- /col -->
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>