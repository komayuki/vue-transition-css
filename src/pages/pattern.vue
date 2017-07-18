<template lang="html">
  <div>
    <div class="container">
      <h2>Demo</h2>
      <ul>
        <li>
          <router-link to="/list">todo list</router-link>
        </li>
      </ul>
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
</style>
