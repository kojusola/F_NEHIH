<template>
  <div>
    <Header/>
      <div class="bgimage relative w-full bg-dark d-flex items-center opacity-100">
        <div class="aboslute flex items-center top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
          <div class="text-center  hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
            <p class=" text-lg sm:text-3xl  font-bold text-white">Innovative Consulting And Training</p>
          </div>
        </div>
      </div> 
      <div class="w-10/12 sm:w-9/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
        <p class="my-1">We support individuals and organisations to smartly apply innovation and technology to solve Humanitarian and social challenges.We facilitate creative thinking and collaborative problem solving using the smart application of technology.</p>
        <p class="my-1">Our knowledge of delivering innovation through a human-centred design approach combined with our expertise in turning ideas into products is at the core of our engagements.</p>
        <p class="my-1">From learning to code and exploring programming to understanding Our training courses explore tech trends. Join beginner to advanced level courses led by leading tech experts.</p>
        <p class="my-1">The HIF’s portfolio of funded projects has informed a more detailed understanding of what successful innovation looks like, and what it can achieve for the humanitarian ecosystem.</p>
      </div>
    <div class="w-10/12 mx-auto px-4">          
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="hidden md:block md:w-1/2 px-4">
            <div class=" bgimage2 h-full w-full bg-cover rounded shadow-md"></div>
          </div>
          <div class="md:w-1/2 h-auto px-4">
            <div class="mb-8"><img class="rounded shadow-md" src="../assets/3dlabs/3d.jpg" alt=""></div>
            <div><img class="rounded shadow-md" src="../assets/3dlabs/3d4.jpg" alt=""></div>
          </div>
        </div>
      </section>             
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="../assets/3dlabs/3d2.jpg" alt=""></div>
          <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="../assets/3dlabs/3d3.jpg" alt=""></div>
        </div>
      </section>
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
    Footer
  }
}
</script>

<style scoped>
.bgimage{
    height: 300px;
    background-image: url("../assets/3d_lab.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
}

.bgimage2{
    background-image: url("../assets/3d_lab.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
}
</style>