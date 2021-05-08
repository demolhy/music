<template>
  <div class="ani_box" :class="boxShow === true ? 'on' : ''">
    <!-- <div
      class="bg-blur"
      :style="'background: url(' + songData.al.picUrl + ')'"
    ></div> -->
    <div class="content">
      <div class="ms" v-if="songData.al">
        <div class="lf">
          <!-- <img src="../assets/singlecover.png" alt=""> -->
          <img class="cover" :src="songData.al.picUrl" alt="" />
          <div class="m_btn">
            <div class="btn"><i class="iconfont icon-xinaixin"></i>喜欢</div>
            <div class="btn"><i class="iconfont icon-shoucang"></i>收藏</div>
            <div class="btn"><i class="iconfont icon-xiazai1"></i>下载</div>
            <div class="btn"><i class="iconfont icon-fenxiang"></i>分享</div>
          </div>
        </div>
        <div class="rg">
          <div class="title">{{ songData.name }}</div>
          <ul class="gs">
            <li>
              专辑：<span>{{ songData.al.name }}</span>
            </li>
            <li>
              歌手：<span>{{ songData.ar[0].name }}</span>
            </li>
          </ul>
          <div class="lyric">
            <ul v-if="objLyric">
              <li
                v-for="(item, index) in objLyric"
                :key="index"
                :style="{ color: Lyindex === index ? '#186dc5' : '#333' }"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="comment">
        <div class="title">听友评论<span>(已有{{total + 1}}条评论)</span></div>
        <div class="com_input">
          <input type="text" placeholder="发表评论" />
          <button>发送</button>
        </div>
        <div class="hot_com" >
          <div class="list" v-for="(item,index) in commentList" :key="index">
            <div class="lf">
              <img :src="item.user.avatarUrl" alt="" />
            </div>
            <div class="rg">
              <div class="com">
                <span class="name">{{item.user.nickname}}:</span>
                <span
                  >{{item.content}}</span
                >
              </div>
              <div class="btm">
                <div class="time">2021年2月10日 10:10</div>
                <div class="btn">
                  <div class="btn1">
                    <i class="iconfont icon-xinaixin"></i><span>({{item.likedCount}})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="base">到底啦~</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { musicDetail, comment, lyric } from "../api/api";
export default {
  name: "Details",
  data() {
    return {
      lyric: '',
      img: "",
      objLyric: [],
      Lyindex: 0,
      boxShow: false,
      songId: 347230,
      songData: [],
      commentList:[],
      total: '',
    };
  },
  created() {
    this.boxShow = true
  },
  mounted() {
    this.songId = this.$route.params.id
    this.$bus.$on("show", this.changeClass);
    this.getSongDetail();
    
  },
  methods: {
    getSongDetail() {
      let data = {
        ids: this.songId
      };
      let dataComment = {
        type: 0,
        id: this.songId
      }
      let dataLyric = {
        id: this.songId
      }
      lyric(dataLyric).then(res=>{
        // console.log(res.lrc.lyric);
        this.lyric = res.lrc.lyric
        this.start();
      })
      musicDetail(data).then((res) => {
        // console.log(res.songs[0]);
        this.songData = res.songs[0];
      });
      comment(dataComment).then(res=>{
        console.log(res);
        this.commentList = res.hotComments
        this.total = res.total
      })
      
    },
    changeClass() {
      console.log("触发");
    },
    start() {
      const regNewline = /\n/;
      const lineArr = this.lyric.split(regNewline);
      const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/;
      lineArr.forEach((item) => {
        const a = item.match(regTime);
        let obj = {};
        // item.split()

        if (item.split("]")[1]) {
          obj.time = a
            ? this.formatLyricTime(a[0].slice(1, a[0].length - 1))
            : 0;
          obj.name = item.split("]")[1] === "" ? "" : item.split("]")[1];
          this.objLyric.push(obj);
        }
      });
      // console.log(this.objLyric);
    },
    formatLyricTime(time) {
      // 格式化歌词的时间 转换成 sss:ms
      const regMin = /.*:/;
      const regSec = /:.*\./;
      const regMs = /\./;

      const min = parseInt(time.match(regMin)[0].slice(0, 2));
      let sec = parseInt(time.match(regSec)[0].slice(1, 3));
      const ms = time.slice(
        time.match(regMs).index + 1,
        time.match(regMs).index + 3
      );
      if (min !== 0) {
        sec += min * 60;
      }
      return Number(sec + "." + ms);
    },
  },
};
</script>
<style lang="scss" scope>
.ani_box {
  transition: all 0.5s;
  position: fixed;
  left: 0;
  top: 200%;
  width: 100%;
  z-index: 1000;
  background: #fff;
  bottom: 0;
  overflow: auto;
  &.on {
    top: 0;
  }
}
.ms {
  display: flex;
  margin-top: 30px;
  align-items: flex-end;
  .lf {
    width: 38%;

    .cover {
      width: 99%;
      background: url("../assets/singlecover.png") no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 50px;
      border-radius: 50%;
      transition: all 0.5s;
      transform: rotate(30deg);
      animation: ratate 20s linear infinite;
    }
    .m_btn {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      .btn {
        padding: 6px 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 12px;
        display: flex;
        align-items: center;
        margin-right: 10px;
        cursor: pointer;
        background: #fff;
        i {
          margin-right: 6px;
          font-size: 14px;
        }
      }
    }
  }
  .rg {
    margin-left: 100px;
    width: 62%;
    .title {
      font-size: 24px;
      font-weight: 500;
    }
    .gs {
      margin-top: 10px;
      font-size: 12px;
      list-style: none;
      padding: 0;
      display: flex;
      li {
        margin-right: 40px;
        span {
          color: #186dc5;
          cursor: pointer;
        }
      }
    }
    .lyric {
      position: relative;
      margin-top: 30px;
      height: 300px;
      overflow-y: scroll;
      // &::after{
      //   position: absolute;
      //   content: "";
      //   top: 0;
      //   left: 0;
      //   right: 0;
      //   height: 30px;
      //   filter: blur(20);
      //   background: rgba(0, 0, 0, 0.3);
      // }
      &::-webkit-scrollbar {
        width: 8px;
        height: 16px;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.1);
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          margin-bottom: 20px;
          font-family: "宋体";
        }
      }
    }
  }
}
.comment {
  margin-top: 80px;
  .title {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    span {
      font-size: 12px;
      color: #999;
      margin-left: 10px;
    }
  }
  .com_input {
    border: 1px solid #eee;
    margin-top: 15px;
    background: #fff;
    position: relative;
    input {
      border: none;
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      background: none;
      padding-left: 20px;
      outline: none;
    }
    button {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: #c62f2f;
      color: #fff;
      border: none;
      padding: 4px 10px;
      border-radius: 4px;
      outline: none;
    }
  }
  .hot_com {
    // padding-bottom: 80px;
    .list {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid #eee;
      .lf {
        margin-right: 15px;
        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-top: 5px;
        }
      }
      .rg {
        font-size: 13px;
        width: 100%;
        span {
          line-height: 25px;
        }
        .name {
          color: #186dc5;
        }
        .btm {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
          align-items: center;
          .time {
            color: #999;
            font-size: 12px;
          }
          .btn1 {
            cursor: pointer;
            i {
              font-size: 12px;
              color: #999;
            }
            span {
              font-size: 12px;
              color: #999;
              margin-left: 4px;
            }
          }
        }
      }
    }
    .base {
      text-align: center;
      font-size: 12px;
      color: #999;
      padding: 10px 0;
    }
  }
}
.bg-blur {
  position: absolute;
  top: 0;
  left: 0;
  // transform: translate(-50%, -50%);
  width: 100%;
  height: 40%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(70px);
  z-index: -1;
}
@keyframes ratate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
