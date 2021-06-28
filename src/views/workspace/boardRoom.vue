<template>
  <div>
      <Header/>
      <div>
          <div class="bgimage relative w-full bg-dark d-flex items-center opacity-100">
          <div class="aboslute flex items-center top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
            <div class="text-center  hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
              <p class=" text-lg sm:text-3xl  font-bold text-white">Board Room</p>
            </div>
          </div>
        </div>
      <div>
          <div class="w-10/12 sm:w-10/12 mx-auto my-10">
               <div class="w-4/12 hidden sm:block  mx-auto mb-5">
                 <VueSlickCarousel ref="c1"
                  :asNavFor="$refs.c2"
                  :focusOnSelect="true"
                  >
                <div class="">
                  <img class="h-64 w-64 " src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64" src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64 " src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64" src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64 " src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64 " src="../../assets/workspace/space-1.jpeg" alt="">
                </div>
                </VueSlickCarousel>
               </div>
                <div class=" hidden sm:block mt-4">
                 <VueSlickCarousel v-bind="slickOptions" 
                 ref="c2"
                :asNavFor="$refs.c1"
                :focusOnSelect="true">
                <div class="">
                  <img class="h-24 w-24 shadow-lg hover:shadow-2xl" src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-24 w-24 shadow-lg hover:shadow-2xl" src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-24 w-24 shadow-lg hover:shadow-2xl" src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-24 w-24 shadow-lg hover:shadow-2xl" src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-24 w-24 shadow-lg hover:shadow-2xl" src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-24 w-24 shadow-lg hover:shadow-2xl" src="../../assets/workspace/space-1.jpeg" alt="">
                </div>
                </VueSlickCarousel>
               </div>
                <div class="w-10/12 block sm:hidden mx-auto mb-5">
                 <VueSlickCarousel v-bind="slickOptions3"
                  >
                <div class="">
                  <img class="h-64 w-64 " src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64" src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64 " src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64" src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64 " src="../../assets/workspace/board-room.jpeg" alt="">
                </div>
                <div class="">
                  <img class="h-64 w-64 " src="../../assets/workspace/space-1.jpeg" alt="">
                </div>
                </VueSlickCarousel>
               </div>
          </div>
          </div>
            <div class="w-8/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
                  <p class="text-xl topic text-lilac-light">Fees: </p>    
                  <p class="text-xl topic text-lilac-light">    &#8358; 30,000 daily</p>    
                  <p class="text-xl topic text-lilac-light">    &#8358; 5000 hourly</p>    
            </div>
          </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    Header,
    Footer,
    VueSlickCarousel
  },
    data(){
    return {
      showslide: false,
       slickOptions: {
         ref:"c2",
        asNavFor: "$refs.c1",
        dots: true,
        arrow: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
      },
       slickOptions2: {
        ref:"c1",
        asNavFor: "$refs.c2",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      slickOptions3: {
        dots: true,
        arrow: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    };
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap');
.bgimage{
    height: 300px;
    background-image: url("../../assets/background/coworking.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
}
.topic{
  font-family: 'Josefin Sans', sans-serif;
}
</style>