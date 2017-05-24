<template lang="html">
  <div>
    <div class="container">
      <h1 class="h1">vue-transition-css</h1>
      <h2>Transition Pattern</h2>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isJump: false,
      isFade: false
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
.h1{
  text-align: center;
}
.container{
  width: 800px;
  margin: 0 auto;
}
.item{
  height: 100px;
  margin-bottom: 32px;
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
