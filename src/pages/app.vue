<template lang="html">
  <div>
    <div class="header">
      <h1 class="h1">
        <a href="/">vue-transition-css</a>
      </h1>
      <p>
        <span style="margin-right: 16px">CSS template</span>
        <iframe src="https://ghbtns.com/github-btn.html?user=komayuki&repo=vue-transition-css&type=star&count=true"
        frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
* {
  color: #666;
  box-sizing: border-box;
}
.header{
  text-align: center;
  margin: 0;
  padding: 16px;
  position: relative;
}
.header > .h1 > a{
  color: #393939;
  text-decoration: none;
}
nav{

}
nav a{
  text-decoration: none;
  margin-left: 16px;
}

</style>
