<template>
    <div>
        <div class="accordion-item border-0 " style="background: transparent;">
            <h2 class="accordion-header" id="flush-headingOneX">
              <button data-bs-collapse-init class="accordion-button text-black" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapse2024" aria-expanded="true" aria-controls="flush-collapseOneX" style="background: transparent;">
                <h2 editable="inline" class="display-6 mb-0 Roboto"><b>{{ $t('AgencyEventTahun2024') }}</b></h2>
              </button>
            </h2>
            <div id="flush-collapse2024" class="accordion-collapse collapse"
              aria-labelledby="flush-headingOneOneX" data-bs-parent="#accordionFlushExampleX">
              <div class="accordion-body">
                <div class="accordion accordion-borderless" id="accordionFlushExampleXX">
                  <EventYear2024LaundrySingapore />
                  <EventYear2024LaundryIndonesia />
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