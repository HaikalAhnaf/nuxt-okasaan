<template>
  <div>
    <section class="" id="features">
      <div class="container py-6">
        <div class="row">
          <!-- Card with Age Chart -->
          <div class="col-12 col-md-6 col-lg-6 mb-3">
            <div class="card shadow border-0 h-100">
              <div class="card-body">
                <h5 class="card-title text-center">{{$t('AgencyResearchMarketingDemographicJudulDiagram1')}}</h5>
                <canvas id="ageChart"></canvas>
              </div>
            </div>
          </div>

          <!-- Card with Gender Chart -->
          <div class="col-12 col-md-6 col-lg-6 mb-3">
            <div class="card shadow border-0 h-100">
              <div class="card-body">
                <h5 class="card-title text-center">{{$t('AgencyResearchMarketingDemographicJudulDiagram2')}}</h5>
                <canvas id="genderChart"></canvas>
              </div>
            </div>
          </div>

          <!-- Card with Infographics -->
          <!-- <div class="col-12 col-md-12 col-lg-12 mt-4">
            <div class="card shadow border-0 h-100 py-4">
              <div class="card-body text-center">
                <p class="h5">
                  <strong>70%</strong> pelanggan Okaasan Laundry adalah ibu
                  rumah tangga.
                </p>
                <p class="h5">
                  <strong>30%</strong> pelanggan adalah profesional yang bekerja
                  di Jabodetabek.
                </p>
                <p class="h5">
                  Mayoritas pelanggan adalah lulusan <strong>SMA</strong> dan
                  <strong>S1</strong>.
                </p>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  mounted() {
    // Data untuk Usia
    const ageCtx = document.getElementById("ageChart").getContext("2d");
    new Chart(ageCtx, {
      type: "bar",
      data: {
        labels: [
          this.$t("age.20_35"), 
          this.$t("age.36_50"), 
          this.$t("age.others")
        ],
        datasets: [
          {
            label: this.$t("chart.age_distribution"),
            data: [65, 30, 5],
            backgroundColor: ["#D3A4A1", "#2C3E50", "#2A7F62"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Data untuk Jenis Kelamin
    const genderCtx = document.getElementById("genderChart").getContext("2d");
    new Chart(genderCtx, {
      type: "pie",
      data: {
        labels: [this.$t("gender.female"), this.$t("gender.male")],
        datasets: [
          {
            label: this.$t("chart.gender_distribution"),
            data: [70, 30],
            backgroundColor: ["#FFC1CC", "#001F54"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  },
};
</script>


<style scoped>
canvas {
  max-height: 300px;
  margin: auto;
}
</style>
