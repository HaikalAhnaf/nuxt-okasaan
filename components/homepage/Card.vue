<template>
    <div>
        <div class="card-group animate__animated animate__fadeIn" style="background-color: #F8EEE2;">
            <div class="card border-0 rounded-0 shadow-0" style="background:linear-gradient(180deg, rgba(147, 26, 37, 0.55) 0%, rgba(147, 26, 37, 0.65) 100%), url('/images/imgdry.jpg')  center / cover no-repeat;">
            <NuxtLink :to='`/${$i18n.locale}/laundry`'>
            <div class="card-body Poppins text-center py-5">
                <h5 class="card-title p-5 text-white text-uppercase display-5 fw-bold Roboto">{{ $t('indexJudulCard1') }}</h5>
                <p class="card-text text-white pb-5 Poppins">
                    {{ $t('indexTextCard1') }}
                </p>
            </div>
            </NuxtLink>
            </div>
        </div>

        <div class="card-group animate__animated animate__fadeIn" style="background-color: #F8EEE2;">
            <div class="card border-0 rounded-0 shadow-0" style="background:linear-gradient(180deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.90) 100%), url('/images/imgagc.jpg')  center / cover no-repeat;">
            <NuxtLink :to='`/${$i18n.locale}/Agency`'>
            <div class="card-body Poppins text-center py-5" style="color: #931A25;">
                <h5 class="card-title p-5 text-uppercase display-5 fw-bold Roboto">{{ $t('indexJudulCard2') }}</h5>
                <p class="card-text pb-5 Poppins">
                    {{ $t('indexTextCard2') }}
                </p>
            </div>
            </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .card {
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 6px 10px rgba(0, 0, 0, .1), 0 0 6px rgba(0, 0, 0, .2);
      transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
      cursor: pointer;
    }
  
    .card a {
      text-decoration: none;
      color: black;
    }
  
  
    .card:hover {
      transform: scale(0.98);
      box-shadow: 0 6px 10px rgba(0, 0, 0, .1), 0 0 6px rgba(0, 0, 0, .2);
    }
</style>