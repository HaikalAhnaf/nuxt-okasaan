<template>
  <div class="bg-light">
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div
             class="bg-main-1 border p-4 text-center py-5 shadow rounded-3"
             data-aos="fade-up"
            >
              <img src="/images/visimisi/visi.png" alt="" />
              <h2 class="fw-bold display-6 mb-3 Roboto text-uppercase">
                {{ $t("indexVisi") }}
              </h2>
              <p class="text-muted Poppins">{{ $t("indexIsiVisi") }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="bg-main-2 p-4 mt-md-0 mt-3 text-center py-5 shadow rounded-3"
              data-aos="fade-up"
            >
              <img src="/images/visimisi/misi.png" alt="" />
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

<style lang="scss" scoped></style>
