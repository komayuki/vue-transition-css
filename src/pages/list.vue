<template lang="html">
  <div class="container">
    <h2>DEMO List</h2>
    <button @click="reset">Reset list</button>
    
    <ul>
      <transition-group name="slide-left">
        <li v-for="(item, index) in list" :key="item" @click="remove(index)"> {{item}} </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
const defaultList = ['Star Platinum', 'Silver Chariot', 'Magicians Red', 'Hermit Purple', 'The Fool']
export default {
  name: 'page-list',
  data () {
    return {
      patterns: ['jump', 'fade', 'slide-left', 'scale-up', 'scale-down'],
      list: cloneDeep(defaultList)
    }
  },
  methods: {
    reset () {
      this.list = cloneDeep(defaultList)
    },
    remove (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="css">
button{
  margin-bottom: 16px;
}
ul{
  margin: 0 0 32px 0;
  padding: 0;
  list-style: none;
  color: #666;
}
ul li{
  border: solid 1px #dcdcdc;
  padding: 16px;
  margin-bottom: -1px;
  cursor: pointer;
}
</style>
