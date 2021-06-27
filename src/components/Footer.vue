<template>
  <div class="bg-gray-100 footer">
     <div class="w-11/12 mx-auto sm:w-full block md:flex md:justify-between md:items-center md:w-full py-5 md:px-7">
      <div class=" md:w-1/3 px-5">
          <p class="text-md font-bold text-left ">Contact</p>
          <div class="flex">
            <svg class="h-6 w-6 stroke-current text-gray-500 -mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <p class="text-gray-500 text-sm ml-2 ">info@humanitarianihub.org</p>
          </div>
            <div class="flex w-full mt-3">
            <button class="w-1/2 p-2  rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black" @click ="toggleModal1 =!toggleModal1">Contact Us</button>
             <div v-if="toggleModal1" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                <div class="relative mx-auto w-10/12 sm:w-6/12 border border-transparent rounded-lg shadow-lg">
                  <div class="p-6 pt-3 bg-white rounded-lg shadow-xl">
                    <button class="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" @click ="toggleModal1 =!toggleModal1" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <form  class="mb-4 xl:my-8 text-left mx-auto bg-white sm:my-0  text-gray-600 font-medium">
                      <p class="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center">Contact Us</p>
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
                          <textarea type="text" class="w-full mt-3 h-24 rounded-md p-2 bg-gray-200 outline-none border border-transparent focus:border-gray-200  focus:bg-white">
                          </textarea>
                      </div>
                      <button class="w-30 mt-3 p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black">Send Message</button>
                  </form>
                  </div>
                </div>
              </div>
              <a class="w-1/2" href="https://www.google.com/maps/dir//Northeast+Humanitarian+Innovation+Hub,+No3+Legom+close,+off+kashim+way,+Jimeta-Yola,+640101,+Jimeta,+Nigeria/@9.2714431,12.4527295,6245m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x10fc6b61cee85221:0x471b708b0e967449!2m2!1d12.4691087!2d9.2714157?hl=en-GB" target="_blank">
                <button class="w-full ml-3 p-2 rounded-lg focus:ouline-none border border-gray-500 hover:bg-lilac-light hover:border-0 hover:text-white">Check Directions</button>
              </a>
          </div>
          <div class="flex w-full mt-3 text-gray-500 space-x-4 items-center">
            <a href="#">
              <svg class="stroke-current hover:text-lilac-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#">
              <svg  class="stroke-current hover:text-lilac-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#">
              <svg class="fill-current hover:text-lilac-light"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#">
              <svg class="fill-current hover:text-lilac-light"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
          </div>
      </div>
      <div class="mt-10 md:mt-0 md:w-1/3 px-5 py-3 flex flex-col flex-start">
            <p class="text-md font-bold text-left">Newsletter</p>
            <p class="text-gray-500 text-sm text-left">To get more info and update from us at any moment of recruitment and more, lets have your email address for the newsletter.</p>
            <input type="text" class="w-full mt-3 rounded-lg p-2 bg-gray-200  placeholder-white::placeholder text-white hover:bg-white focus:outline-none hover:text-black" placeholder="Enter your Email Address">
            <button class="focus:ouline-none w-1/2 md:w-1/2 lg:1/4 mt-3 p-2 rounded-lg border border-transparent bg-lilac-light  hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black">Subscribe</button>
      </div>
    </div>
    <div class=" border-t border-gray-300 mx-10 py-3">
      <p class="text-center text-sm font-light">Copyright © {{getCurrYear()}} NEHIH. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
    return {
      toggleModal1: false,
      }
    },
    methods: {
        getCurrYear(){
            return new Date().getFullYear();
        }
    }
};
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap');
.topic{
  font-family: 'Josefin Sans', sans-serif;
}
</style>