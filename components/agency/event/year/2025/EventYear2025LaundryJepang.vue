<template>
    <div>
        <div class="accordion-item border-0 " style="background: transparent;">
                    <h2 class="accordion-header" id="flush-headingOneThreeX">
                      <button data-bs-collapse-init class="accordion-button collapsed text-black" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse2025Jepang" aria-expanded="false" aria-controls="flush-collapseOneThreeX" style="background: transparent;">
                        <h4 editable="inline" class="mb-0 Roboto text-uppercase"><b>{{ $t('AgencyEventTahun2025Event1') }}</b></h4>
                      </button>
                    </h2>
                    <div id="flush-collapse2025Jepang" class="accordion-collapse collapse" aria-labelledby="flush-headingOneThreeX"
                      data-bs-parent="#accordionFlushExampleXX">
                      <div class="accordion-body">
                        <div class="row d-flex justify-content-center">
                          <div class="col-lg-4 col-md-4 col-xs-6 thumb ">
                            <a v-for="(image, index) in image1" :key="index" :href="image.src" data-fancybox="gallery">
                                <img :src="image.src" :alt="image.alt" class="zoom img-fluid ">
                            </a>
                          </div>
                   
                           
                          <div class="col-lg-4 col-md-4 col-xs-6 thumb">
                            <a v-for="(image, index) in image2" :key="index" :href="image.src" data-fancybox="gallery">
                              <img :src="image.src" :alt="image.alt" class="zoom img-fluid ">
                            </a>
                          </div>
                           
                          <div class="col-lg-4 col-md-4 col-xs-6 thumb">
                            <a v-for="(image, index) in image3" :key="index" :href="image.src" data-fancybox="gallery">
                              <img :src="image.src" :alt="image.alt" class="zoom img-fluid ">
                            </a>
                          </div>

                          <div class="col-lg-4 col-md-4 col-xs-6 thumb">
                            <a v-for="(image, index) in image4" :key="index" :href="image.src" data-fancybox="gallery">
                                <img :src="image.src" :alt="image.alt" class="zoom img-fluid ">
                            </a>
                          </div>

                          <div class="col-lg-4 col-md-4 col-xs-6 thumb">
                            <a v-for="(image, index) in image5" :key="index" :href="image.src" data-fancybox="gallery">
                              <img :src="image.src" :alt="image.alt" class="zoom img-fluid ">
                            </a>
                          </div>
                           
                          <div class="col-lg-4 col-md-4 col-xs-6 thumb">
                            <a v-for="(image, index) in image6" :key="index" :href="image.src" data-fancybox="gallery">
                              <img :src="image.src" :alt="image.alt" class="zoom img-fluid ">
                            </a>
                          </div>
                           
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        image1: [
          { src: '/images/als/25_JPG_1 (1).jpeg', alt: 'Image 1' },
          
          // Add more images as needed
        ],
    
        image2: [
          { src: '/images/als/25_JPG_1 (2).jpeg', alt: 'Image 2' },
          
          // Add more images as needed
        ],

        image3: [
          { src: '/images/als/25_JPG_1 (3).jpeg', alt: 'Image 3' },
          
          // Add more images as needed
        ],

        image4: [
          { src: '/images/als/25_JPG_1 (4).jpeg', alt: 'Image 4' },
          
          // Add more images as needed
        ],

        image5: [
          { src: '/images/als/25_JPG_1 (5).jpeg', alt: 'Image 5' },
          
          // Add more images as needed
        ],

        image6: [
          { src: '/images/als/25_JPG_1 (6).jpeg', alt: 'Image 6' },
          
          // Add more images as needed
        ]
      }
    }
  }
</script>

<style scoped>
    #demo {
  height:100%;
  position:relative;
  overflow:hidden;
}


.green{
  background-color:#6fb936;
}
        .thumb{
            margin-bottom: 30px;
        }
        
        .page-top{
            margin-top:85px;
        }

   
img .zoom {
    width: 100%;
    height: 200px;
    border-radius:5px;
    object-fit:cover;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
}
        
 
.transition {
    -webkit-transform: scale(1.2); 
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}
    .modal-header {
   
     border-bottom: none;
}
    .modal-title {
        color:#000;
    }
    .modal-footer{
      display:none;  
    }


.wall_img_1 {width:100%;height:600px;margin:40px auto; transition: all .2s ease-in-out;} 
        .wall_img_2 {width:100%;height:280px;margin:40px auto; transition: all .2s ease-in-out;} 
        .wall_img_1:hover,.wall_img_2:hover{filter: grayscale(80%)}
        .wall_img_1:before,.wall_img_2:before {content: attr(id);opacity:0;transition: all .2s ease-in-out;width:100%;position:absolute;top:40%;text-align:center;display:block;font-size:22px;color:#fff; mix-blend-mode: overlay;}
        .wall_img_1:hover::before,.wall_img_2:hover::before {content: attr(id);opacity:1;}
</style>