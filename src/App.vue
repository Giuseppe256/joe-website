<template>
  <div class="mt-0" style="min-height: 100vh;" id="app">
    <div class="mx-0 px-0 pt-0">
      <NavBar />
    </div>
    <router-view style="padding-top: 56px; padding-bottom: 8vh;" />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
    <Footer style="position: fixed; bottom: 0; width: 100vw;" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #DCDCDC;
  margin-top: 60px;
  background-color: #1c1e21;
}
.pageHeader {
  margin-top: 8px;
}
.cardWidth {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
