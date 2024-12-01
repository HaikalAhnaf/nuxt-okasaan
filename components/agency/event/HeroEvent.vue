<template>
    <div>
    <section class="outter hero-video">
      <section class="video-container">
        <video src="/images/als/video6224028724304548361.mp4" autoplay loop playsinline muted></video>
          <div class="callout">
            <h1 class="display-4 fw-bold text-center Roboto text-uppercase">{{ $t('AgencyEventJudul') }}</h1>
            <div class="text-center rfs-9 text-light Poppins">{{ $t('AgencyEventText') }}</div>
          </div>
      </section>
    </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
        /* Hero Video */
 .outter.hero-video {
	 width: 100%;
	 height: 100%;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
}
 @media (max-width: 767px) {
	 .outter.hero-video {
		 height: 325px;
	}
}
 .hero-video .video-container {
	 height: 650px;
	 width: 100%;
	 position: relative;
	 overflow: hidden;
}
 @media (max-width: 767px) {
	 .hero-video .video-container {
		 height: 325px;
     
	}
}
 .hero-video video {
	 object-fit: cover;
	 position: absolute;
	 height: 650px;
	 width: 100%;
	 top: 0;
	 left: 0;
}
 @media (max-width: 767px) {
	 .hero-video video {
		 height: 325px;
	}
}
 .hero-video .video-container:after {
	 content: '';
	 display: block;
	 height: 100%;
	 width: 100%;
	 position: absolute;
	 top: 0;
	 left: 0;
	 background: rgba(0, 0, 0, 0.408);
	 z-index: 1;
}
 .hero-video h1 {
	 text-transform: uppercase;
	 margin: 0 0 1rem;
	 padding: 0;
	 line-height: 1;
	 color: white;
}
 @media (max-width: 767px) {
	 .hero-video h1 {
		 font-size: 32px;
	}
}
 @media (min-width: 768px) {
	 .hero-video h1 {
		 font-size: 52px;
	}
}
 .hero-video .desc {
	 color: white;
	 font-weight: 400;
	 font-size: 18px;
}
 .hero-video .callout {
	 position: relative;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 flex-direction: column;
	 height: 100%;
	 text-align: center;
	 position: relative;
	 z-index: 10;
	 width: 70%;
	 margin: auto;
}
 @media (max-width: 767px) {
	 .hero-video .callout {
		 width: 90%;
	}
}
 

</style>