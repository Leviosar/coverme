<template>
  <div class="global-player">
    <div class="play-button">
      <v-icon :color="buttonColor" size="50" v-if="playing" v-on:click="togglePlay(true)">mdi-pause</v-icon>
      <v-icon :color="buttonColor" size="50" v-else v-on:click="togglePlay(false)">mdi-play</v-icon>
    </div>

    <vue-plyr ref="plyr" class="hidden-player" :options="options">
      <div data-plyr-provider="youtube" :data-plyr-embed-id="videoId"></div>
    </vue-plyr>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data: function () {
    return {
      options: {
        autoplay: true
      }
    }
  },
  methods: {
    togglePlay (condition) {
      if (condition) {
        this.$refs.plyr.player.pause()
        this.$store.dispatch('pause')
      } else {
        this.$refs.plyr.player.play()
        this.$store.dispatch('play')
      }
    }
  },
  mounted () {
    this.$refs.plyr.player.play()
  },
  computed: {
    ...mapState(['playing']),
    ...mapState(['buttonColor']),
    ...mapState(['videoId'])
  }
})
</script>

<style>
  div.play-button {
    position: absolute;
    right: 30px;
    top: 30px;
  }

  .hidden-player {
    display: none;
  }
</style>
