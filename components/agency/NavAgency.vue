<template>
    <div>
        <section class="py-6" lc-helper="background" style="background:linear-gradient(180deg, rgba(19, 16, 34, 0.58) 0%, rgba(19, 16, 34, 0.78) 100%), url('/images/Agency_LP.jpg')  center / cover no-repeat;">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-12 col-xxl-6">
                  <div class="lc-block text-white mb-5">
                      <div editable="rich">
                          <h1 class="display-4 fw-bold text-center Roboto">Agency</h1>
                      </div>
                  </div><!-- /lc-block -->
                  <div class="lc-block mb-8">
                      <div editable="rich">
                          <p class="text-center rfs-9 text-light Poppins">Pelajari lebih lanjut tentang acara-acara kami dan strategic marketing agency kami.</p>
                      </div>
                  </div><!-- /lc-block -->
              </div><!-- /col -->
          </div>
      </div>
    <!-- Agency -->    




          <!-- Okaasan --> 
              <div class="container" id="km">
                <div class="row d-flex justify-content-center">
                  <div class="ag-format-container">
                    <div class="ag-courses_box">
                      
                      <div class="ag-courses_item">
                        <a href="Event.html" style="text-decoration: none;" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>
        
                          <div class="ag-courses-item_title Roboto d-flex align-items-center text-uppercase">
                            Event
                          </div>
                  
                          <div class="ag-courses-item_date-box">

                          </div>
                        </a>
                      </div>
                  
                      <div class="ag-courses_item">
                        <a href="Strategicmarketing.html" style="text-decoration: none;" class="ag-courses-item_link">
                          <div class="ag-courses-item_bg"></div>
        
                          <div class="ag-courses-item_title Roboto d-flex align-items-center text-uppercase">
                            Strategic Marketing
                          </div>
                  
                          <div class="ag-courses-item_date-box">

                          </div>
                        </a>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>



.dropdown-menu {
        margin-top: 0px;
        border: none;
        background-color: #F6EEC9;
        padding: 3%;
    }

    .dropdown-item:hover {
        background-color: #F6EEC9;
    }
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

.footer-text {
  color: black;
  font-family: 'Poppins', sans-serif;

  }
  
  .footer-text:hover {
  color: #931A25;
  }



.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding: 50px 0;
}
.ag-courses_item {
  -ms-flex-preferred-size: calc(50% - 30px);
  flex-basis: calc(50% - 30px);

  margin: 0 15px 30px;

  overflow: hidden;

  border-radius: 28px;
}
.ag-courses-item_link {
  display: block;
  padding: 50px 20px;
  background-image: url('/images/background/Background2.jpg');
  background-size: contain;
  overflow: hidden;

  position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #FFF;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.ag-courses-item_title {
  min-height: 87px;
  margin: 0 0 25px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date-box {
  font-size: 18px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #FFF;

  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}
.ag-courses-item_bg {
  height: 140px;
  width: 140px;
  background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.500), rgb(162, 162, 162));

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 100%;

  -webkit-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
  background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.500), rgb(162, 162, 162));
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
  background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.500), rgb(162, 162, 162));
}



@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 100%;
  }

}
@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }
  .ag-courses-item_link {
    padding: 22px 40px;
  }
  .ag-courses-item_date-box {
    font-size: 16px;
  }
}

.dropdown-item:hover {
  background-color: #931A25;
  color: #fff;
}

</style>