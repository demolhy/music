<template>
  <div id="app">
    <HeaderNav msg="hello" />
    <Left></Left>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import HeaderNav from '@/components/Header.vue'
import Left from '@/components/Left.vue'

export default {
  components:{
    HeaderNav,
    Left
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: "宋体","黑体"
}
// #app {

// }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

img {
  vertical-align: middle;
}


</style>
