<template>
    <div>
        <section class="py-5" lc-helper="background" style="background:linear-gradient(180deg, rgba(19, 16, 34, 0.58) 0%, rgba(19, 16, 34, 0.78) 100%), url('/images/training/bgT.jpg')  center / cover no-repeat;">
            <div class="container py-5">
                <div class="row justify-content-center py-5">
                    <div class="col-md-12 col-xxl-6 py-5">
                        <div class="lc-block text-white mb-5">
                            <div editable="rich">
                                <h1 class="display-4 fw-bold text-center Roboto">{{$t('LaundryTrainingJudul')}}</h1>
                            </div>
                        </div><!-- /lc-block -->
                        <div class="lc-block mb-5">
                            <div editable="rich">
                                <p class="text-center rfs-9 text-light Poppins">{{$t('LaundryTrainingText') }}</p>
                            </div>
                        </div><!-- /lc-block -->
                    </div><!-- /col -->
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

</style>