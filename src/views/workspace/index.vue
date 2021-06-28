<template>
  <div>
      <Header/>
       <div class="bgimage relative w-full bg-dark d-flex items-center opacity-100">
        <div class="aboslute flex items-center top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
          <div class="text-center  hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
            <p class=" text-lg sm:text-3xl  font-bold text-white">Co-working space</p>
          </div>
        </div>
      </div>
      <div class="w-9/12 mx-auto my-10 flex flex-wrap">
          <a href="/workspace/cyberspace">
            <div class="w-64 mx-auto m-10">
              <div class="w-56 mx-auto shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56 mx-auto" src="../../assets/workspace/lounge.jpg" alt="">
              </div>
              <div class="mx-auto mt-2">
                  <p>Cyberspace</p>
              </div>
            </div>
          </a>
          <a href="/workspace/campus-pass">
            <div class="w-64 mx-auto m-10">
              <div class="w-56 mx-auto shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56 mx-auto" src="../../assets/workspace/space-1.jpeg" alt="">
              </div>
              <div class="mx-auto mt-2">
                  <p>Campus Pass</p>
              </div>
            </div>
          </a>
          <a href="/workspace/freelance-desk">
            <div class="w-64 mx-auto m-10">
              <div class="w-56 mx-auto shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56 mx-auto" src="../../assets/workspace/freelance-desk-2.jpeg" alt="">
              </div>
              <div class="mx-auto mt-2">
                  <p>Freelance desk</p>
              </div>
            </div>
          </a>
          <a href="/workspace/founders-private">
            <div class="w-64 mx-auto m-10">
              <div class="w-56 shadow-lg mx-auto hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56 mx-auto" src="../../assets/workspace/founders-private.jpeg" alt="">
              </div>
              <div class="mx-auto mt-2">
                  <p>Founders Private</p>
              </div>
            </div>
          </a>
          <a href="/workspace/training-room">
            <div class="w-64 mx-auto m-10">
              <div class="w-56 shadow-lg mx-auto hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56 mx-auto" src="../../assets/workspace/board_room.jpeg" alt="">
              </div>
              <div class="mx-auto mt-2">
                  <p>Training Room</p>
              </div>
            </div>
          </a>
          <a href="/workspace/boardroom">
            <div class="w-64 mx-auto m-10">
              <div class="w-56 shadow-lg mx-auto hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56 mx-auto" src="../../assets/workspace/board-room.jpeg" alt="">
              </div>
              <div class="mx-auto mt-2">
                  <p>Board Room</p>
              </div>
            </div>
          </a>
          <a href="/workspace/open-lounge">
            <div class="w-64 mx-auto m-10">
              <div class="w-56 shadow-lg mx-auto hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56 mx-auto" src="../../assets/workspace/open-lounge.jpeg" alt="">
              </div>
              <div class="mx-auto mt-2">
                  <p>Open Lounge</p>
              </div>
            </div>
          </a>
          <a href="/workspace/outdoor">
            <div class="w-64 mx-auto m-10">
              <div class="w-56 shadow-lg mx-auto hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56 mx-auto" src="../../assets/workspace/open-lounge.jpeg" alt="">
              </div>
              <div class="mx-auto mt-2">
                  <p>Out Door Event Center </p>
              </div>
            </div>
          </a>
          
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  }
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