<template>
  <div class="home">
    <div class="page_nav">
      <ul>
        <li
          :class="li_on == index ? 'on' : ''"
          v-for="(item, index) in li_list"
          :key="index"
          @click="toDetail(item.key,item.index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <component :is="currentView" :parent="viewIndex" :key="li_on"></component>
    <!-- <recommend :show="statu"></recommend>
    <song-list :show="statu"></song-list>
    <radio-show :show="statu"></radio-show>
    <raking-list :show="statu"></raking-list> -->
  </div>
</template>

<script>
import recommend from "./home_components/recommend";
import songList from "./home_components/songList";
import radioShow from "./home_components/radioShow";
import rakingList from "./home_components/rakingList";
export default {
  name: "Home",
  components: {
    recommend,
    songList,
    radioShow,
    rakingList,
  },
  data() {
    return {
      li_on: 0,
      // li_list1: ["个性推荐", "歌单", "主播电台", "排行榜", "歌手", "最新音乐"],
      currentView:'recommend',
      viewIndex: 1,
      li_list: [
        {
          name: "个性推荐",
          key: "recommend",
          index: 0
        },
        {
          name: "歌单",
          key: "songList",
          index: 1
        },
        {
          name: "主播电台",
          key: "radioShow",
          index: 2
        },
        {
          name: "排行榜",
          key: "radioShow",
          index: 3
        },
        {
          name: "歌手",
          key: "radioShow",
          index: 4
        },
        {
          name: "最新音乐",
          key: "radioShow",
          index: 5
        },
      ],
      imgUrl: [
        "http://p1.music.126.net/WXrqJFTt5NwDaJm4JuGPNw==/109951165297673385.jpg?imageView&quality=89",
        "http://p1.music.126.net/ZGUns7WvgJ0ZF4txDMy2BA==/109951165367464959.jpg?imageView&quality=89",
        "http://p1.music.126.net/j1SpKTAlu7cxAScpGkpKfw==/109951165367550061.jpg?imageView&quality=89",
        "http://p1.music.126.net/xyN0mJ7dYicGEbU--zmiRg==/109951165367513014.jpg?imageView&quality=89",
      ],
      bannerList: [],
      songMenuList: [],
      newMusicList: [],
      statu: 1,
    };
  },
  // created() {},
  mounted() {
    // this.getList();
  },
  computed: {},
  methods: {
    toDetail(name,index) {
      // console.log(e);
      this.currentView = name
      this.li_on = index;
    },
    finish(e) {
      console.log(e, "我是子组件传值");
    },
  },
  // mounted() {
  //   console.log("Current Swiper instance object", this.swiper);
  //   this.swiper.slideTo(0, 1000, false);
  // },
};
</script>

<style lang="scss" scoped>
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
.loading {
  padding: 30px;
  /deep/ .el-loading-spinner i {
    color: #666;
  }
  /deep/ .el-loading-spinner .el-loading-text {
    color: #666 !important;
  }
}
</style>
