<template>
    <div>
        <section class="py-5" lc-helper="background" style="background:linear-gradient(180deg, rgba(19, 16, 34, 0.58) 0%, rgba(19, 16, 34, 0.78) 100%), url('/images/LaundryLP.jpeg')  center / cover no-repeat;">
      <div class="container ">
          <div class="row justify-content-center">
              <div class="col-md-12 col-xxl-6">
                  <div class="lc-block text-white mb-5">
                      <div editable="rich">
                          <h1 class="display-3 fw-bold text-center Roboto">{{ $t('LaundryIndexJudul') }}</h1>
                      </div>
                  </div><!-- /lc-block -->
                  <div class="lc-block mb-8">
                      <div editable="rich">
                          <p class="text-center rfs-9 text-light Poppins h5">{{ $t('LaundryIndexText') }}</p>
                      </div>
                  </div><!-- /lc-block -->
              </div><!-- /col -->
          </div>
      </div>
    <!-- Laundry -->      


          <!-- Okaasan --> 
              <div class="container" id="km">
                <div class="row pt-3 mt-5 d-flex justify-content-center">
                  <div class="ag-format-container">
                    <div class="ag-courses_box">
                      
                      <div class="ag-courses_item">
                        <NuxtLink :to='`/${$i18n.locale}/laundry/Okaasan`' style="text-decoration: none;" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>        
                          <div class="ag-courses-item_title Roboto d-flex align-items-center text-uppercase">
                            {{ $t('LaundryIndexBox1') }}
                          </div>         
                          <div class="ag-courses-item_date-box">

                          </div>
                        </NuxtLink>
                      </div>
                  
                      <div class="ag-courses_item">
                        <NuxtLink  :to='`/${$i18n.locale}/laundry/Training`' style="text-decoration: none;" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>                 
                          <div class="ag-courses-item_title Roboto d-flex align-items-center text-uppercase">
                            {{ $t('LaundryIndexBox2') }}
                          </div>                 
                          <div class="ag-courses-item_date-box">

                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row d-flex justify-content-center">
                  <div class="ag-format-container">
                    <div class="ag-courses_box">
                      
                      <div class="ag-courses_item">
                        <NuxtLink :to='`/${$i18n.locale}/laundry/LaundryEquipmentDanSupplies`' style="text-decoration: none;" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>       
                          <div class="ag-courses-item_title Roboto d-flex align-items-center text-uppercase">
                            {{ $t('LaundryIndexBox3') }}
                          </div>                  
                          <div class="ag-courses-item_date-box">

                          </div>
                        </NuxtLink>
                      </div>
                  
                      <div class="ag-courses_item">
                        <NuxtLink :to='`/${$i18n.locale}/laundry/Wimala`' style="text-decoration: none;" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>                
                          <div class="ag-courses-item_title Roboto d-flex align-items-center text-uppercase">
                            {{ $t('LaundryIndexBox4') }}
                        </div>                
                          <div class="ag-courses-item_date-box">

                          </div>
                        </NuxtLink>
                      </div>

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
.ag-courses_box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    
    padding: 0px 0;
  }
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
    
    margin: 0 15px 30px;

    overflow: hidden;

    border-radius: 28px;
  }
  .ag-courses-item_link {
    display: block;
    padding: 50px 20px;
    background-image: url('/images/background/Background1.jpg');
    background-size: cover;
    overflow: hidden;

    position: relative;
  }
   
  .ag-courses-item_link:hover .ag-courses-item_date {
    text-decoration: none;
    color: black;
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
    color: black;

    z-index: 2;
    position: relative;
  }

  .ag-courses-item_date-box {
    font-size: 18px;
    color: black;

    z-index: 2;
    position: relative;
  }
  .ag-courses-item_date {
    font-weight: bold;
    color: black;

    -webkit-transition: color .5s ease;
    -o-transition: color .5s ease;
    transition: color .5s ease
  }
  .ag-courses-item_bg {
    height: 140px;
    width: 140px;
    background-image: linear-gradient(120deg, rgba(176, 176, 176, 0.5), rgba(187, 187, 187, 0.442));
    
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
    background-image: linear-gradient(120deg, rgba(176, 176, 176, 0.5), rgba(187, 187, 187, 0.442));
  }
  .ag-courses_item:nth-child(3n) .ag-courses-item_bg {
    background-image: linear-gradient(120deg, rgba(176, 176, 176, 0.5), rgba(187, 187, 187, 0.442));
  }



  @media only screen and (max-width: 979px) {
    .ag-courses_item {
      -ms-flex-preferred-size: calc(50% - 30px);
      flex-basis: calc(50% - 30px);
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
</style>