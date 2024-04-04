<template>
    <div>
        <div class="card-group" style="background-color: #F8EEE2;">
            <div class="card border-0 rounded-0 shadow-0" style="background-image: url('/images/background/Background2.jpg'); background-size: cover;">
            <NuxtLink to="/Laundry">
            <div class="card-body Poppins text-center py-5">
                <h5 class="card-title p-5 text-white text-uppercase display-5 fw-bold Roboto">{{ $t('indexJudulCard1') }}</h5>
                <p class="card-text text-white pb-5 Poppins">
                    {{ $t('indexTextCard1') }}
                </p>
            </div>
            </NuxtLink>
            </div>
        </div>

        <div class="card-group" style="background-color: #F8EEE2;">
            <div class="card border-0 rounded-0 shadow-0" style="background-image: url('/images/background/Background1.jpg'); background-size: cover;">
            <NuxtLink to="/Agency">
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