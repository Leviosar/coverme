<template>
  <v-app>
    <v-main>
      <CoverCarousel/>
      <GlobalPlayer/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import CoverCarousel from './components/CoverCarousel.vue'
import GlobalPlayer from './components/GlobalPlayer.vue'

export default Vue.extend({
  name: 'App',

  components: {
    CoverCarousel,
    GlobalPlayer
  },

  data: () => ({
    //
  })
})
</script>
