<template>
  <v-carousel-item :style="{'background-color': this.backgroundColor}">
    <child />
  </v-carousel-item>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  props: {
    backgroundColor: String,
    child: Function
  },
  beforeMount () {
    if (this.$options.components !== undefined) {
      this.$options.components.child = this.child
    }
  }
})
</script>
