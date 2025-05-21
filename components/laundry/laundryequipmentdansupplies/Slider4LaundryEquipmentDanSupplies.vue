<template>
  <div class="container">
    <div class="row fw-bold text-uppercase">
      <div class="col-12 py-3">
        <div class="fs-1 text-white Roboto" style="text-align: center;">
          {{$t('LaundryEquipmentDanSuppliesSubJudul4')}}
        </div>
      </div>
    </div>
    <main>
      <vue-horizontal class="horizontal">
        <section>
          <div class="h-100">
            <a href="/images/perlengkapan/KatalogOkaasan2025.pdf" target="_blank">
            <img src="/images/perlengkapan/covekatalog.jpg" alt="" srcset="" class="img-fluid" target="_blank">
            <p class="Poppins text-center py-2">{{$t('LaundryEquipmentDanSuppliesSubJudul4Catalogues')}}</p>
            </a>
          </div>  
        </section>
        <section>
          <div class="h-100">
            <a v-for="(image, index) in image2" :key="index" :href="image.src" data-fancybox="gallery">
              <img :src="image.src" :alt="image.alt" class="zoom img-fluid ">
            </a>
            <p class="Poppins text-center py-2">{{$t('LaundryEquipmentDanSuppliesSubJudul4Product1')}}</p>
          </div>  
        </section>
        <section>
          <div class="h-100">
            <a v-for="(image, index) in image3" :key="index" :href="image.src" data-fancybox="gallery">
              <img :src="image.src" :alt="image.alt" class="zoom img-fluid ">
            </a>
            <p class="Poppins text-center py-2">{{$t('LaundryEquipmentDanSuppliesSubJudul4Product2')}}</p>
          </div>  
        </section>
        <section>
          <div class="h-100">
            <a v-for="(image, index) in image4" :key="index" :href="image.src" data-fancybox="gallery">
              <img :src="image.src" :alt="image.alt" class="zoom img-fluid ">
            </a>
            <p class="Poppins text-center py-2">{{$t('LaundryEquipmentDanSuppliesSubJudul4Commercial')}}</p>
          </div>
        </section>
      </vue-horizontal>

    </main>
  </div>
</template>

<script>

import VueHorizontal from 'vue-horizontal';

export default {
  components: {VueHorizontal},
  data() {
      return {
        image1: [
          { src: '/images/perlengkapan/covekatalog.jpg', alt: 'Image 1' },
          
          // Add more images as needed
        ],
    
        image2: [
          { src: '/images/perlengkapan/9.jpg', alt: 'Image 2' },
          
          // Add more images as needed
        ],

        image3: [
          { src: '/images/perlengkapan/10.jpg', alt: 'Image 3' },
          
          // Add more images as needed
        ],

        image4: [
          { src: '/images/perlengkapan/comercial.jpg', alt: 'Image 4' },
          
          // Add more images as needed
        ],

      }
    }
}
</script>

<style scoped>
/* Layout/Content Style */
a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #931A25;
}

main {
  margin: 24px;
}

section > div {
  padding: 16px 24px;
  background: white;
  border-radius: 4px;
  border: 1px #ebebeb solid;
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
  

/* Responsive Style */
/* section is used to control sizing, div is for the inner styling. */

@media (max-width: 640px) {
  .horizontal {
    margin: 0 -24px;
  }

  .horizontal >>> .v-hl-container {
    scroll-padding-left: 16px;
  }

  .horizontal >>> .v-hl-btn {
    display: none;
  }

  section {
    width: calc(100% - (16px + 16px));
    padding: 0 8px;
  }

  section:first-child {
    padding-left: 24px;
    width: calc(100% - 16px);
  }

  section:last-child {
    padding-right: 24px;
    width: calc(100% - 16px);
  }

  section:only-child {
    width: 100%;
  }
}

@media (min-width: 640px) {
  section {
    width: calc((100% - (24px)) / 2);
    margin-right: 24px;
  }
}

@media (min-width: 768px) {
  section {
    width: calc((100% - (2 * 24px)) / 3);
  }
}

@media (min-width: 1024px) {
  section {
    width: calc((100% - (3 * 24px)) / 4);
  }
}

@media (min-width: 1280px) {
  section {
    width: calc((100% - (3 * 24px)) / 4);
  }
}
</style>