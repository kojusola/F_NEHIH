<template>
  <div class="w-full">
    <Header/>
      <div class=" flex h-36 bg-lilac-light justify-center text-2xl font-md text-gray-900 bg-opacity-30 items-center">
        <p class="text-center">The Humanitarian Innovation Foundation (HIF)</p>
      </div>
      <div class="w-8/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
        <p class="my-1">The Humanitarian Innovation Foundation (HIF) is a Non-profit Organization duly registered with Corporate Affairs Corporation of Nigeria. Part of the core objectives of The Humanitarian Innovation Foundation is the socio-economic empowerment of women and youth groups in particular and the society in general.</p>
        <p class="my-1">The Humanitarian Innovation Fund supports organisations and individuals to identify, nurture and share innovative and scalable solutions to the challenges facing The North-East region.</p>
        <p class="my-1">We Aim to improve outcomes for people affected by humanitarian crises in North-East Nigeria by identifying, nurturing and sharing more effective and scalable solutions. It now leads the way in funding, supporting, and managing innovation at every stage of the innovation process.</p>
        <p class="my-1">The HIF’s portfolio of funded projects has informed a more detailed understanding of what successful innovation looks like, and what it can achieve for the humanitarian ecosystem.</p>
      </div>
      <div class="w-8/12 mx-auto">
        <div class="block sm:flex my-2 justify-between items-center">
         <div class="flex sm:w-3/6 justify-between">
            <svg class="w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="myClipPath">
                    <path fill="#FF0066" d="M55.1,-40.8C69.3,-26.2,77.3,-3.4,72.9,17.1C68.6,37.5,52,55.5,31.5,65.4C11,75.2,-13.4,76.9,-32.8,67.7C-52.2,58.5,-66.6,38.5,-72.3,15.8C-78.1,-6.9,-75.2,-32.3,-61.7,-46.8C-48.2,-61.3,-24.1,-65,-1.8,-63.5C20.5,-62.1,40.9,-55.5,55.1,-40.8Z" transform="translate(100 100)" />
                    </clipPath>
                </defs>
                <image class="w-56 h-56" clip-path="url(#myClipPath)" xlink:href="../assets/women.jpg" alt="women"></image>
            </svg>
          </div>
          <div class="sm:w-3/6 ">
              <p class="text-lilac-light text-xl">Women and Youth Initiative on COVID-19</p>
              <div class=" my-5  text-sm text-normal text-left text-justify leading-loose" >
                  <p class="my-1">This is a partnership between the Humanitarian Innovation Foundation (HIF) and the British Council/European Union through the “Managing Conflict in Nigeria” (MCN) programme to curb the spread of the COVID-19 pandemic in selected rural areas of Adamawa State.</p>
                  <p class="my-1">The project covers the period from the launch of the HIF in late 2020 to January 2021</p>
              </div>
          </div>
        </div>
         <div class="block sm:flex my-2 justify-between items-center">
        <div class=" sm:hidden">
            <svg class="w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="myClipPath">
                    <path fill="#FF0066" d="M55.1,-40.8C69.3,-26.2,77.3,-3.4,72.9,17.1C68.6,37.5,52,55.5,31.5,65.4C11,75.2,-13.4,76.9,-32.8,67.7C-52.2,58.5,-66.6,38.5,-72.3,15.8C-78.1,-6.9,-75.2,-32.3,-61.7,-46.8C-48.2,-61.3,-24.1,-65,-1.8,-63.5C20.5,-62.1,40.9,-55.5,55.1,-40.8Z" transform="translate(100 100)" />
                    </clipPath>
                </defs>
                <image class="w-56 h-56" clip-path="url(#myClipPath)" xlink:href="../assets/background-v.jpg" alt="women"></image>
            </svg>
          </div>
          <div class="sm:w-3/6 ">
              <p class="text-lilac-light text-xl">16 Days of Activism</p>
              <div class=" my-5  text-sm text-normal text-left text-justify leading-loose" >
                  <p class="my-1">The HIF partnership with the British Council and EU under the MCN Project coordinated efforts and drove conversations around advocacy in order to accelerate youth inclusion, call for institutional and community engagement around messaging, educating and concrete policy response to gender-based violence in the region, especially in respect to the covid-19 pandemic.</p>
                  <p class="my-1">A series of activities ranging from secondary school quiz Competitions, Peace Walk and Webinars were held to commemorate the “16 Days of Advocacy 2020”.</p>
              </div>
          </div>
          <div class="hidden sm:block sm:w-3/6 justify-between">
            <svg class="w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="myClipPath">
                    <path fill="#FF0066" d="M55.1,-40.8C69.3,-26.2,77.3,-3.4,72.9,17.1C68.6,37.5,52,55.5,31.5,65.4C11,75.2,-13.4,76.9,-32.8,67.7C-52.2,58.5,-66.6,38.5,-72.3,15.8C-78.1,-6.9,-75.2,-32.3,-61.7,-46.8C-48.2,-61.3,-24.1,-65,-1.8,-63.5C20.5,-62.1,40.9,-55.5,55.1,-40.8Z" transform="translate(100 100)" />
                    </clipPath>
                </defs>
                <image class="w-56 h-56" clip-path="url(#myClipPath)" xlink:href="../assets/background-v.jpg" alt="women"></image>
            </svg>
          </div>
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
    Footer,
  }
}
</script>

<style>

</style>