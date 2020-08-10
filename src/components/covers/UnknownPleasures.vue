<template>
  <div class='cover'>
    <div>JOY DIVISION · UNKNOWN PLEASURES</div>
    <div class='unknown-pleasure-canvas'></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import p5 from 'p5'
import { mapState } from 'vuex'

export default Vue.extend({
  data () {
    return {
      instance: p5,
      options: {
        autoplay: true
      }
    }
  },
  methods: {
    createCanvas () {
      const sketch = function (p: p5) {
        let f = 0

        p.setup = function () {
          const canvas = p.createCanvas(
            window.innerWidth * 0.3,
            window.innerHeight * 0.3
          )
          document.querySelector('.unknown-pleasure-canvas')?.appendChild(canvas.elt)
          p.frameRate(60)
        }

        p.draw = function () {
          f++

          p.background('#121212')
          p.fill('#121212')
          p.stroke(255)

          for (let y = 100; y < p.height; y += 5) {
            p.beginShape()
            let x = 0
            for (x = 0; x < p.width; ++x) {
              p.vertex(x, y - (80 / (1 + p.pow(x - p.width / 2, 4) / 8e6)) * p.noise(x / 30 + f / 50 + y))
            }
            p.vertex(x, 1e4)
            p.endShape()
          }
        }
      }
      new p5(sketch)
    }
  },
  mounted () {
    this.createCanvas()
  },
  computed: {
    ...mapState(['playing'])
  }
})
</script>

<style lang='scss'>
.unknown-pleasure-canvas {
  padding: 0;
  margin: 0;
}

div.cover {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
