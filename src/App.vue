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
  color: #2c3e50;
  margin-top: 60px;
}
.pageHeader {
  margin-top: 8px;
}
</style>
