<template>
    <div>
        <div class="container px-xl-4 overflow-hidden">
      
            <div class="row g-lg-5 mb-6 d-flex justify-content-center">
                <div class="col-12 col-md-4 col-lg-4 pb-5">
                <div class="lc-block mb-4"><NuxtLink to="/agency/StrategicMarketing/SocialMedia">
                <img class="img-fluid rounded-2" src="/images/sm/imgcompressors-SosialMed.jpg" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Frédéric Perez">
                </NuxtLink></div><!-- /lc-block -->
                <div class="lc-block">
                <div editable="rich">

                    <h4>{{ $t('AgencyStrategicMarketingService1') }}</h4>
                    <p class="lead text-black" style="text-align: justify;">{{ $t('AgencyStrategicMarketingService1Text') }}</p>
                                <NuxtLink to="/agency/StrategicMarketing/SocialMedia"><button class="btn text-white" style="float: inline-end;background-color: #931a25;">Details</button></NuxtLink>

                </div>
                </div><!-- /lc-block -->
                </div>
                <div class="col-12 col-md-4 col-lg-4 pb-5">
                    <div class="lc-block mb-4"><NuxtLink to="/agency/StrategicMarketing/ProduksiFotoDanVideo">
                        <img class="img-fluid rounded-2" src="/images/sm/imgcompressors-ProVid.jpg" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Frédéric Perez">
                    </NuxtLink></div><!-- /lc-block -->
                    <div class="lc-block">
                        <div editable="rich">

                            <h4>{{ $t('AgencyStrategicMarketingService2') }}</h4>
                            <p class="lead text-black" style="text-align: justify;">{{ $t('AgencyStrategicMarketingService2Text') }}</p>
                <NuxtLink to="/agency/StrategicMarketing/ProduksiFotoDanVideo"><button class="btn text-white" style="float: inline-end;background-color: #931a25;">Details</button></NuxtLink>

                        </div>
                    </div><!-- /lc-block -->
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                    <div class="lc-block mb-4"><NuxtLink to="/agency/StrategicMarketing/Website">
                        <img class="img-fluid rounded-2" src="/images/sm/imgcompressors-Wsite.jpg" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Frédéric Perez">
                    </NuxtLink></div><!-- /lc-block -->
                    <div class="lc-block">
                        <div editable="rich">

                            <h4>{{ $t('AgencyStrategicMarketingService3') }}</h4>
                            <p class="lead text-black" style="text-align: justify;">{{ $t('AgencyStrategicMarketingService3Text') }}</p>
                            <NuxtLink to="/agency/StrategicMarketing/Website"><button class="btn text-white" style="float: inline-end;background-color: #931a25;">Details</button></NuxtLink>
                        </div>
                    </div><!-- /lc-block -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>