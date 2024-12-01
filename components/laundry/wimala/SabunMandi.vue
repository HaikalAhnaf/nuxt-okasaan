<template>
    <div>
        <div class="container pt-2 pb-5">
        <div class="row">
          <div class="col-md-6">
            <h2 class="text-white text-center py-1 fs-1 text-uppercase">{{$t('LaundryWimalaSabunMandiJudul')}}</h2>
              <div class="card p-5 " style="background-color: rgba(255, 255, 255, 0.875);">
                <div class="lc-block">
                  <div editable="rich">
                    <h3 class="fs-6">{{$t('LaundryWimalaDeskripsi')}}</h3>
                    <h4 class="fs-6 Roboto py-1 fw-light" style="text-align: justify;">
                      {{$t('LaundryWimalaSabunMandiDeskripsi')}}
                    </h4>
                    <ul class="list-unstyled list pt-3 AllianceNo1">
                      <li class="mb-3 d-flex align-items-center"><img src="/images/wimala/icons/anti-virus.png" class=" me-2" alt="icon">{{$t('LaundryWimalaSabunMandiList1')}}</li>
                      <li class="mb-3 d-flex align-items-center"><img src="/images/wimala/icons/wash-your-hands.png" class=" me-2" alt="icon">{{$t('LaundryWimalaSabunMandiList2')}}</li>
                      <li class="mb-3 d-flex align-items-center"><img src="/images/wimala/icons/nose.png" class=" me-2" alt="icon">{{$t('LaundryWimalaSabunMandiList3')}}</li>
                    </ul> 
                  </div>
                </div><!-- /lc-block -->
            </div>
          </div><!-- /col -->
          <div class="col-12 col-md-6 col-lg-6 pt-3">
            <div class="row d-flex justify-content-center">
              <div class="col-6 col-md-7 col-lg-6">
                <div class="product-wrapper mb-45 text-center Poppins">
                  <div class="product-img">
                    <a href="https://www.tokopedia.com/okaasanhouse/sabun-mandi-cair-organik-mawar-250-ml-9a559?extParam=src%3Dshop%26whid%3D9540592" target="_blank" data-abc="true">
                      <img src="/images/wimala/SabunMandi.JPG" class="rounded-3 w-100" alt="icon" />
                    </a>
                    <span class="text-center">{{$t('LaundryWimalaSabunMandiJudulGambar1')}}</span>
                    <div class="product-action">
                      <div class="product-action-style">
                        <a
                        class="action-cart"
                        title="Add To Cart" 
                        href="https://www.tokopedia.com/okaasanhouse/sabun-mandi-cair-organik-mawar-250-ml-9a559?extParam=src%3Dshop%26whid%3D9540592" target="_blank">
                        <img src="/images/trolley.png" alt="icon" width="32px" height="32px">
                      </a>
                      </div>
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
.mt-100 {
      margin-top: 100px;
    }
    .product-wrapper,
    .product-img {
      overflow: hidden;
      position: relative;
	  
    }
    .mb-45 {
      margin-bottom: 45px;
    }
    .product-action {
      bottom: 0px;
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      text-align: center;
      transition: all 0.6s ease 0s;
    }
    .product-wrapper {
      border-radius: 10px;
    }
    .product-img > span {
      background-color: #f6eec97a;
      box-shadow: 0 0 8px 1.7px rgba(0, 0, 0, 0.06);
      color: black;
      display: inline-block;
      font-size: 10px;
      left: 20px;
      letter-spacing: 1px;
      padding: 3px 12px;
      position: absolute;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      top: 20px;
    }

	
    .product-action-style {
      background-color: #ffffff00;
      /* box-shadow: 0 0 8px 1.7px rgba(0, 0, 0, 0.06);
      display: inline-block; */
      padding: 16px 2px 12px;
    }
    .product-action-style > a {
      color: #979797;
      line-height: 1;
      padding: 0 21px;
      position: relative;
    }
    .product-action-style > a.action-plus {
      font-size: 18px;
    }
    .product-wrapper:hover .product-action {
      bottom: 20px;
      opacity: 1;
    }


</style>