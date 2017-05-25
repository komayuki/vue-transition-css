<template lang="html">
  <div class="container">
    <h2>DEMO List</h2>
    <div class="effects">
      <template v-for="item in patterns">
        <label>
          <input type="radio" :value="item.t" v-model="currentEffect">
          {{item.name}}
        </label>
      </template>
    </div>
    <button @click="reset">Reset list</button>
    <ul>
      <transition-group :name="currentEffect">
        <li v-for="(item, index) in list" :key="item" @click="remove(index)"> {{item}} </li>
      </transition-group>
    </ul>
    <div>
      <input type="text" v-model="input">
      <button @click="add">Add</button>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
const defaultList = ['Star Platinum', 'Silver Chariot', 'Magicians Red', 'Hermit Purple', 'The Fool']
export default {
  name: 'page-list',
  data () {
    return {
      currentEffect: 'jump',
      input: '',
      patterns: [
        {name: 'Jump', t: 'jump'},
        {name: 'Fade', t: 'fade'},
        {name: 'SlideLeft', t: 'slide-left'},
        {name: 'SlideRight', t: 'slide-right'},
        {name: 'ScaleUp', t: 'scale-up'},
        {name: 'ScaleDown', t: 'scale-down'},
      ],
      list: cloneDeep(defaultList)
    }
  },
  methods: {
    reset () {
      this.list = cloneDeep(defaultList)
    },
    add () {
      if (this.input === '') {
        return
      }
      this.list.push(this.input)
      this.input = ""
    },
    remove (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="css">
input[type=text] {
  padding: 8px;
  font-size: 18px;
}
button{
  margin-bottom: 16px;
}
.effects{
  margin-bottom: 10px;
}
.effects > label{
  margin-right: 10px;
  display: inline-block;
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
