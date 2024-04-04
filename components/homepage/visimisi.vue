<template>
    <div>
        <section class="py-5 visimisi">    
            <div class="container" style="color: #931A25;">
                <div class="row py-4 py-lg-6">
                    <div class="col-lg-6 px-lg-5 p-4 d-flex justify-content-center">
                    <img src="/images/visimisi/VISI2.png" alt="">
                    </div>
                    <div class="col-lg-6 px-lg-5 p-4 d-flex align-items-center">
                    <div>
                        <h1 class="Roboto">{{ $t('indexVisi') }}</h1> <br>
                    <h4 class="Poppins" style="text-align: justify;">{{ $t('indexIsiVisi') }}</h4>
                    </div>
                    </div>
                </div>
                <div class="row py-4 py-lg-6">
                    <div class="col-lg-6 px-lg-5 p-4 d-flex justify-content-center">
                    <img src="/images/visimisi/MISI3.png" alt="">
                    </div>
                    <div class="col-lg-6 px-lg-5 p-4 d-flex align-items-center">
                    <div>
                        <h1 class="Roboto">{{ $t('indexMisi') }}</h1> <br>
                    <h4 class="Poppins" style="text-align: justify;">{{ $t('indexIsiMisi') }}</h4>
                    </div>
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
      .visimisi {
        padding: 3rem 0 7rem;
        position: relative;
        background-size:100%;
        background-image: url('/images/background/HeroSectionKanan.jpg');
        z-index: 0
    }

    @media (max-width: 500px) {

       .visimisi {
        background-image: url('/images/background/BG-HP.jpg');
       }
        
      }

</style>