<template lang="html">
  <div>
    <div class="container">
      <h1 class="h1">vue-transition-css</h1>
      <div class="item">
        <button @click="start('isJump')">jump</button>
        <transition name="jump">
          <div class="block block-jump" v-if="isJump"></div>
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
      isJump: false
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
  width: 1000px;
  margin: 0 auto;
}
.block{
  width: 100px;
  height: 100px;
  margin: 0 0 16px 16px;
}
.block-jump{
  background-color: #FFA000;
}
button{
  background: #fff;
  border: solid 1px #dcdcdc;
}
</style>
