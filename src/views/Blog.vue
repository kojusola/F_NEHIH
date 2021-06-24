<template>
  <div>
      <Header/>
      <div class="">
          <div class=" flex h-36 bg-lilac-light justify-center text-2xl font-md text-gray-900 bg-opacity-30 items-center">
            <p class="topic text-center">Blog</p>
          </div>
          <div class="w-11/12 sm:w-10/12 mx-auto">
              <div class="w-full py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">  
                <a href="/singleblog">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl">
                    <img class="w-full" src="../assets/blog.jpeg" alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="topic font-bold text-sm text-lilac-light mb-2">NEHIH Partners with Google to host CS first unplugged workshop for school teachers</div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <div class="flex justify-between text-sm">
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
                            <div class="stroke-current text-gray-500 mt-2 text-sm flex text-gray-200 space-x-2">
                                <svg class="stroke-current text-gray-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z">
                                    </path><line x1="7" y1="7" x2="7.01" y2="7"></line>
                                </svg>
                                <p>Education, Google, Partnership</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/singleblog">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl">
                    <img class="w-full" src="../assets/blog.jpeg" alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="topic font-bold text-sm text-lilac-light mb-2">NEHIH Partners with Google to host CS first unplugged workshop for school teachers</div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <div class="flex justify-between text-sm">
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
                            <div class="stroke-current text-gray-500 mt-2 text-sm flex text-gray-200 space-x-2">
                                <svg class="stroke-current text-gray-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z">
                                    </path><line x1="7" y1="7" x2="7.01" y2="7"></line>
                                </svg>
                                <p>Education, Google, Partnership</p>
                            </div>
                        </div>
                    </div>
                </a>
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
    Footer
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap');

.topic{
  font-family: 'Josefin Sans', sans-serif;
}
</style>