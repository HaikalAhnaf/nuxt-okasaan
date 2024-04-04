<template>
    <div class=" sticky-top ">
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-lg">
      <div class="container d-flex justify-content-md-center ">
        <NuxtLink class="navbar-brand" :to='`/${$i18n.locale}/`'><img src="/images/logo/DSI samping.png" width="100" class="img-fluid" alt=""></NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
          <div class="collapse navbar-collapse justify-content-md-center justify-content-lg-end justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 Poppins">
              <!-- Navbar dropdown -->

              <li class="nav-item dropdown">
                <NuxtLink class="nav-link dropdown-toggle" style="color: #931A25;" :to='`/${$i18n.locale}/Laundry`' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{$t('HalamanLaundryIndex')}}
                </NuxtLink>
                <ul class="dropdown-menu dropdown-menu-dark py-3 pe-4" style="background-color: #931A25;">          
                  <li><NuxtLink class="dropdown-item " style="color: #fff;" :to='`/${$i18n.locale}/laundry/Okaasan`'><img src="/images/nav/iconokaasanwhite.png" width="24" alt=""> {{$t('HalamanLaundryOkaasan')}}</NuxtLink></li>
                  <li><NuxtLink class="dropdown-item " style="color: #fff;" :to='`/${$i18n.locale}/laundry/Training`'><img src="/images/nav/IconTrainingW.png" width="24" alt=""> {{$t('HalamanLaundryTraining')}}</NuxtLink></li>
                  <li><NuxtLink class="dropdown-item " style="color: #fff;" :to='`/${$i18n.locale}/laundry/LaundryEquipmentDanSupplies`'><img src="/images/nav/IconEquipmentW.png" width="24" alt=""> {{$t('HalamanLaundryLaundryEquipmentDanSupplies')}}</NuxtLink></li>
                  <li><NuxtLink class="dropdown-item " style="color: #fff;" :to='`/${$i18n.locale}/laundry/Wimala`'><img src="/images/nav/IconWimalaW.png" width="24" alt=""> {{$t('HalamanLaundryWimala')}}</NuxtLink></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <NuxtLink class="nav-link dropdown-toggle" style="color: #931A25;" :to='`/${$i18n.locale}/Agency`' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{$t('HalamanAgencyIndex')}}
                </NuxtLink>
                <ul class="dropdown-menu dropdown-menu-dark  py-3 pe-4" style="background-color: #931A25;">
                  <li><NuxtLink class="dropdown-item" style="color: #fff;"  :to='`/${$i18n.locale}/agency/Event`'><img src="/images/nav/IconEventW.png" width="24" alt=""> {{$t('HalamanAgencyEvent')}}</NuxtLink></li>
                  <li><NuxtLink class="dropdown-item " style="color: #fff;" :to='`/${$i18n.locale}/agency/StrategicMarketing`'><img src="/images/nav/IconStrategicMW.png" width="24" alt=""> {{$t('HalamanAgencyStrategicMarketing')}}</NuxtLink></li>
                  <li><NuxtLink class="dropdown-item " style="color: #fff;" :to='`/${$i18n.locale}/agency/strategicmarketing/SocialMedia`'><img src="/images/nav/IconSosmedW.png" width="24" alt=""> {{$t('HalamanAgencyStrategicMarketingSocialMedia')}}</NuxtLink></li>
                  <li><NuxtLink class="dropdown-item " style="color: #fff;" :to='`/${$i18n.locale}/agency/StrategicMarketing/ProduksiFotoDanVideo`'><img src="/images/nav/IconVideoPW.png" width="24" alt=""> {{$t('HalamanAgencyStrategicMarketingPhotodanVideoProduction')}}</NuxtLink></li>
                  <li><NuxtLink class="dropdown-item " style="color: #fff;" :to='`/${$i18n.locale}/agency/StrategicMarketing/Website`'><img src="/images/nav/IconWebsiteW.png" width="24" alt=""> {{$t('HalamanAgencyStrategicMarketingWebsite')}}</NuxtLink></li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" style="color: #931A25;" :to='`/${$i18n.locale}/ContactUs`'>{{$t('HalamanKontakKami')}}</NuxtLink>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" style="color: #931A25;" href="../index"><small><i class="fa fa-globe" aria-hidden="true"></i></small> Indonesia Version</a>
              </li> -->
              <li class="nav-item">
                  <nuxt-link v-if="$i18n.locale ==='en'" class="nav-link" style="color: #931A25;" :to="switchLocalePath('id')"> English <img src="/images/nav/united-kingdom.png" alt="" width="24"></nuxt-link>
                  <nuxt-link v-else class="nav-link" style="color: #931A25;" :to="switchLocalePath('en')"> Indonesia <img src="/images/nav/indonesia.png" alt="" width="24"></nuxt-link>
              </li>
            </ul>
            
          </div>
          
      </div>
    </nav>
    <div>
      
    </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        currentLanguage: this.$i18n.locale // Accessing the current language from i18n
      };
    },
    methods: {
    switchLocale(locale) {
      const switchPath = this.$i18n.switchLocalePath(locale); // Get the path for the selected locale
      this.$router.push(switchPath); // Navigate to the path for the selected locale
    }
  },
    computed: {
      currentLanguage() {
        return this.$i18n.locale(); // Accessing the current language using the getter function
      }
    }
  };
</script>

<style scoped>

    .Poppins {
    font-family: 'Poppins', sans-serif;
    }

    .Roboto {
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    }

    .Worksans {
    font-family: 'Work Sans', sans-serif;
    }

.dropdown-item:hover {
  background-color: #931A25;
  color: #fff;
}

</style>

<!-- <script type="text/javascript">
  $(function () {
      $('#myButton').floatingWhatsApp({
          phone: '6287899962474',
          popupMessage: 'Hello, how can we help you?',
          message: "",
          showPopup: false,
          showOnIE: false,
          position: 'right',
          headerTitle: 'Welcome!',
          headerColor: 'crimson',
          backgroundColor: 'crimson',
          buttonImage: '<img src="asset/img/Logo/whatsapp.svg" />'
      });
  });
</script> -->