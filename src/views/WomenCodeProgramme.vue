<template>
  <div>
    <Header/>
       <div class="bgimage relative w-full bg-dark d-flex items-center opacity-100">
        <div class="aboslute flex items-center top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
          <div class="text-center  hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
            <p class=" text-lg sm:text-3xl  font-bold text-white">Women Codeprenuer Programme (WCP)</p>
          </div>
        </div>
      </div> 
      <div class="w-10/12 sm:w-8/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
        <p class="my-1">Women Codeprenuer Programme (WCP) Codepreneur Program is designed to help women and girls develop skills and competencies to better compete in the workforce, and bridge the gender gap in ICT and the workforce.</p>
        <p class="my-1">Our mission is to train and empower women and girls in STEM, ICT and Entrepreneurship to be used as an employee in any job or to begin their journey as a business owner/start-up.</p>
        <p class="my-1">Partnering with the Cisco Academy, the Codepreneur Program is a certificate training which comprises introductory courses to Digital skills and Entrepreneurship, taking participants from a beginner level to intermediate.</p>
        <p class="text-xl font-semibold text-lilac-light">Course Requirements</p>
        <ul>
          <li class="ml-3">Must be female 18 years and above</li>
          <li class="mb-2 ml-3">Must be resident in Northeast Nigeria for the duration of the program</li>
        </ul>
        <p class="text-xl font-semibold text-lilac-light">Course Selection:</p>
        <p>Once enrolled, each participant is required to select one track in addition to the Entrepreneurship course from the list below:</p>
        <ul>
          <li class="my-1 ml-3"> <span class=" font-semibold text-lilac-light">Get Connected:</span> This introductory-level course, Get Connected (English) teaches basic Information Technology (IT) needed to compete in the global workforce. With a focus on basic communication and collaboration technologies, including social media.</li>
          <li class="my-1 ml-3"> <span class=" font-semibold text-lilac-light">IT Essentials:</span> The digital world is upon us both personally and professionally. Having a better understanding of the Internet, computers and social media can be a big help toward acquiring digital skills. And, once you have these skills, there are many more possibilities opened to you as far as career advancement. Learn how to use a computer, connect devices and access search, email, and social media. Enjoy course content that is very user-friendly and interactive with lots of illustrations! No previous knowledge is needed for this introductory course. </li>
          <li class="my-1 ml-3"> <span class=" font-semibold text-lilac-light">Entrepreneurship Courses:</span> Entrepreneurship (Compulsory) - Welcome to the Cisco Networking Academy Entrepreneurship course! This course is designed to help you develop skills that you can use along with your IT skills and knowledge. Entrepreneurship focuses on teaching critical business and financial skills, attitudes, and behaviors to help you succeed in the 21st century workplace. </li>
        </ul>
      </div>
      <div class="w-10/12 mx-auto px-4">          
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="hidden md:block md:w-1/2 px-4">
            <div class=" bgimage2 h-full w-full bg-cover rounded shadow-md"></div>
          </div>
          <div class="md:w-1/2 h-auto px-4">
            <div class="mb-8"><img class="rounded shadow-md" src="../assets/wcp/wcp1.jpg" alt=""></div>
            <div><img class="rounded shadow-md" src="../assets/wcp/wcp2.jpg" alt=""></div>
          </div>
        </div>
      </section>
                
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="../assets/wcp/wcp3.jpg" alt=""></div>
          <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="../assets/wcp/wcp4.jpg" alt=""></div>
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

<style>
.bgimage{
    height: 300px;
    background-image: url("../assets/wcp/wcp.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
}

.bgimage2{
    background-image: url("../assets/wcp/wcp.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
}
</style>