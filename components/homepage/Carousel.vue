<template>
  <div class="container py-3">
    <main>
      <!-- Horizontal carousel -->
      <vue-horizontal
        ref="carousel"
        class="horizontal"
        :button="false"             
        @scroll-debounce="onScrollDebounce"
      >
        <section v-for="(img, index) in images" :key="index">
          <img :src="img" alt="" class="slide-img" />
        </section>
      </vue-horizontal>

      <!-- Pagination dots -->
      <div class="pagination">
        <div
          v-for="(img, i) in images"
          :key="`dot-${i}`"
          class="dot"
          :class="{ active: currentIndex === i }"
          @click="goToSlide(i)"
        >
          <div></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal';

export default {
  name: 'Carousel',
  components: { VueHorizontal },

  data() {
    return {
      currentIndex: 0,
      images: [
        '/images/Promo Oct Web.jpg',
        '/images/Promo Oct Web 2.jpg'
      ],
      autoplayInterval: null
    };
  },

  mounted() {
    this.startAutoplay();
  },

  beforeDestroy() { // Vue 2
    clearInterval(this.autoplayInterval);
  },
  /* Uncomment for Vue 3
  beforeUnmount() { // Vue 3
    clearInterval(this.autoplayInterval);
  },
  */

  methods: {
    /* ---------- autoplay ---------- */
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        const next = (this.currentIndex + 1) % this.images.length;
        this.goToSlide(next);
      }, 3000);
    },

    /* ---------- pagination ---------- */
    goToSlide(index) {
      this.currentIndex = index;
      this.$refs.carousel?.scrollToIndex
        ? this.$refs.carousel.scrollToIndex(index)    // vue-horizontal helper (if present)
        : this.$refs.carousel?.$el
            .querySelector('.v-hl-container')
            ?.children[index]
            ?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    },

    onScrollDebounce({ width, left }) {              // keeps dots in sync when user swipes
      if (width)
        this.currentIndex = Math.round(left / width);
    }
  }
};
</script>

<style scoped>
/* --- layout --- */
main {
  margin: 0;
  overflow: hidden;
}
section {
  flex: 0 0 100%;
  scroll-snap-align: start;
}

/* --- images --- */
.slide-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

/* --- container overrides --- */
.container,
main,
.horizontal {
  width: 100%;
  overflow: visible !important;
}

/* --- pagination dots (adapted from vue‑horizontal recipe) ---  :contentReference[oaicite:1]{index=1} */
.pagination {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}

.dot {
  padding: 4px;
  cursor: pointer;
}
.dot > div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #33333350;
  transition: all 0.2s;
}
.dot.active > div {
  background: #000;
}
.dot:hover > div {
  transform: scale(1.2);
}
</style>
