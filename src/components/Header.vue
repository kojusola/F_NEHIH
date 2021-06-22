<template>
  <header class="bg-gray-900 lg:flex lg:items-center lg:justify-between ">
    <div class=" px-4 py-5 flex justify-between items-center xl:w-72 xl:justify-center xl:py-5 xl:bg-gray-900">
          <a href="\">
            <img class="h-9 w-30 mx-auto"  src="../assets/white-logo_48.png" alt="">
          </a>
        <div class="flex lg:hidden">
          <button @click="toggle" class="px-2 focus:outline-none lg:hidden">
            <svg v-if="!isOpen" class="h-6 w-5 fill-current text-gray-500  focus:text-gray-800 hover:text-white" viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="10"></rect>
              <rect y="25" width="100" height="10"></rect>
              <rect y="50" width="100" height="10"></rect>
            </svg>
            <svg class="h-6 w-6 fill-current text-gray-500" v-if="isOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
    </div>
      <nav class="lg:flex lg:items-center lg:pr-4 xl:flex-1 xl:justify-between" :class="{'hidden':!isOpen, 'block': isOpen}">
        <div class="lg:flex lg:items-center lg:px-4 ">
            <div class="px-2 pb-5 lg:pb-0 lg:pt-0 pt-2 font-semibold text-gray-900 border-b border-gray-800 lg:flex lg:border-b-0 lg:text-sm lg:px-0">
              <div class="flex flex-col flex-start lg:flex-row">
                <a href="/blog" class="text-left  px-3 py-1 text-gray-400 hover:bg-gray-800 lg:px-2 lg:text-white xl:hover:bg-gray-200 lg:hover:text-gray-400">Blog</a>
                <a href="/foundation" class="text-left  px-3 py-1 text-gray-400 hover:bg-gray-800 lg:px-2 lg:text-white xl:hover:bg-gray-200 lg:hover:text-gray-400">Foundations</a>
                <a href="/about" class="text-left  mt-1 text-gray-400 lg:mt-0 px-3 py-1 hover:bg-gray-800 lg:px-2 lg:ml-2 lg:text-white lg:hover:text-gray-400">About NEHIH</a>
                <a href="/meet-team" class="text-left  mt-1 text-gray-400 lg:mt-0 px-3 py-1 hover:bg-gray-800 lg:px-2 lg:ml-2 lg:text-white lg:hover:text-gray-400">Meet The Team</a>
                <a href="/contact" class="text-left  mt-1 text-gray-400 lg:mt-0 px-3 py-1 hover:bg-gray-800 lg:px-2 lg:ml-2 lg:text-white lg:hover:text-gray-400">Contact Us</a>
                <a href="#" class="text-left lg:hidden block  mt-1 text-gray-400 lg:mt-0 px-3 py-1 hover:bg-gray-800 lg:px-2 lg:ml-2 lg:text-white lg:hover:text-gray-400">Blog</a>
              </div>
              <div class="hidden lg:block lg:flex lg:items-center">
                <button @click="toggleDropdown" type="button" :class="[dropdownOpen ? 'sm:border-gray-700' : 'sm:border-gray-400']" class=" mx-3 px-3 pb-1 lg:text-white font-semibold border border-white rounded-full lg:flex lg:hover:bg-gray-800 lg:hover:text-gray-400  lg:items-center lg:justify-between lg:focus:outline-none">
                  <a href="#" class=" block mt-1">Services</a>
                  <svg 
                    class="w-4 h-4 mt-1 ml-1 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div :class="dropdownOpen ? 'sm:block': 'sm:hidden'" class="xl:z-50 mt-6">
                  <button @click="dropdownOpen = false" class=" hidden sm:block sm:fixed sm:opacity-0 sm:inset-0 sm:h-full sm:w-full sm:cursor-default"></button>
                <div 
                  class="mt-5 mr-5 sm:rounded-lg sm:bg-white sm:absolute sm:right-0 sm:w-72 sm:mt-3 sm:py-2 sm:shadow-xl xl:z-50">
                  <a href="/incubation" class=" block text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500">Incubation</a>
                  <a href="/neMakeAthon" class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-2 sm:hover:bg-indigo-500">Ne-makeathon</a>
                  <a href="/wcp" class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-2 sm:hover:bg-indigo-500">Women code Programme</a>
                  <a href="/consulting" class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-2 sm:hover:bg-indigo-500">3D lab</a>
                  <a href="/workspaces" class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-2 sm:hover:bg-indigo-500">Co-Working Space</a>
          </div>

          </div>
              </div>
            </div>
        </div>
      </nav>
  </header> 
</template>

<script>
  export default {
    data (){
        return{
            isOpen:false,
            dropdownOpen:false
        }
    },
    mounted() {
      const onEscape =(e)=>{
        if (!this.dropdownOpen || e.key !== "Escape"){
          return
        }
        this.dropdownOpen = false
      }
      document.addEventListener('keydown', onEscape)
      this.$on('hook:destroyed', ()=>{
        document.removeEventListener('keydown', onEscape)
      })
    },
    methods: {
        toggle(){
            this.isOpen = !this.isOpen
        },
        toggleDropdown(){
            this.dropdownOpen = !this.dropdownOpen
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
