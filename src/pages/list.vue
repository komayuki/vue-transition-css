<template lang="html">
  <div class="container">
    <h2>DEMO</h2>
    <h3>Effects</h3>
    <div class="effects">
      <template v-for="item in patterns">
        <label>
          <input type="radio" :value="item.t" v-model="currentEffect">
          {{item.name}}
        </label>
      </template>
    </div>

    <h3>Type</h3>
    <div>
      <label>
        <input type="radio" value="list" v-model="type">
        List
      </label>
      <label>
        <input type="radio" value="panel" v-model="type">
        Panel
      </label>
    </div>
    <h3>Preview</h3>

    <div class="form">
      <input type="text" v-model="input">
      <button @click="add" class="add">Add</button>
      <button @click="reset">Reset list</button>
    </div>
    <div class="preview">
      <ul class="ul">
        <transition-group :name="currentEffect">
          <li v-for="(item, index) in list" :key="item" @click="remove(index)" :class="type"> {{item}} </li>
        </transition-group>
      </ul>
      <div class="clear"></div>
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
      type: "list",
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
  watch: {
    'type' () {
      this.list = []
      let removeList = new Promise((resolve, reject) => {
	this.list = []
	setTimeout(() => {
	  resolve()  
	}, 250)
      })

      removeList.then(() => {
	this.list = cloneDeep(defaultList)	
      })
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
    },
  }
}
</script>

<style lang="css" scoped>
.form{
  margin-bottom: 16px;
}
input[type=text] {
  padding: 6px;
  margin-bottom: 6px;
  font-size: 18px;
  width: 100%;
  border-radius: 3px;
  border: solid 1px #dcdcdc;
}
button{
  width: 100px;
  text-align: center;
  padding: 10px 0;
  border-radius: 3px;
  background: #fff;
  border: solid 1px #dcdcdc;
  font-size: 14px;
}
button.add{
  background: #42b983;
  color: #fff;
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
  clear: both;
}
ul li{
  font-size: 13px;
}
.list{
  border: solid 1px #dcdcdc;
  padding: 16px;
  margin-bottom: -1px;
  cursor: pointer;
  background: #fff;
}
.panel{
  width: 130px;
  padding: 50px 0;
  text-align: center;
  border: solid 1px #dcdcdc;
  display: inline-block;
  margin-bottom: 16px;
  margin-right: 16px;
}
.preview{
  min-height: 500px;
}
.clear{
  clear: both;
}
</style>
