<template>
  <div>
    <Header/>
      <div>
        <div class="bgimage flex h-36 justify-center text-2xl font-md text-gray-900 bg-opacity-30 items-center">
          <p class="text-center text-white">Incubation</p>
        </div>
        <div class="w-10/12 sm:w-8/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
          <p class="my-1">Creating African Success Stories We provide support for top startups at the most critical stage. NORTHEAST HUMANITARIAN INNOVATION HUB (NEHIH) is established to solve the problem of the inadequate support structure, mentorship system for incubating, or developing business ideas by young people in north-east Nigeria.</p>
          <p class="my-1"> Incubation at NEHIH helps early-stage entrepreneurs through product development, growth hacking and building a sustainable business model. We work with great teams with ideas ready to change the status quo, solving real problems and will be committed to the 6 months Incubation program. We provide seed capital, office space, high internet access, meeting room and other facilities.</p>
          <p class="my-1">At NEHIH we do not target a specific type of industry/segment. We work to help all our start-ups build great products that solve real problem we face as Nigerians/Africans on a daily basis. Email us at info@humanitarianihub.org for questions regarding the Program Creating African Success Stories We provide support for top startups at the most critical stage.</p>
          <p class="my-1">North East Humanitarian Innovation Hub (NEHIH) is established to solve the problem of the inadequate support structure, mentorship system for incubating, or developing business ideas by young people in North-East Nigeria. Incubation at NEHIH helps early-stage entrepreneurs through product development, growth hacking and building a sustainable business model. We work with great teams with ideas ready to change the status quo, solving real problems and will be committed to the 6 months Incubation program. We provide seed capital, office space, high internet access, meeting room and other facilities. At NEHIH we do not target a specific type of industry/segment. We work to help all our start-ups build great products that solve real problem we face as Nigerians/Africans on a daily basis.</p>
          <p class="my-1">Email us at info@humanitarianihub.org for questions regarding the Program</p>
        </div>
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
    background-image: url("../assets/incubation.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
}

.bgimage2{
    background-image: url("../assets/incubation.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
}
</style>