<template>
    <div>
        <Header/>
        <div class="w-full">
            <div class="banner relative w-full bg-dark d-flex items-center opacity-100">
        <div class="aboslute flex items-center top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
          <div class="text-center  hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
            <p class=" text-lg sm:text-3xl  font-bold text-white">Become A Member</p>
          </div>
        </div>
      </div> 
              <div class="w-full">
                <div class="mx-8 sm:w-10/12 mx-auto block my-8">
                    <div class="block sm:flex w-full">
                        <div class="w-11/12 mx-auto sm:w-4/12">
                            <p class="topic text-lilac-light text-xl font-semibold">Benefits of being a member</p>
                            <ul class="text-left space-y-2 my-3 text-justify">
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, beatae. </li>
                                <li> Non dicta nobis culpa minus repellendus consequatur dignissimos amet tempora fuga.</li> 
                                <li>dolorem suscipit quasi rerum velit, delectus odit tenetur numquam.</li>
                            </ul>
                        </div>
                        <form  class="my-8 sm:my-0 w-11/12 sm:w-8/12  lg:w-96 text-left mx-auto text-gray-600 font-medium">
                            <div class="w-full mt-2">
                                <label for="name" class="">Name</label>
                                <input type="text" class="w-full mt-3 rounded-md p-2 bg-gray-200 outline-none border border-transparent focus:border-gray-200  focus:bg-white">
                            </div>
                            <div class="w-full mt-3">
                                <label for="name" class="">Phone Number</label>
                                <input type="text" class="w-full mt-3 rounded-md p-2 bg-gray-200 outline-none border border-transparent focus:border-gray-200  focus:bg-white">
                            </div>
                            <div class="w-full mt-3">
                                <label for="name" class="">Email Adddress</label>
                                <input type="text" class="w-full mt-3 rounded-md p-2 bg-gray-200 outline-none border border-transparent focus:border-gray-200  focus:bg-white">
                            </div>
                            <div class="w-full mt-3">
                                <label for="name" class="">Reason for request to be a member</label>
                                <textarea type="text" class="w-full mt-3 h-36 rounded-md p-2 bg-gray-200 outline-none border border-transparent focus:border-gray-200  focus:bg-white">
                                </textarea>
                            </div>
                            <button class="w-30 my-3 p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black">Join NEHIH</button>
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
</style>