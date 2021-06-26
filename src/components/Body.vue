<template>
    <div class="">
        <!-- <div class="w-full h-64 bg-red-100 relative">
      <div class="absolute inset-0 bg-cover bg-center z-0 imagesinsert" style="background-image: url('src\assets\handImage.jpg')"></div>
      <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Dwayne</div>
    </div> -->
      <div class="banner relative w-full bg-dark d-flex items-center opacity-100">
        <div class="aboslute top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
          <div class="text-left sm:text-center w-3/4 hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
          <p class=" text-xl sm:text-3xl  font-bold text-white">WELCOME TO NORTH EAST INNOVATION HUB</p>
          <p class=" text-md text-white sm:text-xl  sm:ml-2">NorthEast Innovation Hub is a dynamic community of creative minds and game changers collaborating on innovative solutions to the challenges faced by communities in North-Eastern part of Nigeria and the World as a whole.</p>
          <button class="py-3 px-5  rounded-lg bg-lilac-logo text-white border border-transparent focus:outline-none" @click ="toggleModal =!toggleModal">Take a Tour</button>
        </div>
        <div v-if="toggleModal" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black  bg-opacity-70">
          <div class="relative mx-auto w-10/12 sm:w-8/12 border border-transparent rounded-lg shadow-lg">
            <div class=" rounded-lg shadow-xl">
              <video playsinline autoplay loop>
                <source src="../assets/NE Hub Walk Through Video.mp4" type="video/mp4">
              </video>
            </div>
            <button class="absolute top-0 right-0 text-white hover:text-lilac-light focus:outline-none" @click ="toggleModal =!toggleModal" >
              <svg class="stroke-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
        </div>
      </div>
      <div class="mt-6 mb-6 w-10/12 mx-auto">
          <p class="topic text-lilac-light text-4xl font-bold p-4 sm:p-0">Our Causes</p>
          <div class="block my-4 mx-auto w-full sm:flex sm:h-72 bg-white items-center justify-between">
            <div class="w-72 sm:w-96 h-56 mx-auto">
              <img class="h-56 w-72 sm:w-96" src="../assets/undraw_Process_re_gws7.svg" alt="">
            </div>
            <div class="w-80 sm:w-96 mx-auto">
              <p class="topic text-lilac-light text-3xl py-3 font-semibold">We Inspire</p>
              <p class="text-left text-black font-thin  text-sm text-normal text-left  leading-loose">Get inspired by deep, genuine insights, engage with peers in a serene environment creating opportunities that will affect you directly.</p>
            </div>
          </div>
            <div class="block sm:flex bg-white sm:rounded-lg sm:bg-lilac-light sm:bg-opacity-10 p-5 my-4 w-full sm:h-72 bg-white items-center justify-between">
              <div class="sm:hidden w-72 sm:w-96 h-56 mx-auto">
                <img class="h-56 w-72 sm:w-96" src="../assets/undraw_education_f8ru (1).svg" alt="">
              </div>
              <div class="w-72 sm:w-96 mx-auto">
                <p class="topic text-lilac-light text-3xl py-3 font-semibold">We Educate</p>
                <p class="text-left text-black font-thin  text-sm text-normal text-left leading-loose">We equip youths in North-East with skills to succeed in today’s economy, tackling unemployment by partnering with individuals and organisations.</p>
              </div>
              <div class="hidden sm:block w-80 sm:w-96 h-56 ">
                <img class="h-56 w-72 sm:w-96" src="../assets/undraw_education_f8ru (1).svg" alt="">
              </div>
          </div>
          <div class="block my-4 w-full sm:flex sm:h-72 bg-white items-center justify-between">
            <div class="w-72 sm:w-96 h-56 mx-auto">
              <img class="h-56 w-72 sm:w-96" src="../assets/undraw_connected_world_wuay.svg" alt="">
            </div>
            <div class="w-72 sm:w-96 mx-auto">
              <p class="topic text-lilac-light text-3xl py-3 font-semibold">We Connect</p>
              <p class="text-left text-black font-thin text-sm text-normal text-left leading-loose">Connecting you to a world of information and insight. intelligence platform enabling faster, smarter, and more efficient processes</p>
            </div>
          </div>
      </div>
      <div class="bg-gray-900 py-4">
        <div class="text-lilac-light w-10/12 mx-auto">
          <p class="topic text-4xl font-bold p-4 sm:p-0 my-3">About Us</p>
          <div class="block md:flex justify-between items-center">
            <div class="w-10/12 mx-auto md:w-1/4 items-center">
              <p class="border-2 rounded-full border-lilac-light w-7 text-center mx-auto my-2">1</p>
              <p class="text-xl font-semibold mb-2">Who We Are</p>
              <p class="text-sm text-left text-sm text-normal text-left leading-loose">NorthEast Innovation Hub is a dynamic community of creative minds and game changers collaborating on innovative solutions to the challenges faced by our communities.</p>
            </div>
            <div class="w-10/12 mx-auto md:w-1/4">
              <p class="border-2 rounded-full border-lilac-light w-7 mx-auto my-2">2</p>
              <p class="text-xl font-semibold mb-2">What We Do</p>
              <p class="text-sm text-left text-sm text-normal text-left leading-loose">Bring together IDPs, humanitarians, public/private sectors with the shared goal of scaling effective, efficient and ethical solutions to common humanitarian challenges.</p>
            </div>
            <div class="w-10/12 mx-auto md:w-1/4">
              <p class="border-2 rounded-full border-lilac-light w-7 mx-auto my-2 mt-1">3</p>
              <p class="text-xl font-semibold mb-2">Why the NorthEast</p>
              <p class="text-sm text-left text-sm text-normal text-left leading-loose">The North-East region has been severely affected by the conflict, which exacerbated the pre-existing socio –economic developmental challenges in this region.</p>
            </div>
          </div>
          <div class=" mb-4 mt-7 ">
            <a href="/about">
              <button class="outline-none focus:outline-none px-5 py-2  rounded-full bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black">Know more about us</button>
            </a>
          </div>
        </div>
      </div>
       <div class="w-11/12 sm:w-10/12 mx-auto my-10">
              <p class="topic text-lilac-light text-4xl font-bold p-4 pb-8 sm:p-0">Partners</p>
              <div class="hidden sm:flex flex-wrap space-x-10 space-y-5">
                <div class="w-24 ml-10 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/A.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/AIME.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/aun-logo-og.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/ge.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/BC.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/butterfly.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/care.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/Cisco_logo.svg.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/eu-logo.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/foundacion.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/giz-logo.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/google.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/ICRC_logo_Red_Cross.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/ncdmb.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/nsip.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/OCHA.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/OSGLogo.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/povertyspotlight.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/techplos.png" alt="">
                </div>
                <!-- <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/The-Department-for-International-Development-DFID.jpg" alt="">
                </div> -->
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/UNDP.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/VC4A1.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/VSF.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/World-Bank.jpg" alt="">
                </div>
              </div>
               <div class="block sm:hidden w-full items-center">
                 <VueSlickCarousel v-bind="slickOptions" >
                    <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/A.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/AIME.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/aun-logo-og.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/ge.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/BC.png" alt="">
                </div>
                 <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/butterfly.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/care.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/Cisco_logo.svg.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/eu-logo.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/foundacion.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/giz-logo.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/google.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/ICRC_logo_Red_Cross.png" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/ncdmb.jpg" alt="">
                </div>
                <div class="w-24 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="h-24 w-24" src="../assets/PatnersLogo/nsip.png" alt="">
                </div>
                </VueSlickCarousel>
               </div>
          </div>
          <div class="w-10/12 mx-auto my-20">
            <p class="topic text-lilac-light text-4xl font-bold p-4 pb-8 sm:p-0">Testimonials</p>
            <div class="hidden md:block w-full item-center">
              <VueSlickCarousel v-bind="slickOptions" >
                <div class="p-6">
                  <div class="shadow-sm rounded-xl p-3 m-5 w-62 text-center  divide-y divide-gray-200">
                  <div class="my-2 text-sm text-normal text-left text-justify leading-loose">
                    <p class="italic">Thank you NEHIH for this opportunity. I am proud to be part of this programme.</p>
                  </div>
                  <div class="flex flex-col text-center items-center py-2">
                    <img class="h-9 w-9 rounded-full" src="../assets/Testimonials/testimony-4.jpg" alt="">
                    <p class="text-lilac-light font-semibold">Sarah Micheal</p>
                  </div>
                </div>
                </div>
                <div class="p-6">
                  <div class="shadow-sm rounded-xl p-3 m-5 w-62 text-center  divide-y divide-gray-200">
                  <div class="my-2 text-sm text-normal text-left text-justify leading-loose">
                    <p class="italic">Thank you NEHIH for this opportunity. I am proud to be part of this programme.</p>
                  </div>
                  <div class="flex flex-col text-center items-center py-2">
                    <img class="h-9 w-9 rounded-full" src="../assets/Testimonials/testimony-4.jpg" alt="">
                    <p class="text-lilac-light font-semibold">Sarah Micheal</p>
                  </div>
                </div>
                </div>
                <div class="p-6">
                  <div class="shadow-sm rounded-xl p-3 m-5 w-62 text-center  divide-y divide-gray-200">
                  <div class="my-2 text-sm text-normal text-left text-justify leading-loose">
                    <p class="italic">Thank you NEHIH for this opportunity. I am proud to be part of this programme.</p>
                  </div>
                  <div class="flex flex-col text-center items-center py-2">
                    <img class="h-9 w-9 rounded-full" src="../assets/Testimonials/testimony-4.jpg" alt="">
                    <p class="text-lilac-light font-semibold">Sarah Micheal</p>
                  </div>
                </div>
                </div>
                <div class="p-6">
                  <div class="shadow-sm rounded-xl p-3 m-5 w-62 text-center  divide-y divide-gray-200">
                  <div class="my-2 text-sm text-normal text-left text-justify leading-loose">
                    <p class="italic">Thank you NEHIH for this opportunity. I am proud to be part of this programme.</p>
                  </div>
                  <div class="flex flex-col text-center items-center py-2">
                    <img class="h-9 w-9 rounded-full" src="../assets/Testimonials/testimony-4.jpg" alt="">
                    <p class="text-lilac-light font-semibold">Sarah Micheal</p>
                  </div>
                </div>
                </div>  
              </VueSlickCarousel>
            </div>
              <div class="block md:hidden w-full item-center">
              <VueSlickCarousel v-bind="slickOptions2" >
                <div class="p-6">
                  <div class="shadow-sm rounded-xl p-3 m-5 w-62 text-center  divide-y divide-gray-200">
                  <div class="my-2 text-sm text-normal text-left text-justify leading-loose">
                    <p class="italic">Thank you NEHIH for this opportunity. I am proud to be part of this programme.</p>
                  </div>
                  <div class="flex flex-col text-center items-center py-2">
                    <img class="h-9 w-9 rounded-full" src="../assets/Testimonials/testimony-4.jpg" alt="">
                    <p class="text-lilac-light font-semibold">Sarah Micheal</p>
                  </div>
                </div>
                </div>
                <div class="p-6">
                  <div class="shadow-sm rounded-xl p-3 m-5 w-62 text-center  divide-y divide-gray-200">
                  <div class="my-2 text-sm text-normal text-left text-justify leading-loose">
                    <p class="italic">Thank you NEHIH for this opportunity. I am proud to be part of this programme.</p>
                  </div>
                  <div class="flex flex-col text-center items-center py-2">
                    <img class="h-9 w-9 rounded-full" src="../assets/Testimonials/testimony-4.jpg" alt="">
                    <p class="text-lilac-light font-semibold">Sarah Micheal</p>
                  </div>
                </div>
                </div>
                <div class="p-6">
                  <div class="shadow-sm rounded-xl p-3 m-5 w-62 text-center  divide-y divide-gray-200">
                  <div class="my-2 text-sm text-normal text-left text-justify leading-loose">
                    <p class="italic">Thank you NEHIH for this opportunity. I am proud to be part of this programme.</p>
                  </div>
                  <div class="flex flex-col text-center items-center py-2">
                    <img class="h-9 w-9 rounded-full" src="../assets/Testimonials/testimony-4.jpg" alt="">
                    <p class="text-lilac-light font-semibold">Sarah Micheal</p>
                  </div>
                </div>
                </div>
                <div class="p-6">
                  <div class="shadow-sm rounded-xl p-3 m-5 w-62 text-center  divide-y divide-gray-200">
                  <div class="my-2 text-sm text-normal text-left text-justify leading-loose">
                    <p class="italic">Thank you NEHIH for this opportunity. I am proud to be part of this programme.</p>
                  </div>
                  <div class="flex flex-col text-center items-center py-2">
                    <img class="h-9 w-9 rounded-full" src="../assets/Testimonials/testimony-4.jpg" alt="">
                    <p class="text-lilac-light font-semibold">Sarah Micheal</p>
                  </div>
                </div>
                </div>  
              </VueSlickCarousel>
            </div>
          </div>
    </div>
</template>

<script>

  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data(){
    return {
      toggleModal: false,
       slickOptions: {
        dots: true,
        arrow: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
       slickOptions2: {
        dots: true,
        arrow: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    };
  },
  methods:{}
}
</script>


<style scoped>

 /* .imagesinsert{
   /* Background pattern from Toptal Subtle Patterns */
   /* height: 400px; */
   /* width: 100%; */
   /* background-image: url("src\assets\handImage.jpg"); */
 /* } */ 
 @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap');
 .banner {
  height: 400px;
  background-image: url("../../public/assests/16th November 2019_NEHIH at TechPlus 2019 Conference-Expo Lagos-132.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
p.sub-heading{
    max-width: 700px;
    margin: 0 auto;
}
.thumbnail {
  min-height: 120px;
  height: max-content;
}
.topic{
  font-family: 'Josefin Sans', sans-serif;
}
</style>