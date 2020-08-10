<template>
  <div class="mt-0" id="app">
    <div class="mx-0 px-0 pt-0">
      <NavBar />
    </div>
    <router-view />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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
