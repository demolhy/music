<template>
  <div class="footer">
    <div class="player_box" @click="showBox">
      <div class="left_box">
        <div class="pic">
          <img :src="songItem.al.picUrl" alt="" />
        </div>
        <div class="text">
          <div class="title" v-if="songItem">
            {{ songItem.name }}<span>- {{ songItem.ar[0].name }}</span>
          </div>
          <div class="time">{{ playTime }} / {{ allTime }}</div>
        </div>
      </div>
      <!-- <aplayer
        v-if="isShow"
        preload="none"
        ref="videoPlayer"
        :narrow="false"
        theme="#c62f2f"
        :music="musics"
        :list="songs"
      >
      </aplayer> -->
      <audio
        :id="songId"
        ref="videoPlayer"
        :src="url"
        style="display:none"
      ></audio>
    </div>
    <div class="play_icon">
      <i @click="next" class="icon1 iconfont icon-xiayishou1"></i>
      <i
        v-if="musicStute"
        @click.stop="pauseing"
        class="iconfont icon3 icon-zantingtingzhi"
      ></i>
      <i
        v-if="!musicStute"
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
import { musicSrc, musicDetail } from "../api/api";
import { mapState } from "vuex";

export default {
  components: {
    Aplayer,
  },
  data() {
    return {
      musicStute: false,
      ms: false,
      isShow: false,
      // songId: this.$store.state.srcId,
      url:
        "http://m801.music.126.net/20210507163032/d3e7e2d476577c88537798d527757cbd/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8718776193/2fca/549f/ed71/52c6a28660443435ffbd30567d75e8f6.mp3",
      songItem: {
        name: "宝贝",
        al: {
          picUrl:
            "http://p2.music.126.net/JGN80JTxwxWScbfsAyVCIg==/3311729030827266.jpg?param=130y130",
        },
        ar: [
          {
            name: "张悬",
          },
        ],
      },
      allTime: "",
      playTime: "00:00",
    };
  },
  created() {
    // this.songId = this.$store.state.srcId
  },
  mounted() {
    // this.songId=this.$store.state.srcId
  },
  computed: {
    ...mapState({
      songId: "srcId",
    }),
  },
  watch: {
    songId(val, oldVal) {
      // console.log("watch:", val, oldVal);
      let idsData = {
        ids: val,
      };
      let data = {
        id: val,
      };
      musicDetail(idsData).then((res) => {
        console.log(res);
        this.songItem = res.songs[0];
      });
      musicSrc(data).then((res) => {
        console.log(res.data[0].url);
        this.url = res.data[0].url;
        this.musicStute = true;
        setTimeout(() => {
          let data = this.$refs.videoPlayer.duration;
          this.allTime = this.time(data);
          this.$refs.videoPlayer.play();
          // console.log("bofang");
        }, 2000);
        // this.$store.commit("changeSrc", res.data[0].url);
      });
    },
  },
  mounted() {
    let data = {
      id: this.songId,
    };
    musicSrc(data).then((res) => {
      console.log(res.data[0].url);
      this.url = res.data[0].url;
      // this.$store.commit("changeSrc", res.data[0].url);
    });
  },
  methods: {
    // 下一首
    next() {
      // this.$refs.videoPlayer.pause();

      this.url =
        "http://m701.music.126.net/20210507184743/5cccaaba3f049db26b8c03f3ebad72fc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8698723562/a8df/92f7/6c9a/eb4cceb24d8b642f0dfe72ee4e020537.mp3";
      setTimeout(() => {
        this.$refs.videoPlayer.play();
        // console.log("bofang");
      }, 2000);
    },
    // 播放
    playing() {
      let data = this.$refs.videoPlayer.duration;

      this.allTime = this.time(data);
      this.$refs.videoPlayer.play();
      this.musicStute = !this.musicStute;
    },
    // 暂停
    pauseing() {
      this.$refs.videoPlayer.pause();
      this.musicStute = !this.musicStute;
    },
    // 展开详情
    showBox() {
      console.log(213);
      // this.$bus.$emit("show");
    },
    time(data) {
      let s;
      let minutes = parseInt(data / 60);
      let seconds = parseInt(data - minutes * 60);
      s =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);
      console.log(s);
      return s;
    },
  },
};
</script>

<style scoped lang="scss">
.player_box {
  width: 100%;
  padding: 0 15px;
  .left_box {
    display: flex;
    align-items: center;
    .pic {
      width: 38px;
      height: 38px;
      border-radius: 6px;
      margin-right: 10px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
      &:hover::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 10;
      }
      &:hover::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
        background-image: url("../assets/top.png");
        background-size: 100% 100%;
        width: 20px;
        height: 20px;
      }
    }
    .title {
      font-size: 13px;
      color: #333;
      span {
        margin-left: 10px;
        color: #999;
        font-size: 12px;
      }
    }
    .time {
      color: #999;
      font-size: 12px;
      margin-top: 5px;
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: 50px;
  z-index: 9999;
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

// /deep/ .aplayer-pic {
//   width: 40px;
//   height: 40px;
//   margin-left: 10px;
//   border-radius: 4px;
// }
// /deep/ .aplayer {
//   background: none;
//   margin: 0;
//   box-shadow: none;
// }
// /deep/ .aplayer.aplayer-narrow {
//   width: 100%;
// }
// /deep/ .aplayer {
//   position: initial;
//   width: 100%;
// }
// /deep/ .aplayer-controller {
//   position: inherit;
// }
// /deep/ .aplayer-bar-wrap {
//   position: absolute;
//   width: 100%;
//   bottom: 55px;
//   left: 0;
// }
// /deep/ .aplayer-controller .aplayer-time {
//   flex: 1;
//   justify-content: flex-end;
// }
// /deep/ .aplayer .aplayer-body {
//   align-items: center;
// }
// /deep/ .aplayer .aplayer-body .aplayer-info {
//   overflow: initial;
// }
// /deep/ .aplayer .aplayer-body .aplayer-info .aplayer-music {
//   flex-grow: initial;
//   padding-bottom: 7px;
// }
// /deep/ .aplayer-time-inner {
//   position: absolute;
//   left: 0;
//   top: 0px;
// }
// /deep/ .aplayer-icon {
//   width: 20px;
//   height: 20px;
//   margin-top: -27px;
//   margin-right: 10px;
// }
// /deep/ .aplayer-pic .aplayer-play .aplayer-icon-play,
// /deep/ .aplayer-pic .aplayer-pause .aplayer-icon-pause {
//   top: 30px;
// }
// /deep/ .aplayer-pic .aplayer-pause .aplayer-icon-pause {
//   top: 29px;
// }
// /deep/ .aplayer-volume-wrap .aplayer-volume-bar-wrap:after {
//   content: none;
//   // width: 27px;
// }
// /deep/ .aplayer-bar-wrap .aplayer-bar {
//   background: #eee;
//   height: 1px;
// }
// /deep/ .aplayer-bar-wrap .aplayer-bar .aplayer-loaded {
//   height: 1px;
//   background: #ccc;
// }
</style>
