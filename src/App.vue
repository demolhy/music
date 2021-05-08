<template>
  <div id="app">
    <HeaderNav msg="hello" />
    <Left />
    <Footer />
    <Login></Login>
    <!-- <videoBox /> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import HeaderNav from "@/components/Header.vue";
import Left from "@/components/Left.vue";
import Footer from "@/components/Footer.vue";
import videoBox from "@/components/music.vue";
import Login from "@/components/Login.vue"
export default {
  components: {
    HeaderNav,
    Left,
    Footer,
    videoBox,
    Login
  }
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
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

h5,
h4,
h3,
h2,
h1,
p {
  margin: 0;
}

.box_content {
  position: absolute;
  top: 55px;
  left: 200px;
  // width: 100%;
  right: 0;
  height: 100%;
}
.content {
  margin: auto;
  margin-top: 20px;
  max-width: 1000px;
  overflow: hidden;
  margin-bottom: 10vh;
}
</style>
