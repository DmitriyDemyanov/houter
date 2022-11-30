<template>
  <section>

    <SectionTitle :title='onSectionTitle' />

    <div class='content-wrapper'>

      <SectionHeader :title='onHouseName' />

      <div class='wraper d-flex'>
        <div v-for='(item, index) in houseList' :key='index'>
          <EstateItem :house='item'/>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import SectionHeader from '@/components/SectionHeader';
import EstateItem from '@/components/EstateItem';
import { mapGetters } from 'vuex';

export default {
  name: 'EstateSection',

  computed: {
    ...mapGetters('estate',['houseList','onSectionTitle','onHouseName'])
  },


  components: {
    SectionTitle,
    SectionHeader,
    EstateItem,
  },
};
</script>

<style>

</style>