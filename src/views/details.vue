<template>
  <div class="box_content">
    <div class="bg-blur"></div>
    <div class="content">
      <div class="ms">
        <div class="lf">
          <!-- <img src="../assets/singlecover.png" alt=""> -->
          <img
            class="cover"
            src="http://p2.music.126.net/qseUH9tBtprMauNYv5jR8Q==/109951164373664324.jpg?param=130y130"
            alt=""
          />
          <div class="m_btn">
            <div class="btn"><i class="iconfont icon-xinaixin"></i>喜欢</div>
            <div class="btn"><i class="iconfont icon-shoucang"></i>收藏</div>
            <div class="btn"><i class="iconfont icon-xiazai1"></i>下载</div>
            <div class="btn"><i class="iconfont icon-fenxiang"></i>分享</div>
          </div>
        </div>
        <div class="rg">
          <div class="title">千千阙歌(Live)</div>
          <ul class="gs">
            <li>专辑：<span>Crush 2</span></li>
            <li>歌手：<span>W/N / Tezdy / Tien</span></li>
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
        <div class="title">听友评论<span>(已有0条评论)</span></div>
        <div class="com_input">
          <input type="text" placeholder="发表评论" />
          <button>发送</button>
        </div>
        <div class="hot_com">
          <div class="list">
            <div class="lf">
              <img src="../assets/img1.jpg" alt="" />
            </div>
            <div class="rg">
              <div class="com">
                <span class="name">kilig:</span>
                <span
                  >当年红馆告别演唱会，她就退出歌坛踏上美国的求学之路，唱出这首歌的时候，全场泪飚。因为求学，当年人生中第一次远离家乡，乘坐大巴去往广州，再转火车到东北。大巴上一路单循就是这首。有些词曲，旋律，一旦响起，勾起的不但是回忆，更是一段往昔珍藏的情感。</span
                >
              </div>
              <div class="btm">
                <div class="time">2021年2月10日 10:10</div>
                <div class="btn">
                  <div class="btn1"><i class="iconfont icon-xinaixin"></i><span>(200)</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="list">
            <div class="lf">
              <img src="../assets/img1.jpg" alt="" />
            </div>
            <div class="rg">
              <div class="com">
                <span class="name">kilig:</span>
                <span
                  >当年红馆告别演唱会，她就退出歌坛踏上美国的求学之路，唱出这首歌的时候，全场泪飚。因为求学，当年人生中第一次远离家乡，乘坐大巴去往广州，再转火车到东北。大巴上一路单循就是这首。有些词曲，旋律，一旦响起，勾起的不但是回忆，更是一段往昔珍藏的情感。</span
                >
              </div>
              <div class="btm">
                <div class="time">2021年2月10日 10:10</div>
                <div class="btn">
                  <div class="btn1"><i class="iconfont icon-xinaixin"></i><span>(200)</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="list">
            <div class="lf">
              <img src="../assets/img1.jpg" alt="" />
            </div>
            <div class="rg">
              <div class="com">
                <span class="name">kilig:</span>
                <span
                  >当年红馆告别演唱会，她就退出歌坛踏上美国的求学之路，唱出这首歌的时候，全场泪飚。因为求学，当年人生中第一次远离家乡，乘坐大巴去往广州，再转火车到东北。大巴上一路单循就是这首。有些词曲，旋律，一旦响起，勾起的不但是回忆，更是一段往昔珍藏的情感。</span
                >
              </div>
              <div class="btm">
                <div class="time">2021年2月10日 10:10</div>
                <div class="btn">
                  <div class="btn1"><i class="iconfont icon-xinaixin"></i><span>(200)</span></div>
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
export default {
  name: "Details",
  data() {
    return {
      lyric: `[by:小懒猫stad]
[00:02.689]我多想回到那个夏天
[00:05.939]蝉鸣在田边吹过眼睫
[00:09.948]贪恋夏夜星空你侧脸
[00:13.197]犹记得清风撩拨心弦
[00:17.162]初夏的味道是你微笑
[00:20.343]我捧着月亮别来无恙
[00:23.343]我捧着月亮别来无恙
[00:25.343]我捧着月亮别来无恙
[00:30.343]我捧着月亮别来无恙
[00:32.343]我捧着月亮别来无恙`,
      img: "",
      objLyric: [],
      Lyindex: 0,
    };
  },
  created() {
    this.start();
  },
  methods: {
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
      console.log(this.objLyric);
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
      animation: ratate 10s linear infinite;
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
    padding-bottom: 80px;
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
        font-size: 14px;
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
          .btn1{
            cursor: pointer;
            i{
              font-size: 12px;
              color: #999;
            }
            span{
              font-size: 12px;
              color: #999;
              margin-left: 4px;
            }
          }
        }
      }
    }
    .base{
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
  height: 45%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(70px);
  z-index: -1;
  background: url("https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2151136234,3513236673&fm=26&gp=0.jpg");
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