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
          <!-- <div class="h-100">
            <img src="/images/perlengkapan/paketbisnisss.jpg" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center py-2">{{$t('LaundryEquipmentDanSuppliesSubJudul4Product1')}}</p>
          </div> -->
        </section>
        <section>
          <div class="h-100">
            <img src="/images/perlengkapan/comercial.jpg" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center py-2">{{$t('LaundryEquipmentDanSuppliesSubJudul4Product2')}}</p>
          </div>
        </section>
        <section>
          <div class="h-100">
            <a href="/images/perlengkapan/KatalogOkaasan2025.pdf" target="_blank">
            <img src="/images/perlengkapan/covekatalog.jpg" alt="" srcset="" class="img-fluid" target="_blank">
            <p class="Poppins text-center py-2">{{$t('LaundryEquipmentDanSuppliesSubJudul4Product3')}}</p>
            </a>
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
</style>

<style scoped>
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