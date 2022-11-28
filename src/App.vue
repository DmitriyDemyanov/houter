<template>
  <div  class="app">
    <BContainer class="position-relative">
      <HeaderComponent/>
      <!-- <div class="mb-3 mt-3">
        <router-link class="p-2" to="/">Главная</router-link>
      </div> -->
      <router-view class="main-view"></router-view>

    </BContainer>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  min-height: 100vh;
  background: linear-gradient(135deg, #82F7FF 0%, #82F7FF 5%, #82FFD2 10%,transparent 17%);
}
</style>
