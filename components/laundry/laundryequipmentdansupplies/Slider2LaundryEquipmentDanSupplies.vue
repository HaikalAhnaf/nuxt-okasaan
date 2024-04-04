<template>
  <div class="container">
    <div class="row fw-bold text-uppercase">
      <div class="col-12 py-3">
        <div class="fs-1 text-white Roboto" style="text-align: center;">
          {{$t('LaundryEquipmentDanSuppliesSubJudul2')}}
        </div>
      </div>
    </div>
    <main>
      <vue-horizontal class="horizontal">
        <section>
          <div>
            <img src="/images/perlengkapan/laundrysupplies/plastikjinjing.png" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center">{{$t('LaundryEquipmentDanSuppliesSubJudul2Product1')}}</p>
          </div>
        </section>
        <section>

          <div>
            <img src="/images/perlengkapan/laundrysupplies/plastiksatuan.png" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center">{{$t('LaundryEquipmentDanSuppliesSubJudul2Product2')}}</p>
          </div>
        </section>

        <section>
          <div>
            <img src="/images/perlengkapan/laundrysupplies/hangerhitam.png" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center">{{$t('LaundryEquipmentDanSuppliesSubJudul2Product3')}}</p>
          </div>
        </section>

        <section>
          <div>
            <img src="/images/perlengkapan/laundrysupplies/SOLASI.png" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center">{{$t('LaundryEquipmentDanSuppliesSubJudul2Product4')}}</p>
          </div>
        </section>

        <section>
          <div>
            <img src="/images/perlengkapan/laundrysupplies/kotaksepatu.png" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center">{{$t('LaundryEquipmentDanSuppliesSubJudul2Product5')}}</p>
          </div>
        </section>

        <section>
          <div>
            <img src="/images/perlengkapan/laundrysupplies/kertasthermal.png" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center">{{$t('LaundryEquipmentDanSuppliesSubJudul2Product6')}}</p>
          </div>
        </section>

        <section>
          <div>
            <img src="/images/perlengkapan/laundrysupplies/parfum.png" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center">{{$t('LaundryEquipmentDanSuppliesSubJudul2Product7')}}</p>
          </div>
        </section>

        <section>
          <div>
            <img src="/images/perlengkapan/laundrysupplies/chemical.png" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center">{{$t('LaundryEquipmentDanSuppliesSubJudul2Product8')}}</p>
          </div>
        </section>

        <section>
          <div>
            <img src="/images/perlengkapan/laundrysupplies/botolsemprotan.png" alt="" srcset="" class="img-fluid">
            <p class="Poppins text-center">{{$t('LaundryEquipmentDanSuppliesSubJudul2Product9')}}</p>
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


//   data() {
//     return {
//       // E.g: creates 20 array items...
//       items: [...Array(8).keys()].map((i) => {
//         return {
//           i, title: `Responsive`, content: `Content`,
//         };
//       }),
//     }
//   }
}
</script>

<style scoped>
/* Layout/Content Style */
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