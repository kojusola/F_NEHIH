<template>
  <div>
      <Header/>
      <div>
          <div class=" flex h-36 bg-lilac-light justify-center text-2xl font-md text-gray-900 bg-opacity-30 items-center">
            <p class="topic text-center">cyberspace</p>
            </div>
            <div class="w-8/12 my-5 mx-auto text-sm text-normal text-left text-justify leading-loose">
                 <p class="text-xl topic text-lilac-light">Benefits:</p>
                 <ul class="">
                     <li class="my-1">Business Address</li>
                     <li class="my-1">3hrs Conference Room per month</li>
                     <li class="my-1">Front desk Service</li>
                     <li class="my-1">Mail Service</li>
                     <li class="my-1">Open events</li>
                 </ul>
                 <div class="flex space-x-10 w-8/12 w-auto">
                    <img class="w-96 my-6" src="../../assets/workspace/open-lounge.jpeg" alt="">
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap');

.topic{
  font-family: 'Josefin Sans', sans-serif;
}
</style>