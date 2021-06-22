<template>
  <div>
      <Header/>
      <div class="w-full">
          <div class=" flex h-36 bg-lilac-light justify-center text-2xl font-md text-gray-900 bg-opacity-30 items-center">
            <p class="text-center">NEHIH Partners with Google to host CS first unplugged workshop for school teachers</p>
          </div>
          <div class="w-8/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
            <div class="flex text-sm justify-between py-2">
              <div class="inline-block flex text-gray-500 space-x-2">
                  <svg  class="stroke-current text-gray-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p>02/01/2020</p>
                </div>
                <div class="stroke-current text-gray-500 inline-block flex text-gray-200 space-x-2">
                  <svg class="stroke-current text-gray-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <p>Adeola</p>
                </div>
            </div>
            <p class="my-1">The North-East Humanitarian Innovation Hub on Tuesday the 26th of January conducted a workshop for Computer Science teachers-mentors from 16 secondary schools in Yola, Adamawa State.<br/>
            The Teachers who were engaged in hands-on activities ranging from Networking, Encoding, and Encyprtion at basic levels were given workbooks and other materials through which the basic levels of coding would be introduced to their students at junior secondary levels.<br>
            The initiative is birthed as a result of the partnership between NEHIH and the Cape Town Science Center and is powered by Google under the "CS First Unplugged" program. The Initiative which has been established in Kenya and South Africa has also been introduced to North-East Nigeria through the North-East Humanitarian Innovation Hub.<br/>

            The Programmes Manager of the NEHIH, Sesugh Angeer reiterated that this would further Unravel and boost the interest of Junior secondary school students in considering disciplines in the area of STEM and Computer Science fields. He encouraged the participants to leverage on the CS First Unplugged Programme to explore other areas of Coding and machine learning to complement the effort NEHIH is making to support STEM and Quality Education in Adamawa State and North East Nigeria at Large.
            </p>
            <div class="flex space-x-10">
              <img class="w-96 my-6" src="../assets/blog.jpeg" alt="">
            </div>
            <div class="text-sm">
              <div class="stroke-current text-gray-500 mt-2 text-sm flex text-gray-200 space-x-2">
                  <svg class="stroke-current text-gray-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z">
                      </path><line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                  <p>Education, Google, Partnership</p>
              </div>
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