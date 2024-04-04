<template>
    <div>
        <div class="accordion-item border-0 " style="background: transparent;">
            <h2 class="accordion-header" id="flush-headingTwoX">
              <button data-bs-collapse-init class="accordion-button collapsed text-black" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX" style="background: transparent;">
                <h2 editable="inline" class="display-6 mb-0 Roboto"><b>{{ $t('AgencyEventTahun2022') }}</b></h2>
              </button>
            </h2>
            <div id="flush-collapseTwoX" class="accordion-collapse collapse" aria-labelledby="flush-headingTwoX"
              data-bs-parent="#accordionFlushExampleX">
              <div class="accordion-body">
                <div class="accordion accordion-borderless" id="accordionFlushExampleXX22">
                  <YearEvent2022LaundryExpo />    
                </div>
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