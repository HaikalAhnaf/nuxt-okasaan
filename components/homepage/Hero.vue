<template>
    <div>
        <header class="masthead">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 py-5">
                        <h2 class="m-0 Poppins">{{ $t('indexQuotes') }}</h2>
                    </div>
                    <div class="col-lg-5">
                    <img src="/images/logo/DSI.png" alt="" class="w-100">
                    <div class="shape"></div>
                    </div>
                </div>
            </div>
            <svg style="pointer-events: none" class="wave" width="100%" height="50px" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 75">
                <defs>
                    <style>
                        .a {
                            fill: none;
                        }
                        
                        .b {
                            clip-path: url(#a);
                        }
                        
                        .c,
                        .d {
                            fill: #931A25;
                        }
                        
                        .d {
                            opacity: 0.5;
                            isolation: isolate;
                        }
                    </style>
                    <clipPath id="a">
                        <rect class="a" width="1920" height="75"></rect>
                    </clipPath>
                </defs>
                <title>wave</title>
                <g class="b">
                    <path class="c" d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48"></path>
                </g>
                <g class="b">
                    <path class="d" d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10"></path>
                </g>
                <g class="b">
                    <path class="d" d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24"></path>
                </g>
                <g class="b">
                    <path class="d" d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150"></path>
                </g>
            </svg>
        </header>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        // currentLanguage: this.$i18n.locale
      };
    },
    computed: {
      currentLanguage() {
        // return this.$i18n.locale();
      }
    }
  };
</script>
  

<style scoped>
.masthead {
      padding: 3rem 0 7rem;
      position: relative;
      background-size:100%;
      background-image: url('/images/background/Landing Hero Section.jpg');
      z-index: 0
  }


  @media (max-width: 500px) {
       .masthead {
        background-image: url('/images/background/BG-HP.jpg');
       }
        
      }
  
  .masthead svg.wave {
      position: absolute;
      bottom: -1px;
      background-color: #f6eec900;
      left: 0
  }
  
  .masthead h1 {
      color: #931A25;
      font-weight: 700;
      font-size: 2rem;
      line-height: 1.1;
      z-index: 1
  }
  
  .masthead h2 {
      color: #931A25;
      font-weight: 600;
      z-index: 1;
      font-size: 1.2rem
  }
  
  
  @media(min-width:992px) {
      .masthead h1 {
          font-size: 3rem
      }
      .masthead h2 {
          font-size: 1.5rem
      }
  }
  
  
  
  .masthead .masthead-cards .shape {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, .3);
      top: 0;
      left: 0;
      z-index: -1;
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%
  }
</style>