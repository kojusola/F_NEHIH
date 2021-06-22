<template>
  <div class="home">
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Body from '@/components/Body.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Body
  }
}
</script>
