import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playing: true,
    player: null,
    buttonColor: '#ffffff',
    videoId: 'Ax5sAXcUfyU'
  },
  mutations: {
    pause (state) {
      state.playing = false
    },
    play (state) {
      state.playing = true
    },
    changeButtonColor (state, newColor) {
      state.buttonColor = newColor
    },
    changeVideoId (state, newId) {
      state.videoId = newId
    }
  },
  actions: {
    pause (context) {
      context.commit('pause')
    },
    play (context) {
      context.commit('play')
    },
    changeButtonColor (context, newColor) {
      context.commit('changeButtonColor', newColor)
    },
    changeVideoId (context, newId) {
      context.commit('changeVideoId', newId)
    }
  },
  modules: {
  }
})
