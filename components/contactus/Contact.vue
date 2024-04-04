<template>
    <div>
        <div class="bg-image shadow-1-strong" style="background-image: url('/images/logo/DevarataEdit.jpeg');background-size: cover;background-color: #F7F7F7;">
          <div class="py-5" style="background-color: rgba(0, 0, 0, 0.421);">
            <div class="container py-5">
              <div class="py-5 mt-5">
                <a href="https://linktr.ee/devavrata.sinergi?utm_source=linktree_profile_share&ltsid=68f78ad5-8fa8-4144-84d2-79502e15e6f4" style="text-decoration: none;"><h1 class="display-5 fw-bold text-white text-center text-uppercase Roboto d-flex align-items-center justify-content-center"><i class="fa fa-link bg-white rounded-circle p-3 fs-3 text-black mx-3" ></i> {{ $t('KontakKamiJudul') }}</h1></a>              
              </div>  
              <div class="row py-5">

                <div class="col-12 col-md-4 col-lg-4 py-3">
                  <div class="bg-image card shadow-1-strong h-100 rounded-9" style="background-color: rgba(0, 0, 0, 0.750);border: 2px solid #931A25;">
                    <div class="card-body text-white pt-3 pb-5 ">
                      <div class="text-center pb-3"> 
                      <i class="fa fa-building-columns bg-white rounded-circle p-3 text-black" ></i>
                      </div>
                      <h5 class="card-title text-center Roboto">{{ $t('KontakKamiJudulAlamat') }}</h5>
                      <div class="card-text Poppins" style="text-align: justify;">
                        {{ $t('KontakKamiAlamat') }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-4 col-lg-4 py-3">
                  <div class="bg-image card shadow-1-strong h-100 rounded-9 " style="background-color: rgba(0, 0, 0, 0.750);border: 2px solid #931A25;">
                    <div class="card-body text-white pt-3 pb-5">
                      <div class="text-center pb-3"> 
                      <i class="fa fa-envelope bg-white rounded-circle p-3 text-black" ></i>
                      </div>
                      <h5 class="card-title text-center Roboto">{{ $t('KontakKamiJudulEmail') }}</h5>
                      <div class="card-text Poppins">
                          <a href="mailto: deva@devavrata.co.id" class="link-white"
                            style="text-decoration: none;color: #fff;">
                            <i class="fa fa-envelope"></i> {{ $t('KontakKamiEmail1') }}
                          </a>

                          <br>
                          <a href="mailto: meilianti@devavrata.co.id"
                            style="text-decoration: none;color: #fff;">
                            <i class="fa fa-envelope"></i> {{ $t('KontakKamiEmail2') }}
                          </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-4 col-lg-4 py-3">
                  <div class="bg-image card shadow-1-strong h-100 rounded-9" style="background-color: rgba(0, 0, 0, 0.750);border: 2px solid #931A25;">
                    <div class="card-body text-white pt-3 pb-5">
                      <div class="text-center pb-3"> 
                      <i class="fa fa-phone-alt bg-white rounded-circle p-3 text-black" ></i>
                      </div>
                      <h5 class="card-title text-center Roboto">{{ $t('KontakKamiNarahubung') }}</h5>
                      <div class="card-text Poppins footer">
                        <a href="https://web.whatsapp.com/send?phone=6287899962474&amp;text=" style="text-decoration: none;" class="text-white">{{ $t('KontakKamiNarahubung1') }}</a><br>
                        <a href="https://web.whatsapp.com/send?phone=6287886862589&amp;text=" style="text-decoration: none;" class="text-white">{{ $t('KontakKamiNarahubung2') }}</a>
                      </div>
                    </div>
                  </div>
                </div>

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

<style scoped>

</style>