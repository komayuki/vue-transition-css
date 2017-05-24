<template lang="html">
  <div>
    <div class="header">
      <nav>
        <router-link to="/">home</router-link>
        <router-link to="/list">list</router-link>
      </nav>
      <h1 class="h1">vue-transition-css</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.header{
  margin: 0;
  padding: 80px 0;
  background: #42b983;
  position: relative;
}
.header > .h1{
  text-align: center;
  color: #fff;
  font-size: 40px;
}
nav{
  position: absolute;
  top: 32px;
  right: 32px;
}
nav a{
  text-decoration: none;
  margin-left: 16px;
  color: #fff;
}

</style>
