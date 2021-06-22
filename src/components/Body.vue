<template>
    <div class="w-full">
        <!-- <div class="w-full h-64 bg-red-100 relative">
      <div class="absolute inset-0 bg-cover bg-center z-0 imagesinsert" style="background-image: url('src\assets\handImage.jpg')"></div>
      <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Dwayne</div>
    </div> -->
      <div class="banner w-full bg-dark d-flex items-center opacity-100">
        <div class=" w-3/4 hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
          <p class=" text-xl sm:text-3xl  font-bold text-gray-900">WELCOME TO NORTH EAST INNOVATION HUB</p>
          <p class=" text-md text-gray-800 sm:text-xl  ml-2">NorthEast Innovation Hub is a dynamic community of creative minds and game changers collaborating on innovative solutions to the challenges faced by communities in North-Eastern part of Nigeria and the World as a whole.</p>
          <button class="py-3 px-5  rounded-lg bg-lilac-light border border-transparent" @click ="toggleModal =!toggleModal">Take a Tour</button>
        </div>
        <div v-if="toggleModal" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
          <div class="relative mx-auto w-auto max-w-2xl">
            <div class="w-full bg-white">
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A cum distinctio, assumenda ratione modi eveniet tempora delectus optio libero, officia, explicabo pariatur nihil porro voluptatem ut? Enim, sed a? Atque?</span>
              <video src="#"></video>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 mb-6 w-10/12 mx-auto">
          <p class="text-lilac-light text-4xl font-bold p-4 sm:p-0">Our Causes</p>
          <div class="block my-4 mx-auto w-full sm:flex sm:h-72 bg-white items-center justify-between">
            <div class="w-96 h-56">
              <img class="h-56 w-96" src="../assets/undraw_Process_re_gws7.svg" alt="">
            </div>
            <div class="w-96">
              <p class="text-lilac-light text-3xl py-3 font-semibold">We Inspire</p>
              <p class="text-left text-black font-thin  text-sm text-normal text-left  leading-loose">Get inspired by deep, genuine insights, engage with peers in a serene environment creating opportunities that will affect you directly.</p>
            </div>
          </div>
            <div class="block sm:flex bg-white sm:rounded-lg sm:bg-lilac-light sm:bg-opacity-10 p-5 my-4 w-full sm:h-72 bg-white items-center justify-between">
              <div class="sm:hidden w-96 h-56 ">
                <img class="h-56 w-96" src="../assets/undraw_education_f8ru (1).svg" alt="">
              </div>
              <div class="w-96">
                <p class="text-lilac-light text-3xl py-3 font-semibold">We Educate</p>
                <p class="text-left text-black font-thin  text-sm text-normal text-left leading-loose">We equip youths in North-East with skills to succeed in today’s economy, tackling unemployment by partnering with individuals and organisations.</p>
              </div>
              <div class="hidden sm:block w-96 h-56 ">
                <img class="h-56 w-96" src="../assets/undraw_education_f8ru (1).svg" alt="">
              </div>
          </div>
          <div class="block my-4 w-full sm:flex sm:h-72 bg-white items-center justify-between">
            <div class="w-96 h-56">
              <img class="h-56 w-96" src="../assets/undraw_connected_world_wuay.svg" alt="">
            </div>
            <div class="w-96">
              <p class="text-lilac-light text-3xl py-3 font-semibold">We Connect</p>
              <p class="text-left text-black font-thin text-sm text-normal text-left leading-loose">Connecting you to a world of information and insight. intelligence platform enabling faster, smarter, and more efficient processes</p>
            </div>
          </div>
      </div>
      <div class="bg-gray-900 py-4">
        <div class="text-lilac-light w-10/12 mx-auto">
          <p class="text-4xl font-bold p-4 sm:p-0 my-3">About Us</p>
          <div class="flex justify-between items-center">
            <div class="w-1/4 items-center">
              <p class="border-2 rounded-full border-lilac-light w-7 text-center mx-auto my-2">1</p>
              <p class="text-xl font-semibold mb-2">Who We Are</p>
              <p class="text-sm text-left text-sm text-normal text-left leading-loose">NorthEast Innovation Hub is a dynamic community of creative minds and game changers collaborating on innovative solutions to the challenges faced by our communities.</p>
            </div>
            <div class="w-1/4">
              <p class="border-2 rounded-full border-lilac-light w-7 mx-auto my-2">2</p>
              <p class="text-xl font-semibold mb-2">What We Do</p>
              <p class="text-sm text-left text-sm text-normal text-left leading-loose">Bring together IDPs, humanitarians, public/private sectors with the shared goal of scaling effective, efficient and ethical solutions to common humanitarian challenges.</p>
            </div>
            <div class="w-1/4">
              <p class="border-2 rounded-full border-lilac-light w-7 mx-auto my-2">3</p>
              <p class="text-xl font-semibold mb-2">Why the NorthEast</p>
              <p class="text-sm text-left text-sm text-normal text-left leading-loose">The North-East region has been severely affected by the conflict, which exacerbated the pre-existing socio –economic developmental challenges in this region.</p>
            </div>
          </div>
          <div class="text-left mb-4 mt-5 ">
            <a href="/about">
              <button class="outline-none focus:outline-none px-5 py-2  rounded-full bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black">Know more about us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      toggleModal: false
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
 .banner {
  height: 400px;
  background-image: url("../../public/assests/16th November 2019_NEHIH at TechPlus 2019 Conference-Expo Lagos-132.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.hero {
    width:700px
}
p.sub-heading{
    max-width: 700px;
    margin: 0 auto;
}
.thumbnail {
  min-height: 120px;
  height: max-content;
}
</style>