<template>
  <div class="bg-light">
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div
             class="card-visi p-4 text-center py-5 shadow rounded-3"
             data-aos="fade-up"
            >
            <div class="text-center">
              <img src="/images/visimisi/VISI.png" alt="" width="128" />
            </div> 
              <h2 class="fw-bold display-6 mb-3 Roboto text-uppercase">
                {{ $t("indexVisi") }}
              </h2>
              <p class="text-black Poppins">{{ $t("indexIsiVisi") }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="card-misi p-4 mt-md-0 mt-3 text-center py-5 shadow rounded-3"
              data-aos="fade-up"
            >
            <div class="text-center">
              <img src="/images/visimisi/MISI.png" alt="" width="128" />
            </div>  
              <h2
                class="text-white fw-bold display-6 mb-3 Roboto text-uppercase"
              >
                {{ $t("indexMisi") }}
              </h2>
              <p class="text-light Poppins">{{ $t("indexIsiMisi") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .card-visi {
      border-radius: 4px;
      background: #F6EEC9;
      box-shadow: 0 6px 10px rgba(0, 0, 0, .1), 0 0 6px rgba(0, 0, 0, .2);
      transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
      cursor: pointer;
    }
  
    .card-visi a {
      text-decoration: none;
      color: black;
    }
  
  
    .card-visi:hover {
      transform: scale(0.98);
      box-shadow: 0 6px 10px rgba(0, 0, 0, .1), 0 0 6px rgba(0, 0, 0, .2);
    }

    .card-misi {
      border-radius: 4px;
      background: #931A25;
      box-shadow: 0 6px 10px rgba(0, 0, 0, .1), 0 0 6px rgba(0, 0, 0, .2);
      transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
      cursor: pointer;
    }

    .card-misi a {
      text-decoration: none;
      color: black;
    }
  
  
    .card-misi:hover {
      transform: scale(0.98);
      box-shadow: 0 6px 10px rgba(0, 0, 0, .1), 0 0 6px rgba(0, 0, 0, .2);
    }
</style>
