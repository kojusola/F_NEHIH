<template>
  <div>
      <Header/>
      <div class=" flex h-36 bg-lilac-light justify-center text-2xl font-md text-gray-900 bg-opacity-30 items-center">
        <p class="topic text-center">Co Working Space</p>
      </div>
      <div class="w-10/12 mx-auto my-10 flex flex-wrap">
          <a href="/workspace/cyberspace">
            <div class="w-64 m-10">
              <div class="w-56 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56" src="../../assets/workspace/open-lounge.jpeg" alt="">
              </div>
              <div>
                  <p>Cyberspace</p>
              </div>
            </div>
          </a>
          <a href="/workspace/cyberspace">
            <div class="w-64 m-10">
              <div class="w-56 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56" src="../../assets/workspace/space-1.jpeg" alt="">
              </div>
              <div>
                  <p>Campus Pass</p>
              </div>
            </div>
          </a>
          <a href="/workspace/cyberspace">
            <div class="w-64 m-10">
              <div class="w-56 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56" src="../../assets/workspace/freelance-desk-2.jpeg" alt="">
              </div>
              <div>
                  <p>FreeLance desk</p>
              </div>
            </div>
          </a>
          <a href="/cyberspace">
            <div class="w-64 m-10">
              <div class="w-56 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56" src="../../assets/workspace/founders-private.jpeg" alt="">
              </div>
              <div>
                  <p>Founders Private</p>
              </div>
            </div>
          </a>
          <a href="/workspace/cyberspace">
            <div class="w-64 m-10">
              <div class="w-56 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56" src="../../assets/workspace/board_room.jpeg" alt="">
              </div>
              <div>
                  <p>Board Room</p>
              </div>
            </div>
          </a>
          <a href="/workspace/cyberspace">
            <div class="w-64 m-10">
              <div class="w-56 shadow-lg hover:shadow-2xl hover:w-30 hover:h-30">
                  <img class="w-56" src="../../assets/workspace/space-1.jpeg" alt="">
              </div>
              <div>
                  <p>Cyberspace</p>
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

.topic{
  font-family: 'Josefin Sans', sans-serif;
}
</style>