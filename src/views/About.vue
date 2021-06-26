<template>
  <div class="about">
    <Header/>
        <div class="banner relative w-full bg-dark d-flex items-center opacity-100">
        <div class="aboslute flex items-center top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
          <div class="text-center  hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
            <p class=" text-lg sm:text-3xl  font-bold text-white">About North East Innovation Hub</p>
          </div>
        </div>
      </div>      
      <div class="w-11/12 sm:w-10/12 sm:flex my-5 mt-7 mx-auto items-center justify-center text-center">
        <div class="w-full flex mx-auto items-center">
          <img class=" w-3/4 mx-auto item-center text-center rounded-md shadow-md" src="../assets/team.jpg" alt="teamImage">
        </div>
        <div class="w-11/12 sm:w-8/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
          <p class="my-1">The Northeast Humanitarian Innovation Hub is an independent social innovation enterprise dedicated to impacting social change by utilizing innovation as a strategic tool to address the Humanitarian and socioeconomic challenges of Northeast Nigeria post conflict.</p>
          <p class="my-1">North-East Humanitarian Innovation Hub (NEHIH) is conceived of foster growth and development focused partnership between creatuve (most young) citizens of the North-East zone, social entreprenuers, subject matter experts, business and public authorities, to influence the development of innovation services and product that will be focused on providing innovative solutions to humanitarian problems faced in the region.</p>
        </div>
      </div>
      <div>
        <div class="side-banner py-6">
          <div class="w-10/12 mx-auto my-10 mt-12">
            <div class="w-72 mx-auto sm:mx-0 sm:w-96">
              <p class=" topic text-lilac-light text-2xl font-semibold">Our Mission</p>
              <p class="italic text-sm text-normal text-left  leading-loose"> &#8220;  Get inspired by deep, genuine insights, engage with peers in a serene environment creating opportunities that will affect you directly. &#8221; </p>
            </div>
          </div>
          <div class="w-10/12 mx-auto flex justify-between my-10">
            <div class="hidden sm:block sm:w-96"></div>
            <div class="w-72 mx-auto sm:mx-0 sm:w-96">
              <p class="topic text-lilac-light text-2xl font-semibold">Our Vision</p>
              <p class="italic text-sm text-normal text-left leading-loose"> &#8220;  We equip youths in North-East with skills to succeed in today’s economy, tackling unemployment by partnering with individuals and organisations. &#8221; </p>
            </div>
          </div>
          <div class="w-10/12 mx-auto my-10">
            <div class="w-72 mx-auto sm:mx-0 sm:w-96 sm:w-9/12">
              <p class="topic text-lilac-light text-2xl font-semibold">Why the Northeast</p>
              <p class="italic text-sm text-normal text-left  leading-loose"> &#8220;  The North-East region has been severely affected by the conflict, which exacerbated the pre-existing socio –economic developmental challenges in this region hence making it have the lowest indices relative to the rest of the country in areas of health care, education, employment and infrastructure amongst others.We are starting a process to develop an ecosystem of innovation close to conflict and natural disaster affected people by co-creating solutions with them and with humanitarian service providers to address the protection and assistance challenges that have remained so far neglected to address in the North East. &#8221; </p>
            </div>
          </div>
        </div>
        <div class="mt-6 mb-6 w-10/12 mx-auto">
          <p class=" topic text-lilac-light text-4xl font-bold p-4 sm:p-0">Our Causes</p>
          <div class="block my-4 mx-auto w-full sm:flex sm:h-72 bg-white items-center justify-between">
            <div class="w-72 mx-auto sm:w-96 h-56">
              <img class="h-56 w-96" src="../assets/undraw_Process_re_gws7.svg" alt="">
            </div>
            <div class="w-72 mx-auto sm:w-96">
              <p class="topic text-lilac-light text-3xl py-3 font-semibold">We Inspire</p>
              <p class="text-left text-black font-thin  text-sm text-normal text-left  leading-loose">Get inspired by deep, genuine insights, engage with peers in a serene environment creating opportunities that will affect you directly.</p>
            </div>
          </div>
            <div class="block sm:flex bg-white sm:rounded-lg sm:bg-lilac-light sm:bg-opacity-10 p-5 my-4 w-full sm:h-72 bg-white items-center justify-between">
              <div class="sm:hidden w-72 mx-auto sm:w-96 h-56 ">
                <img class="h-56 w-72 sm:w-96" src="../assets/undraw_education_f8ru (1).svg" alt="">
              </div>
              <div class="w-72 mx-auto sm:w-96">
                <p class="topic text-lilac-light text-3xl py-3 font-semibold">We Educate</p>
                <p class="text-left  mx-auto text-black font-thin  text-sm text-normal text-left leading-loose">We equip youths in North-East with skills to succeed in today’s economy, tackling unemployment by partnering with individuals and organisations.</p>
              </div>
              <div class="hidden sm:block w-96 h-56 ">
                <img class="h-56 w-72 sm:w-96" src="../assets/undraw_education_f8ru (1).svg" alt="">
              </div>
          </div>
          <div class="block my-4 w-full sm:flex sm:h-72 bg-white items-center justify-between">
            <div class="w-72 sm:w-96 mx-auto h-56">
              <img class="h-56 w-72 sm:w-96" src="../assets/undraw_connected_world_wuay.svg" alt="">
            </div>
            <div class="w-72 mx-auto sm:w-96">
              <p class="topic text-lilac-light text-3xl py-3 font-semibold">We Connect</p>
              <p class="text-left text-black  font-thin text-sm text-normal text-left leading-loose">Connecting you to a world of information and insight. intelligence platform enabling faster, smarter, and more efficient processes</p>
            </div>
          </div>
      </div>
      </div>
    <Footer/>
  </div>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap');
 .banner {
  height: 300px;
  background-image: url("../assets/background/background1.jpg");
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
 .side-banner {
  background-image: url("../assets/side-banner.png");
}
</style>