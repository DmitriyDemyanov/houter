<template>
  <section>

    <SectionTitle :title='onSectionTitle' />

    <div class='content-wrapper'>

      <SectionHeader :title='onHouseName'>
        <template #buttons>

          <MainButton :class="{'active': activeTab === text}" :title="text" v-for="(text, ind) in types" :key="ind">
            <template #icon>
              <img :src="require(`@/assets/${parseIcon(text)}.svg`)" alt="icon">
            </template>
          </MainButton>

        </template>
      </SectionHeader>

      <div class='wraper d-flex'>
        <div v-for='(item, index) in houseList' :key='index'>
          <EstateItem :house='item' />


        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import SectionHeader from '@/components/SectionHeader';
import EstateItem from '@/components/EstateItem';
import MainButton from './MainButton';
import { mapGetters } from 'vuex';

export default {
  name: 'EstateSection',

  components: {
    SectionTitle,
    SectionHeader,
    EstateItem,
    MainButton,
  },

  data() {
    return {
      activeTab: 'house'
    };
  },

  computed: {
    ...mapGetters('estate', ['houseList', 'onSectionTitle', 'onHouseName', 'types']),

  },

  methods: {
    parseIcon(text) {
      if (text === 'house') {
        return 'house';
      }
      if (text === 'villa') {
        return 'villa';
      }
      return 'apartment';
    }
  },

};
</script>

<style scoped>

</style>