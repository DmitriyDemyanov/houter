<template>
  <BContainer>
    <HeaderComponent/>
    <!-- <div class="mb-3 mt-3">
      <router-link class="p-2" to="/">Главная</router-link>
    </div> -->
    <router-view class="main-view"></router-view>

  </BContainer>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
