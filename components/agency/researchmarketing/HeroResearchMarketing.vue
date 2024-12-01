<template>
    <div>
        <div class="container">
        <div class="row py-5">
            <div class="col-md-1 col-lg-1 d-none d-lg-flex align-items-center">
                <div class="lc-block d-flex Poppins" style="writing-mode: vertical-rl; transform:rotate(180deg)">
                    <a class="btn btn-link my-1 text-dark text-decoration-none" href="SM/Socialmedia.html" role="button" style="font-size: small;">{{ $t('HalamanAgencyStrategicMarketingSocialMedia') }}</a>
                    <a class="btn btn-link my-1 text-dark text-decoration-none" href="SM/Videoproduction.html" role="button" style="font-size: small;">{{ $t('HalamanAgencyStrategicMarketingPhotodanVideoProduction') }}</a>
                    <a class="btn btn-link my-1 text-dark text-decoration-none" href="SM/Website.html" role="button" style="font-size: small;">{{ $t('HalamanAgencyStrategicMarketingWebsite') }}</a>
                </div><!-- /lc-block -->
            </div><!-- /col -->
            <div class="col-lg-6 col-md-6 col-12 px-xl-1">
                <div class="lc-block">
                    <img style="object-fit:cover" class="img-fluid w-75 " src="/images/reserach/imgsr.jpg" alt="Photo by Atikh Bana">
                </div><!-- /lc-block -->
            </div><!-- /col -->
            <div class="col-lg-4 col-md-6 d-flex align-items-center">
                <div class="lc-block pt-lg-0 pt-3">
                    <div editable="rich ">
                      <h1 class="h2 fw-bold text-uppercase Roboto">{{ $t('AgencyResearchMarketingJudul') }}</h1>
                      <p class="my-3 Poppins" style="text-align: justify;">{{ $t('AgencyResearchMarketingText') }}</p>

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