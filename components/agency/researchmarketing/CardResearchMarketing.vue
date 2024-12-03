x<template>
    <div>
        <div class="container px-xl-4 overflow-hidden">
      
            <div class="row g-lg-5 mb-6 d-flex justify-content-center">
                <div class="col-12 col-md-5 col-lg-5 pb-5">
                    <div class="lc-block mb-4"><NuxtLink :to='`/${$i18n.locale}/agency/researchmarketing/Demographic`'>
                <img class="img-fluid rounded-2" src="/images/sm/demoluar.jpg" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Frédéric Perez">
                </NuxtLink></div><!-- /lc-block -->
                <div class="lc-block">
                <div editable="rich">

                    <h4>{{ $t('AgencyResearchMarketing1') }}</h4>
                    <p class="lead text-black" style="text-align: justify;">{{ $t('AgencyResearchMarketing1Text') }}</p>
                     <NuxtLink :to='`/${$i18n.locale}/agency/researchmarketing/Demographic`'><button class="btn text-white" style="float: inline-end;background-color: #931a25;">Details</button></NuxtLink>

                </div>
                </div><!-- /lc-block -->
                </div>
                <div class="col-12 col-md-5 col-lg-5 pb-5">
                    <div class="lc-block mb-4"><NuxtLink :to='`/${$i18n.locale}/agency/researchmarketing/Geographic`'>
                        <img class="img-fluid rounded-2" src="/images/sm/geoluar.jpg" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Frédéric Perez">
                    </NuxtLink></div><!-- /lc-block -->
                    <div class="lc-block">
                        <div editable="rich">

                            <h4>{{ $t('AgencyResearchMarketing2') }}</h4>
                            <p class="lead text-black" style="text-align: justify;">{{ $t('AgencyResearchMarketing2Text') }}</p>
                <NuxtLink :to='`/${$i18n.locale}/agency/researchmarketing/Geographic`'><button class="btn text-white" style="float: inline-end;background-color: #931a25;">Details</button></NuxtLink>

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