<template>
  <div class="videobox">
    <!-- <video autoplay controls name="media">
      <source :src="$store.state.src" />
    </video> -->
    <aplayer
      autoplay
      :narrow="false"
      :music="{
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'http://m801.music.126.net/20210424171321/b281223a125855146ac754ef83e3e2ae/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8604584503/4604/aaa6/84ae/097b9325f5d4461b68b2a8ab7aa3dbe1.mp3',
        pic: 'http://p1.music.126.net/Cld-gajV3YescBzt1rWWbw==/109951165909496721.jpg',
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer',
      }"
    >
    </aplayer>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  props: {},
  components: {
    Aplayer,
  },
  data() {
    return {
      musicSrc: this.$store.state.src,
    };
  },
  created() {
    this.musicSrc = 1;
  },
  watch: {
    musicSrc(val, oldVal) {
      console.log(val, oldVal);
    },
  },
};
</script>

<style>
    .videobox{
        position: fixed;
        left: 0;
        bottom: 51px;
        z-index: 999;
    }
</style>
