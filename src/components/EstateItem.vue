<template>

  <div class="mr">
    <div class="wrap-image">
      <img :src="require(`@/assets/${house.img}`)" alt="photo">

      <div class="icon" :class="color">
        <img :src="require(`@/assets/icon-${house.tag}.svg`)" alt="icon" />
        <span class="icon--text">{{tagText}}</span>
      </div>

    </div>
    <h3 class="title"> {{ house.name }} </h3>
    <h3 class="price"> {{ price }} </h3>

    <div v-for='(realtor, index) in house.realtors' :key='index'>

      <RealtorHouse :realtor='realtor' />


    </div>

  </div>

</template>

<script>

import RealtorHouse from '@/components/RealtorHouse';

export default {
  name: 'EstateItem',
  props: {
    house: {
      type: Object,
      required: true
    },
  },
  computed: {
    price() {
      const price = this.house.price.toString();
      let flag = 0;
      let res = "";
      for (let i = price.length - 1; i >= 0; i--) {
        if (flag === 3) {
          flag = 0;
          res = "." + res;
        }
        flag++;
        res = price[i] + res;
      }
      return `${this.house.currency} ${res}`;
    },
    tagText() {
      if (this.house.tag === "new") {
        return "new house";
      }
      return this.house.tag.replace("-", " ");
    },
    color() {
      const settings = {
        new:         "purple",
        popular:     "red",
        "best-deal": "green",
      };
      return settings[this.house.tag] || "default-color";
    }
  },
  components: {
    RealtorHouse,
  }

}
</script>

<style scoped>
.wrap-image {
  position: relative;
}

.icon {
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 0 18px;
  height: 34px;
  border-radius: 32px;
  display:flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
}

.icon--text {
  padding-left: 8px;
}

.title {
  margin: 24px 0 8px;
  font-style: normal;
  font-weight: bolder;
  font-size: 24px;
  line-height: 32px;
  color: #0E1735;
}

.price {
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #3C4563;
}
.mr {
  margin-right: 40px;
}
.red {
  background-color:  #FEE2E2;
  color: #EF4444;
}
.purple {
  background-color: #DBEAFE;
  color: #1D4ED8;
}
.green {
  background-color: #D1FAE5;
  color:  #047857;
}

.default-color {
  background-color: grey;
  color:#0E1735;
}
</style>