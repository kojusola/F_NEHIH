<template>
    <div>
        <Header/>
        <div class="w-full">
            <div class=" flex h-36 bg-lilac-light justify-center text-2xl font-md text-gray-900 bg-opacity-30 items-center">
                <p class="text-center">Contact Us</p>
            </div>
              <div class="w-full">
                <div class="mx-8 sm:w-9/12 block my-8 sm:mx-auto sm:flex sm:justify-between">
                    <div class="sm:w-5/12 block justify-center">
                        <div class="flex mb-7">
                            <svg class="h-7 w-7 stroke-current text-gray-500 -mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="10" r="3"/>
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
                            </svg>
                            <p class="text-gray-500 text-sm text-left ml-2"> NE Innovation Campus, No 3 Legom Close, Off Kashim Ibrahim Way, Jimeta 640221, Adamawa, Nigeria</p>
                        </div>
                        <div class="flex items-center">
                            <svg class="h-3 w-3 stroke-current text-gray-500" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <p class="text-gray-500 text-sm ml-3">info@humanitarianihub.org</p>
                        </div>
                    </div>
                    <div class="sm:w-7/12">
                        <form  class="my-8 sm:my-0 lg:w-96 text-left text-gray-600 font-medium">
                            <div class="w-full">
                                <label for="name" class="">Name</label>
                                <input type="text" class="w-full mt-3 rounded-md p-2 bg-gray-200 outline-none border border-transparent focus:border-gray-200  focus:bg-white">
                            </div>
                            <div class="w-full">
                                <label for="name" class="">Phone Number</label>
                                <input type="text" class="w-full mt-3 rounded-md p-2 bg-gray-200 outline-none border border-transparent focus:border-gray-200  focus:bg-white">
                            </div>
                            <div class="w-full">
                                <label for="name" class="">Email Adddress</label>
                                <input type="text" class="w-full mt-3 rounded-md p-2 bg-gray-200 outline-none border border-transparent focus:border-gray-200  focus:bg-white">
                            </div>
                            <div class="w-full">
                                <label for="name" class="">Message</label>
                                <textarea type="text" class="w-full mt-3 h-36 rounded-md p-2 bg-gray-200 outline-none border border-transparent focus:border-gray-200  focus:bg-white">
                                </textarea>
                            </div>
                            <button class="w-30 my-3 p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black">Send Message</button>
                        </form>
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
  name: 'Home',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>

</style>