<template>
  <div>
    <SectionTitle :title="sectionTitle" />
    <div class="content-wrapper">
      <SectionHeader :title="houseName" />
      <p class="descr">
        Houses recommended by our partners that have been <br />
        curated to become the home of your dreams!
      </p>
      <h5 class="title">House Detail</h5>
      <div class="show-room col-4">
        <ShowRooms :room="item" v-for="(item, index) in onHouseRooms" :key="index"/>
      </div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle";
import SectionHeader from "./SectionHeader";
import ShowRooms from "./ShowRooms";
import { mapGetters } from "vuex";

export default {
  neme: "TourSection",
  components: {
    SectionTitle,
    SectionHeader,
    ShowRooms,
  },
  data() {
    return {
      sectionTitle: "Ready to Sell!",
      houseName: "Let’s tour and see our house!",
    };
  },
  computed: {
    ...mapGetters("estate", ["onHouseRooms"]),
  },
};
</script>

<style scoped>
.descr {
  color: #626687;
  opacity: 0.75;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}
.title {
  color: #1b1c57;
  opacity: 0.75;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
}
.show-room {
  display: flex;
  flex-wrap: wrap;


}
.bar {
  margin-top: 12px;
  margin-bottom: 32px;
  width: 440px;
  height: 2px;
  background: #F0F3FD;
}
</style>
