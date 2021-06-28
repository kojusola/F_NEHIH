<template>
  <div>
    <Header/>
      <div>
         <div class="bgimage relative w-full bg-dark d-flex items-center opacity-100">
        <div class="aboslute flex items-center top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
          <div class="text-center  hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
            <p class=" text-lg sm:text-3xl  font-bold text-white">Incubation</p>
          </div>
        </div>
      </div> 
        <div class="w-10/12 sm:w-8/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
          <p class="my-1">Creating African Success Stories We provide support for top startups at the most critical stage. NORTHEAST HUMANITARIAN INNOVATION HUB (NEHIH) is established to solve the problem of the inadequate support structure, mentorship system for incubating, or developing business ideas by young people in north-east Nigeria.</p>
          <p class="my-1"> Incubation at NEHIH helps early-stage entrepreneurs through product development, growth hacking and building a sustainable business model. We work with great teams with ideas ready to change the status quo, solving real problems and will be committed to the 6 months Incubation program. We provide seed capital, office space, high internet access, meeting room and other facilities.</p>
          <p class="my-1">At NEHIH we do not target a specific type of industry/segment. We work to help all our start-ups build great products that solve real problem we face as Nigerians/Africans on a daily basis. Email us at info@humanitarianihub.org for questions regarding the Program Creating African Success Stories We provide support for top startups at the most critical stage.</p>
          <p class="my-1">North East Humanitarian Innovation Hub (NEHIH) is established to solve the problem of the inadequate support structure, mentorship system for incubating, or developing business ideas by young people in North-East Nigeria. Incubation at NEHIH helps early-stage entrepreneurs through product development, growth hacking and building a sustainable business model. We work with great teams with ideas ready to change the status quo, solving real problems and will be committed to the 6 months Incubation program. We provide seed capital, office space, high internet access, meeting room and other facilities. At NEHIH we do not target a specific type of industry/segment. We work to help all our start-ups build great products that solve real problem we face as Nigerians/Africans on a daily basis.</p>
          <p class="my-1">Email us at info@humanitarianihub.org for questions regarding the Program</p>
        </div>
      </div>
      <div class="w-10/12 mx-auto px-4">          
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="hidden md:block md:w-1/2 px-4">
            <div class=" bgimage2 h-full w-full bg-cover rounded shadow-md"></div>
          </div>
          <div class="md:w-1/2 h-auto px-4">
            <div class="mb-8"><img class="rounded shadow-md" src="../assets/incubation/3dlab3.jpeg" alt=""></div>
            <div><img class="rounded shadow-md" src="../assets/incubation/3dlab1 (1).jpeg" alt=""></div>
          </div>
        </div>
      </section>
                
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="../assets/incubation/3dlab1 (3).jpeg" alt=""></div>
          <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="../assets/incubation/incubation.jpg" alt=""></div>
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