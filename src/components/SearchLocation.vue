<template>
  <div class=" p-0">
    <b-input-group class="mt-3 position-relative input-main">
      <img class="pin" src="@/assets/pin.svg" alt="">
      <b-form-input placeholder="Search for the location you want!"></b-form-input>
      <b-button class="button-main">Search</b-button>
      <b-input-group-append>


      </b-input-group-append>
    </b-input-group>

  </div>

</template>

<script>
export default {
  name: 'SearchLocation'
}
</script>

<style scoped>
.pin {

  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  left: 27px;
}
.input-main {
  height: 56px;
}
.input-main >>> input {
  border-radius: 32px !important;
  padding: 0 120px 0 50px;
}
.input-group .btn.button-main {
  width: 109px;
  height: 48px;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right: 4px;
  background: #10B981;
  border-radius: 32px !important;
  z-index: 10;
}
</style>

