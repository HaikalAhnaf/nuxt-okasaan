<template>
    <div>
      <div id="myButton" class="sticky-bottom"></div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container d-flex justify-content-md-center ">
        <NuxtLink class="navbar-brand" to="/"><img src="/images/logo/DSI samping.png" width="100" class="img-fluid" alt=""></NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
          <div class="collapse navbar-collapse justify-content-md-center justify-content-lg-end justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 Poppins">
              <!-- Navbar dropdown -->

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" style="color: #931A25;" href="Laundry/index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Laundry
                </a>
                <ul class="dropdown-menu dropdown-menu-dark py-3 pe-4" style="background-color: #931A25;">          
                  <li><a class="dropdown-item " style="color: #fff;" href="Laundry/Okaasan.html"><img src="/images/nav/iconokaasanwhite.png" width="24" alt=""> Okaasan</a></li>
                  <li><a class="dropdown-item " style="color: #fff;" href="Laundry/Training.html"><img src="/images/nav/IconTrainingW.png" width="24" alt=""> Training</a></li>
                  <li><a class="dropdown-item " style="color: #fff;" href="Laundry/Laundry-Equipment.html"><img src="/images/nav/IconEquipmentW.png" width="24" alt=""> Laundry Equipment & Supplies</a></li>
                  <li><a class="dropdown-item " style="color: #fff;" href="Laundry/Wimala.html"><img src="/images/nav/IconWimalaW.png" width="24" alt=""> Wimala</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" style="color: #931A25;" href="Agency/index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Agency
                </a>
                <ul class="dropdown-menu dropdown-menu-dark  py-3 pe-4" style="background-color: #931A25;">
                  <li><a class="dropdown-item" style="color: #fff;" href="Agency/Event.html"><img src="/images/nav/IconEventW.png" width="24" alt=""> Event</a></li>
                  <li><a class="dropdown-item " style="color: #fff;" href="Agency/Strategicmarketing.html"><img src="/images/nav/IconStrategicMW.png" width="24" alt=""> Strategic Marketing</a></li>
                  <li><a class="dropdown-item " style="color: #fff;" href="Agency/SM/Socialmedia.html"><img src="/images/nav/IconSosmedW.png" width="24" alt=""> Sosial Media</a></li>
                  <li><a class="dropdown-item " style="color: #fff;" href="Agency/SM/Videoproduction.html"><img src="/images/nav/IconVideoPW.png" width="24" alt=""> Video & Fotografi</a></li>
                  <li><a class="dropdown-item " style="color: #fff;" href="Agency/SM/Website.html"><img src="/images/nav/IconWebsiteW.png" width="24" alt=""> Website</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" style="color: #931A25;" to="/ContactUs">Contact Us</NuxtLink>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" style="color: #931A25;" href="../index.html"><small><i class="fa fa-globe" aria-hidden="true"></i></small> Indonesia Version</a>
              </li> -->
            </ul>
              
          </div>
      </div>
    </nav>
    </div>
</template>

<script>
    export default {
        
    }
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