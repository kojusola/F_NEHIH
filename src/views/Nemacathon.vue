<template>
  <div>
    <Header/>
      <div class="bgimage relative w-full bg-dark d-flex items-center opacity-100">
        <div class="aboslute flex items-center top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
          <div class="text-center  hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
            <p class=" text-lg sm:text-3xl  font-bold text-white">NE-MakeAthon</p>
          </div>
        </div>
      </div> 
      <div class="w-10/12 sm:w-8/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
        <p class="my-1">The Makeathon is an exciting, creative and rigorous hands-on co-creating program initiated to crowd source and support brilliant and innovative ideas that can be developed to scalable solutions to the humanitarian challenges faced by the internally displaced persons and other affected persons in North-East Nigeria.</p>
        <p class="my-1"> <span class="font-semibold">The Goals Mission And Objectives of the Makeathon:</span> To start a process and develop an ecosystem of innovation close to conflict and natural disaster-affected people by co-creating solutions with them and with humanitarian service providers to address the protection and assistance challenges that have remained so far neglected.</p>
        <p class="my-1">The makeathon is targeted at providing innovative solutions to the humanitarian challenges faced by IDPs and other affected persons living in the North East of Nigeria. The makeathon is focused on the bottom of the pyramid people affected by chronic humanitarian emergencies including IDPs, vulnerable sections of the population and people in remote inaccessible places. Our goal is to at the end of the competition, come up with solutions that directly impact on the lives of the IDPs and bring about positive change within their communities as they begin the process of healing and reintegration in society. We aim to achieve this by working side by side with representatives of the affected persons in each team, listen to their stories, understand their challenges and together be co-creators of the solutions through innovation and technology.</p>
        <p class="my-1">Further information about the Ne-MakeAthon can be found <a class="text-lilac-light" href="https://www.nemakeathon.org/" target="_blank">here</a></p>
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
    background-image: url("../assets/ne-make.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>