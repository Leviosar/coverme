<template>
  <div class='cover'>
    <div>PINK FLOYD · DARK SIDE OF THE MOON</div>
    <div class='dark-side-of-the-moon-canvas'></div>
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
        // const rainbowColors = [
        //   '#FF1807', '#FFAD00', '#FDFF00', '#33CA00', '#1293C5', '#5C30BD'
        // ]

        const drawAxis = function (p: p5) {
          p.stroke(50)
          p.line(-p.width / 2, 0, p.width / 2, 0)
          p.line(0, -p.height / 2, 0, p.height / 2)
        }

        p.setup = function () {
          const canvas = p.createCanvas(
            window.innerWidth * 0.6,
            window.innerHeight * 0.6
          )
          document.querySelector('.dark-side-of-the-moon-canvas')?.appendChild(canvas.elt)
          p.frameRate(60)
        }

        p.draw = function () {
          const givenSide = 300
          const originX = p.width / 2
          const originY = p.height / 2
          const mouseX = p.min(p.mouseX, p.width / 2)
          const mouseY = p.min(p.mouseY, p.height / 2 - (givenSide * (p.sqrt(3) / 4)))

          p.clear()

          p.translate(p.width / 2, p.height / 2)

          // Center triangle
          p.stroke(255)
          p.line(-200, 0, 200, 0)
          p.line(-200, 0, 0, -250)
          p.line(200, 0, 0, -250)

          p.stroke('#ff0000')
          p.line(mouseX - originX, mouseY - originY + (givenSide * (p.sqrt(3) / 4)), mouseX - originX - givenSide, mouseY - originY + (givenSide * (p.sqrt(3) / 4)))
          p.line(mouseX - originX, mouseY - originY, mouseX - originX, mouseY - originY + (givenSide * (p.sqrt(3) / 4)))
          p.line(mouseX - originX, mouseY - originY, mouseX - originX - givenSide, mouseY - originY + (givenSide * (p.sqrt(3) / 4)))

          drawAxis(p)

          p.translate(-p.width / 2, -p.height / 2)
        }
      }

      new p5(sketch)
    }
  },
  mounted () {
    this.createCanvas()
    this.$store.dispatch('changeVideoId', 'yXWSq5UyERo')
  },
  computed: {
    ...mapState(['playing'])
  }
})
</script>

<style lang='scss'>
.dark-side-of-the-moon-canvas {
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
