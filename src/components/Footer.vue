<template>
  <div class="footer">
    <aplayer
      autoplay
      ref="videoPlayer"
      :narrow="false"
      theme="#c62f2f"
      @play="playing($event)"
      @pause="pauseing($event)"
      :music="{
        title: 'Preparation',
        artist: 'Hans Zimmer/Richard Harvey',
        src:
          'http://m801.music.126.net/20210426231953/b5d10459f2da1852d5b32f748ad5c789/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8580152693/d356/455e/7b8d/4e64e654387559e89848b065b8e27d67.mp3',
        pic:
          'http://p1.music.126.net/Cld-gajV3YescBzt1rWWbw==/109951165909496721.jpg',
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer',
      }"
    >
    </aplayer>
    <div class="play_icon">
      <i class="icon1 iconfont icon-xiayishou1"></i>
      <i 
        @click.stop="pauseing"
        class="iconfont icon3 icon-zantingtingzhi"
      ></i>
      <i 
        @click.stop="playing"
        class="iconfont icon2 icon-bofang"
      ></i>
      <i class="icon1 iconfont icon-xiayishou"></i>
    </div>
    <!-- <div class="progress">
      <span>00:00</span>
      <p>
        <i></i>
      </p>
      <span>04:00</span>
      <div class="volume">
        <i class="iconfont icon-yinliang"></i>
        <p></p>
      </div>
    </div> -->
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import Aplayer from "vue-aplayer";
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  components: {
    Aplayer,
  },
  data() {
    return {
      musicStute: false,
      ms: false
    };
  },
  methods: {
    playing() {
      const player = this.$refs.videoPlayer.audio;
      console.log(this.$refs.videoPlayer);
      player.play();
      this.musicStute = !this.musicStute;
    },
    pauseing(){
      const player = this.$refs.videoPlayer.audio;
      console.log(this.$refs.videoPlayer);
      player.pause();
      this.musicStute = !this.musicStute;
    }
  },
  watch:{
    musicStute(val,oldVal){
      console.log(val,oldVal);
      this.ms = !this.ms
    }
  },
  computed: {
    player() {
      console.log(312312);
      return this.$refs.videoPlayer.audio;
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: 50px;
  z-index: 10;
  display: flex;
  align-items: center;
  border-top: 2px solid #eee;
  padding: 0px;
  .play_icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 20px;
    i {
      background: #ff3b3b;
      color: #fff;
      border-radius: 50%;
      padding: 8px;
      text-align: center;
      margin: 0 10px;
      cursor: pointer;
    }
    .icon1 {
      padding: 6px;
      background: none;
      color: #ff3b3b;
    }
    .icon2 {
      padding: 8px 10px;
      &::before {
        margin-right: -4px;
      }
    }
  }
  .progress {
    display: flex;
    align-items: center;
    margin-left: 30px;
    span {
      font-size: 12px;
      color: #666;
    }
    p {
      width: 70vw;
      height: 4px;
      background: #ccc;
      margin: 0 10px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      i {
        width: 10px;
        height: 10px;
        display: block;
        background: #fff;
        border-radius: 50%;
        position: relative;
        border: 1px solid #ccc;
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: red;
          width: 4px;
          height: 4px;
          border-radius: 50%;
        }
      }
    }
    .volume {
      margin-left: 20px;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 14px;
        color: #666;
      }
      p {
        width: 5vw;
        margin: 0 5px;
      }
    }
  }
}
/deep/ .aplayer-pic {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 4px;
}
/deep/ .aplayer {
  background: none;
  margin: 0;
  box-shadow: none;
}
/deep/ .aplayer.aplayer-narrow {
  width: 100%;
}
/deep/ .aplayer {
  position: initial;
  width: 100%;
}
/deep/ .aplayer-controller {
  position: inherit;
}
/deep/ .aplayer-bar-wrap {
  position: absolute;
  width: 100%;
  bottom: 55px;
  left: 0;
}
/deep/ .aplayer-controller .aplayer-time {
  flex: 1;
  justify-content: flex-end;
}
/deep/ .aplayer .aplayer-body {
  align-items: center;
}
/deep/ .aplayer .aplayer-body .aplayer-info {
  overflow: initial;
}
/deep/ .aplayer .aplayer-body .aplayer-info .aplayer-music {
  flex-grow: initial;
  padding-bottom: 7px;
}
/deep/ .aplayer-time-inner {
  position: absolute;
  left: 0;
  top: 0px;
}
/deep/ .aplayer-icon {
  width: 20px;
  height: 20px;
  margin-top: -27px;
  margin-right: 10px;
}
/deep/ .aplayer-pic .aplayer-play .aplayer-icon-play,
/deep/ .aplayer-pic .aplayer-pause .aplayer-icon-pause {
  top: 30px;
}
/deep/ .aplayer-pic .aplayer-pause .aplayer-icon-pause {
  top: 29px;
}
/deep/ .aplayer-volume-wrap .aplayer-volume-bar-wrap:after {
  content: none;
  // width: 27px;
}
/deep/ .aplayer-bar-wrap .aplayer-bar {
  background: #eee;
  height: 1px;
}
/deep/ .aplayer-bar-wrap .aplayer-bar .aplayer-loaded {
  height: 1px;
  background: #ccc;
}
</style>
