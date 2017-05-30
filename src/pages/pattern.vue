<template lang="html">
  <div>
    <div class="container">
      <h2 class="h2">Transition Pattern</h2>
      <div class="item">
        <button @click="start('isJump')">Jump</button>
        <transition name="jump">
          <div class="block" v-if="isJump"></div>
        </transition>
        <transition name="jump">
          <div class="text" v-if="isJump">Jump</div>
        </transition>
      </div>
      <div class="item">
        <button @click="start('isFade')">Fade</button>
        <transition name="fade">
          <div class="block block-fade" v-if="isFade"></div>
        </transition>
        <transition name="fade">
          <div class="text" v-if="isFade">Fade</div>
        </transition>
      </div>

      <h3>Slide</h3>
      <div class="item">
        <button @click="start('isSlideLeft')">SlideLeft</button>
        <transition name="slide-left">
          <div class="block" v-if="isSlideLeft"></div>
        </transition>
        <transition name="slide-left">
          <div class="text" v-if="isSlideLeft">SlideLeft</div>
        </transition>
      </div>
      <div class="item">
        <button @click="start('isSlideRight')">SlidRight</button>
        <transition name="slide-right">
          <div class="block" v-if="isSlideRight"></div>
        </transition>
        <transition name="slide-right">
          <div class="text" v-if="isSlideRight">SlideRight</div>
        </transition>
      </div>

      <h3>Scale</h3>
      <div class="item">
        <button @click="start('isScaleUp')">ScaleUp</button>
        <transition name="scale-up">
          <div class="block block-fade" v-if="isScaleUp"></div>
        </transition>
        <transition name="scale-up">
          <div class="text" v-if="isScaleUp">ScaleUp</div>
        </transition>
      </div>
      <div class="item">
        <button @click="start('isScaleDown')">ScaleDown</button>
        <transition name="scale-down">
          <div class="block block-fade" v-if="isScaleDown"></div>
        </transition>
        <transition name="scale-down">
          <div class="text" v-if="isScaleDown">ScaleDown</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isJump: false,
      isFade: false,
      isSlideLeft: false,
      isSlideRight: false,
      isScaleUp: false,
      isScaleDown: false,
    }
  },
  methods: {
    start (target) {
      if (this[target]) return
      this[target] = true
      setTimeout(() => { this[target] = false }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.h2{
  margin: 40px 0;
}
.item{
  height: 100px;
  margin-bottom: 40px;
  vertical-align: top;
}
.block{
  width: 100px;
  height: 100px;
  margin: 0 32px 16px 32px;
  display: inline-block;
  vertical-align: top;
  background: #42b983;
}
.text{
  display: inline-block;
}
button{
  width: 100px;
  padding: 8px 16px;
  font-size: 14px;
  background: #fff;
  border: solid 1px #dcdcdc;
  margin-right: 20px;
  vertical-align: top;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
}
button:hover{
  box-shadow: none;
}
</style>
