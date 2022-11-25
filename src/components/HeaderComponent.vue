<template>
  <header class="header">

    <router-link to="/" class="header-logo">
      <img class="pr-14" src="@/assets/logo.svg" alt="logo">
      <img src="@/assets/Hounter.png" alt="logo">
    </router-link>

    <div class="header-buttons">
      <HeaderButton title="About Us" />
      <HeaderButton title="Article" />
      <!-- <HeaderButton title="Property">
        <template #after-icon>
          <img class="after-icon" src="@/assets/chevron-down.svg" alt="">
        </template>
      </HeaderButton> -->
      <b-dropdown class="header-dropdown" :no-caret="true">
        <template #button-content>
          Property
          <img class="after-icon" src="@/assets/chevron-down.svg" alt=""/>
        </template>
        <b-dropdown-item @click="filterEstate('house')">House</b-dropdown-item>
        <b-dropdown-item @click="filterEstate('villa')">Villa</b-dropdown-item>
        <b-dropdown-item @click="filterEstate('appartment')">Appartment</b-dropdown-item>
      </b-dropdown>
    </div>
    <button class="button-sing">Sign Up!</button>



  </header>
</template>

<script>
import HeaderButton from './HeaderButton';

export default {
  name: 'HeaderComponent',
  components: {
    HeaderButton,
  },
  methods: {
    filterEstate(str) {
      console.log(str);
    }
  }
}
</script>




<style scoped>
.header {
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.pr-14 {
  padding-right: 14px;
}

.header-buttons {
  margin: 0 56px 0 auto;
  display: flex;
}

.button-sing {
  background: #D1FAE5;
  border-radius: 32px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #047857;
  border: none;

}
</style>