<template>
  <div class="home">
    <div class="page_nav">
      <ul>
        <li
          @click="toDetail(index)"
          :class="li_on == index ? 'on' : ''"
          v-for="(item, index) in li_list"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="content">
      <el-carousel :interval="4000" type="card" height="200px" :autoplay="true">
        <el-carousel-item v-for="(item, key) in imgUrl" :key="key">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
      <div class="content_list">
        <div class="title">
          <h5>推荐歌单</h5>
          <p>更多></p>
        </div>
        <div class="list_box">
          <div class="box">
            <div class="list1 list">
              <h5>星期一</h5>
              <p>{{ $store.state.conut }}</p>
            </div>
            <p>每日推荐</p>
          </div>
          <div class="box">
            <div class="list1 list">
              <img
                src="http://p2.music.126.net/aA5mgvKGXfgEjPfCySnBlw==/109951165117086425.jpg?param=140y140"
                alt
              />
            </div>
            <p>忘记是为了再一次义无反顾的眷恋</p>
          </div>
          <div class="box">
            <div class="list1 list">
              <img
                src="http://p4.music.126.net/csO9HMCP-HIwbjDP2_XSCQ==/109951165020624503.jpg?param=140y140"
                alt
              />
            </div>
            <p>唱一首秋天情歌，让夕阳把完美和遗憾封存</p>
          </div>
          <div class="box">
            <div class="list1 list">
              <img
                src="http://p3.music.126.net/Y7cveTgV3qbYTwqJ2FNnBw==/109951164526625758.jpg?param=140y140"
                alt
              />
            </div>
            <p>夏天是一首关于青春的诗，而你是主角</p>
          </div>
          <div class="box">
            <div class="list1 list">
              <img
                src="http://p3.music.126.net/q2H0-6KbZrLEN5IlCNB7Bw==/109951165084536020.jpg?param=140y140"
                alt
              />
            </div>
            <p>忘记是为了再一次义无反顾的眷恋</p>
          </div>
          <div class="box">
            <div class="list1 list">
              <img
                src="http://p3.music.126.net/UONudz_jF1hWeTuXFtE-5w==/109951164910552353.jpg?param=140y140"
                alt
              />
            </div>
            <p>忘记是为了再一次义无反顾的眷恋</p>
          </div>
          <div class="box">
            <div class="list1 list">
              <img
                src="http://p4.music.126.net/csO9HMCP-HIwbjDP2_XSCQ==/109951165020624503.jpg?param=140y140"
                alt
              />
            </div>
            <p>忘记是为了再一次义无反顾的眷恋</p>
          </div>
          <div class="box">
            <div class="list1 list">
              <img
                src="http://p3.music.126.net/Y7cveTgV3qbYTwqJ2FNnBw==/109951164526625758.jpg?param=140y140"
                alt
              />
            </div>
            <p>忘记是为了再一次义无反顾的眷恋</p>
          </div>
          <div class="box">
            <div class="list1 list">
              <img
                src="http://p3.music.126.net/v1DrIznGsHarvU8K6spKPQ==/109951165261888787.jpg?param=140y140"
                alt
              />
            </div>
            <p>忘记是为了再一次义无反顾的眷恋</p>
          </div>
          <div class="box">
            <div class="list1 list">
              <img
                src="http://p3.music.126.net/v1DrIznGsHarvU8K6spKPQ==/109951165261888787.jpg?param=140y140"
                alt
              />
            </div>
            <p>忘记是为了再一次义无反顾的眷恋</p>
          </div>
        </div>
      </div>
      <div class="content_list">
        <div class="title">
          <h5>热门音乐</h5>
          <p>更多></p>
        </div>
        <ol class="music_list">
          <li class="list">
            <div class="box">
              <img
                src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
                alt=""
              />
              <div>
                <h5>温柔</h5>
                <p>五月天</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      li_on: 0,
      li_list: ["个性推荐", "歌单", "主播电台", "排行榜", "歌手", "最新音乐"],
      imgUrl: [
        "http://p1.music.126.net/WXrqJFTt5NwDaJm4JuGPNw==/109951165297673385.jpg?imageView&quality=89",
        "http://p1.music.126.net/ZGUns7WvgJ0ZF4txDMy2BA==/109951165367464959.jpg?imageView&quality=89",
        "http://p1.music.126.net/j1SpKTAlu7cxAScpGkpKfw==/109951165367550061.jpg?imageView&quality=89",
        "http://p1.music.126.net/xyN0mJ7dYicGEbU--zmiRg==/109951165367513014.jpg?imageView&quality=89",
      ],
    };
  },
  mounted() {
    this.$rq
      .post("dj/program?rid=336355127")
      .then((res) => {
        console.log(res);
      });
    // this.$message('这是一条消息提示')
  },
  methods: {
    toDetail(e) {
      console.log(e);
      this.li_on = e;
    },
  },
  computed: {},
  // mounted() {
  //   console.log("Current Swiper instance object", this.swiper);
  //   this.swiper.slideTo(0, 1000, false);
  // },
};
</script>

<style lang="scss">
.home {
  position: fixed;
  top: 55px;
  left: 200px;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 30px;
  background: #fafafa;
  // min-width: 1100px;
  // overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 1;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e1e1e2;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
}

.page_nav {
  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    border-bottom: 1px solid #ddd;
  }
  li {
    list-style: none;
    padding: 15px 0;
    position: relative;
    color: #333;
    font-size: 16px;
    margin: 0 20px;
    cursor: pointer;
  }
  li.on {
    color: #c62f2f;
    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      width: 60px;
      height: 2px;
      background: #c62f2f;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.el-carousel__indicator.is-active .el-carousel__button {
  background-color: #c62f2f !important;
}
.content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content_list {
  margin-bottom: 40px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
    h5 {
      font-size: 18px;
      font-weight: 400;
      margin: 0;
      color: #333;
      font-family: Microsoft Yahei;
    }
    p {
      font-size: 12px;
      cursor: pointer;
      color: #999;
    }
  }
  .list_box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .box {
      width: 19%;
      margin-bottom: 15px;
      p {
        font-size: 12px;
        color: #333;
        margin-top: 5px;
        // width: 190px;
      }
    }
    justify-content: space-between;
    .list {
      width: 100%;
      text-align: center;
      // width: 100%;
      height: 80%;
      // margin: 0 10px;

      margin-right: 14px;
      border: 1px solid #eee;
      box-sizing: border-box;
      cursor: pointer;
    }
    .list1 {
      background: #fff;
      display: flex;
      align-items: center;
      flex-flow: column;
      justify-content: center;
      h5 {
        font-size: 18px;
        font-weight: 400;
        font-family: Microsoft Yahei;
      }
      p {
        color: #c62f2f;
        font-size: 66px;
        // font-family: Microsoft Yahei;
      }
    }
  }
  .music_list {
    margin-top: 10px;
    padding-left: 20px;
    .list {
      .box {
        display: flex;
        align-items: center;
      }
      img {
        width: 40px;
      }
    }
  }
}
</style>
