<template>
    <div>
        <section class="py-5" lc-helper="background" style="background:linear-gradient(180deg, rgba(19, 16, 34, 0.15) 0%, rgba(19, 16, 34, 0.25) 100%), url('/images/backgroundagency.jpg')  center / cover no-repeat;">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-12 col-xxl-6">
                  <div class="lc-block text-black mb-5">
                      <div editable="rich">
                          <h1 class="display-4 fw-bold text-center text-dark Roboto">{{ $t('AgencyIndexJudul') }}</h1>
                      </div>
                  </div><!-- /lc-block -->
                  <div class="lc-block mb-8">
                      <div editable="rich">
                          <p class="text-center rfs-9 text-dark Poppins h5">{{ $t('AgencyIndexText') }}</p>
                      </div>
                  </div><!-- /lc-block -->
              </div><!-- /col -->
          </div>
      </div>
    <!-- Agency -->    




          <!-- Okaasan --> 
          <div class="container" id="km">
                <div class="row d-flex justify-content-center">
                  <div class="ag-format-container">
                    <div class="ag-courses_box">
                      
                      <div class="ag-courses_item">
                        <NuxtLink :to='`/${$i18n.locale}/agency/Event`' style="text-decoration: none;" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>
        
                          <div class="ag-courses-item_title Roboto d-flex align-items-center text-uppercase">
                            {{ $t('AgencyIndexBox1') }}
                          </div>
                  
                          <div class="ag-courses-item_date-box">

                          </div>
                        </NuxtLink>
                      </div>
                  
                      <div class="ag-courses_item">
                        <NuxtLink :to='`/${$i18n.locale}/agency/StrategicMarketing`' style="text-decoration: none;" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>
        
                          <div class="ag-courses-item_title Roboto d-flex align-items-center text-uppercase">
                            {{ $t('AgencyIndexBox2') }}
                          </div>
                  
                          <div class="ag-courses-item_date-box">

                          </div>
                        </NuxtLink>
                      </div>

                      <div class="ag-courses_item">
                        <NuxtLink :to='`/${$i18n.locale}/agency/ResearchMarketing`' style="text-decoration: none;" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>
        
                          <div class="ag-courses-item_title Roboto d-flex align-items-center text-uppercase">
                            {{ $t('AgencyIndexBox3') }}
                          </div>
                  
                          <div class="ag-courses-item_date-box">

                          </div>
                        </NuxtLink>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Grid row -->
              <div class="container">
                <div class="row justify-content-center">
                  <div class="lc-block text-black">
                      <div editable="rich">
                          <h4 class="display-6 fw-bold text-start text-dark Roboto">{{ $t('AgencyIndexSubJudul') }}</h4>
                      </div>
              </div><!-- /col -->
          </div>
              <div class="row mt-3">
                  <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                      <div class="image-container">
                        <NuxtLink :to='`/${$i18n.locale}/laundry/Okaasan`'> <img class="img-fluid" src="/images/footer/Okasaan_Transparan.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image"></NuxtLink>
                      </div><!-- /lc-block -->
                  </div><!-- /col -->
                  <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                      <div class="image-container">
                          <NuxtLink :to='`/${$i18n.locale}/laundry/Wimala`'><img class="img-fluid" src="/images/footer/Wimala_Transapran.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image"></NuxtLink>
                      </div><!-- /lc-block -->
                  </div><!-- /col -->
                  <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                      <div class="image-container">
                          <img class="img-fluid" src="/images/footer/Alliance.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                      </div><!-- /lc-block -->
                  </div><!-- /col -->
                  <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                  <div class="image-container">
                      <img class="img-fluid" src="/images/footer/SHARP.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                  </div><!-- /lc-block -->
                </div><!-- /col -->
                <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                  <div class="image-container">
                      <img class="img-fluid" src="/images/footer/PRIMUS.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                  </div><!-- /lc-block -->
                </div><!-- /col -->
                <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                  <div class="image-container">
                      <img class="img-fluid" src="/images/footer/Electrolux.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                  </div><!-- /lc-block -->
                </div><!-- /col -->
                <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                  <div class="image-container">
                      <img class="img-fluid" src="/images/footer/electroniccity.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                  </div><!-- /lc-block -->
                </div><!-- /col -->
              <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                  <div class="image-container">
                      <img class="img-fluid" src="/images/sm/Pertamina.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                  </div>
              </div>
              <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                  <div class="image-container">
                      <img class="img-fluid" src="/images/sm/LG.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                  </div>
              </div>
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                        <div class="image-container"><NuxtLink to="../Laundry/Okaasan">
                            <img class="img-fluid" src="/images/footer/AQUA.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </NuxtLink></div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                        <div class="image-container"><NuxtLink to="../Laundry/Wimala">
                            <img class="img-fluid" src="/images/footer/BEKO.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </NuxtLink></div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                        <div class="image-container">
                            <img class="img-fluid" src="/images/footer/BOSCH.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                        <div class="image-container">
                            <img class="img-fluid" src="/images/footer/KANGAROO.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                        </div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                    <div class="image-container">
                        <img class="img-fluid" src="/images/sm/Bibit.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                    </div><!-- /lc-block -->
                  </div><!-- /col -->
                  <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                    <div class="image-container">
                        <img class="img-fluid" src="/images/sm/BPJS.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                    </div><!-- /lc-block -->
                  </div><!-- /col -->
                  <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                    <div class="image-container">
                        <img class="img-fluid" src="/images/sm/BRI.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                    </div><!-- /lc-block -->
                  </div><!-- /col -->
                  <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                    <div class="image-container">
                        <img class="img-fluid" src="/images/sm/Lazada.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
                    </div><!-- /lc-block -->
                  </div><!-- /col -->
                  <div class="col-6 col-sm-3 mb-3 mb-lg-0 col-lg-2 d-flex align-items-center">
                    <div class="image-container">
                        <img class="img-fluid" src="/images/sm/SpeedQueen.png" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" alt="Photo by Lauren Edvalson" lc-helper="image">
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

.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px; /* Set a consistent height for the container */
    background-color: #f9f9f900; /* Optional for debugging layout */
    margin-bottom: 20px;
  }

  .image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Ensures images are contained within the set dimensions */
  }

.dropdown-menu {
        margin-top: 0px;
        border: none;
        background-color: #F6EEC9;
        padding: 3%;
    }

    .dropdown-item:hover {
        background-color: #F6EEC9;
    }
.Poppins {
  font-family: 'Poppins', sans-serif;
}

.Roboto {
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
}

.Worksans {
  font-family: 'Work Sans', sans-serif;
}

.footer-text {
  color: black;
  font-family: 'Poppins', sans-serif;

  }
  
  .footer-text:hover {
  color: #931A25;
  }



.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding: 50px 0;
}
.ag-courses_item {
  -ms-flex-preferred-size: calc(33.3333333333% - 30px);
  flex-basis: calc(33.3333333333% - 30px);

  margin: 0 15px 30px;

  overflow: hidden;

  border-radius: 28px;
}
.ag-courses-item_link {
  display: block;
  padding: 50px 20px;
  background-image: url('/images/background/Background2.jpg');
  background-size: contain;
  overflow: hidden;

  position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #FFF;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.ag-courses-item_title {
  min-height: 87px;
  margin: 0 0 25px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date-box {
  font-size: 18px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #FFF;

  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}
.ag-courses-item_bg {
  height: 140px;
  width: 140px;
  background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.500), rgb(162, 162, 162));

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 100%;

  -webkit-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
  background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.500), rgb(162, 162, 162));
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
  background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.500), rgb(162, 162, 162));
}



@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(33.3333333333% - 30px);
    flex-basis: calc(33.3333333333% - 30px);
  }
  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 100%;
  }

}
@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }
  .ag-courses-item_link {
    padding: 22px 40px;
  }
  .ag-courses-item_date-box {
    font-size: 16px;
  }
}

.dropdown-item:hover {
  background-color: #931A25;
  color: #fff;
}

</style>