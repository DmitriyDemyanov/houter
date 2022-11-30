<template>
  <div>
    <div class="wrap-visit d-flex align-items-center">
      <div>
        <img :src="require(`@/assets/${realtor.photo}`)" alt="photo" />
      </div>
      <div class="pl">
        <h4 class="fullname"> {{realtor.name}} {{realtor.secondname}}</h4>
        <h4 class="city"> {{realtor.city}} </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealtorHouse',
  props: {
    realtor: {
      type: Object,
      required: true,
    }
  }

}
</script>

<style scoped>
.fullname {
  margin: 0;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #0E1735;
}

.city {
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #888B97;
}

.pl {
  padding-left: 16px;
}
</style>