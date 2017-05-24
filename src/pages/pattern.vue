<template lang="html">
  <div>
    <div class="container">
      <h2 class="h2">Transition Pattern</h2>
      <div class="item">
        <button @click="start('isJump')">Jump</button>
        <transition name="jump">
          <div class="block block-jump" v-if="isJump"></div>
        </transition>
      </div>
      <div class="item">
        <button @click="start('isFade')">Fade</button>
        <transition name="fade">
          <div class="block block-fade" v-if="isFade"></div>
        </transition>
      </div>
      <div class="item">
        <button @click="start('isSlideLeft')">SlideLeft</button>
        <transition name="slide-left">
          <div class="block block-fade" v-if="isSlideLeft"></div>
        </transition>
      </div>
      <div class="item">
        <button @click="start('isScaleUp')">ScaleUp</button>
        <transition name="scale-up">
          <div class="block block-fade" v-if="isScaleUp"></div>
        </transition>
      </div>
      <div class="item">
        <button @click="start('isScaleDown')">ScaleDown</button>
        <transition name="scale-down">
          <div class="block block-fade" v-if="isScaleDown"></div>
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
<style lang="scss">
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
  margin: 0 0 16px 16px;
  display: inline-block;
  vertical-align: top;
}
.block-jump{
  background-color: #FFA000;
}
.block-fade{
  background-color: #29B6F6;
}
button{
  width: 100px;
  padding: 16px;
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
