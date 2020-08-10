<template>
  <v-carousel height="100%">
    <CoverItem v-for="cover in covers" :key="cover.name" :backgroundColor="cover.backgroundColor" :child="cover.child"/>
  </v-carousel>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-types */

import Vue from 'vue'
import CoverItem from './CoverItem.vue'
import UnknowPleasures from './covers/UnknownPleasures.vue'
import DarkSideOfTheMoon from './covers/DarkSideOfTheMoon.vue'

interface Cover {
  child: Object;
  backgroundColor: String;
  name: String;
}

export default Vue.extend({
  name: 'CoverCarousel',
  components: {
    CoverItem
  },
  data: () => {
    const covers: Cover[] = [
      { name: 'Unknown Pleasures', child: UnknowPleasures, backgroundColor: '#121212' },
      { name: 'Dark Side of The Moon', child: DarkSideOfTheMoon, backgroundColor: '#000000' }
    ]

    return {
      covers
    }
  }
})
</script>
