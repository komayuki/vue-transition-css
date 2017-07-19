<template lang="html">
  <div class="container">
    <h2>Modal</h2>
    <ul>
      <li>
        <a href="javascript:void(0)" @click="modalSlidedown = !modalSlidedown">slideDown</a>
      </li>
    </ul>
    <transition name="slide-left">
      <div v-if="modalSlidedown" class="modal">
        <div>modal</div>
        <p>modal demo</p>
        <button @click="modalSlidedown = !modalSlidedown">close</button>
      </div>
    </transition>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'page-form',
  data () {
    return {
      modalSlidedown: false,
    }
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
.modal{
  width: 350px;
  padding: 16px;
  background: #fff;
  border: solid 1px #dcdcdc;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 100px;
  left: 50%;
  margin-left: -125px;
}

</style>
