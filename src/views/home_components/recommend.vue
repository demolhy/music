<template>
  <div>
    <!-- <div class="loading" id="loading"></div> -->
    <div class="content">
      <el-carousel :interval="4000" type="card" height="200px" :autoplay="true">
        <el-carousel-item v-for="(item, key) in bannerList" :key="key">
          <img :src="item.imageUrl" alt />
        </el-carousel-item>
      </el-carousel>
      <div class="content_list">
        <div class="title">
          <h5>推荐歌单</h5>
          <!-- <p>更多></p> -->
        </div>
        <div class="list_box">
          <div class="box">
            <div class="list1 list">
              <h5>{{ $store.state.time }}</h5>
              <p>{{ $store.state.day }}</p>
            </div>
            <p>每日推荐</p>
          </div>
          <div
            class="box"
            v-for="(item, index) in songMenuList"
            :data-id="item.id"
            :key="index"
          >
            <div class="list1 list">
              <img :src="item.coverImgUrl" alt />
            </div>
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="content_list">
        <div class="title">
          <h5>最新音乐</h5>
          <!-- <p>更多></p> -->
        </div>
        <ul class="music_list">
          <li
            class="list"
            v-for="(item, index) in newMusicList"
            :key="index"
            @click="paly(item.id)"
          >
            <div class="lf">
              <span>{{ index + 1 }}</span>
              <img :src="item.picUrl" alt="" />
              <h5>{{ item.name }}</h5>
            </div>
            <div class="singer">{{ item.singerName }}</div>
            <div class="album">
              {{
                item.song.transName === null ? item.name : item.song.transName
              }}
            </div>
            <div class="time">05:00</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  musicList,
  banner,
  hotSongMenu,
  newMusic,
  musicSrc,
} from "../../api/api";
export default {
  props: {},
  data() {
    return {
      bannerList: [],
      songMenuList: [],
      newMusicList: [],
      load: "",
    };
  },
  created() {},
  mounted() {
    // console.log(document.querySelector("#content"));
    // this.load = this.$loading({
    //   target: document.querySelector("#loading"),
    //   // lock: false,
    //   text: "疯狂加载中～",
    //   spinner: "el-icon-loading",
    //   background: "rgba(0, 0, 0, 0.6)",
    //   fullscreen: false,
    // });
    this.getBanner();
    this.getSongMenu();
    this.getNewMusic();
  },
  methods: {
    getList() {
      let data = {
        id: 186016,
        limit: 1,
      };
      musicList(data).then((res) => {
        console.log(res);
      });
    },
    getBanner() {
      banner().then((res) => {
        this.bannerList = res.banners;
      });
    },
    getSongMenu() {
      let data = {
        limit: 9,
      };
      hotSongMenu(data).then((res) => {
        // console.log(res);
        this.songMenuList = res.playlists;
      });
    },
    getNewMusic() {
      let data = {
        limit: 40,
      };
      newMusic(data).then((res) => {
        // console.log(res.result);
        // let name = "";
        res.result.map((item) => {
          if (item.song.artists.length === 1) {
            item.singerName = item.song.artists[0].name;
          } else {
            let name = "";
            item.song.artists.map((singItems) => {
              name = name.concat("/", singItems.name);
            });
            item.singerName = name.substr(1);
            // return '12312'
          }
        });
        // return name;
        this.newMusicList = res.result;
      });
      // this.load.close()
    },
    paly(e) {
      let data = {
        id: e,
      };
      musicSrc(data).then((res) => {
        // console.log();
        this.$store.commit("changeSrc", res.data[0].url);
      });
      
    },
  },
};
</script>

<style lang="scss" scpoed>
.content img {
  width: 100%;
  height: 100%;
  // object-fit: cover;
  border-radius: 4px;
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
        word-break: break-all;
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
      border-radius: 6px;
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
    margin-top: 0px;
    padding-left: 0px;
    .list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      cursor: pointer;
      &:nth-child(even) {
        background: #f5f5f5;
      }
      .lf {
        display: flex;
        align-items: center;
        width: 55%;
        span {
          color: #ccc;
          font-size: 12px;
        }
        img {
          margin: 0 20px;
          margin-right: 10px;
          width: 60px;
          height: 60px;
        }
        h5 {
          font-size: 14px;
          font-weight: 400;
          color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding-right: 40px;
        }
      }
      .singer,
      .album,
      .time {
        color: #666;
        font-size: 12px;
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .singer {
        padding-right: 10px;
      }
      .time {
        text-align: right;
      }
    }
  }
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
