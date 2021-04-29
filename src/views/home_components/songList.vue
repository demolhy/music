<template>
  <div class="content">
    <div class="hot_header">
      <img
        class="lf"
        src="http://p4.music.126.net/LGoo2i-SmnY4N_kdujnG3g==/109951165547651858.jpg?param=200y200"
        alt=""
      />
      <div class="rg">
        <span
          ><i class="iconfont icon-huangguanguanjundiyihuiyuan"></i
          >精品歌单</span
        >
        <div class="title">《美国乡村乐图鉴与简史》</div>
        <div class="int">美国乡村乐图鉴与简史</div>
      </div>
      <div
        class="bg"
        style="background-image: url('http://p4.music.126.net/LGoo2i-SmnY4N_kdujnG3g==/109951165547651858.jpg?param=200y200');"
      ></div>
    </div>
    <div class="list_nav">
      <div class="lf" @click="cutNav()">全部歌单 ></div>
      <div class="rg">
        <span
          v-for="(item, index) in navList"
          :key="index"
          @click="cutNav(item.name)"
          >{{ item.name }}</span
        >
      </div>
    </div>
    <div class="content_list">
      <div
        class="box"
        v-for="(item, index) in songLists"
        :data-id="item.id"
        :key="index"
      >
        <div class="list1 list">
          <img :src="item.coverImgUrl" alt />
          <div class="btm">
            <i class="iconfont icon-yonghu"></i>{{ item.creator.nickname }}
          </div>
          <div class="top">
            <i class="iconfont icon-play"></i>{{ item.playCount }}
          </div>
        </div>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { songList } from "../../api/api";
export default {
  data() {
    return {
      navList: [
        {
          name: "华语",
          key: 0,
        },
        {
          name: "流行",
          key: 1,
        },
        {
          name: "摇滚",
          key: 2,
        },
        {
          name: "民谣",
          key: 3,
        },
        {
          name: "电子",
          key: 4,
        },
        {
          name: "轻音乐",
          key: 5,
        },
      ],
      songLists: [],
      active: "",
    };
  },
  mounted() {
    this.getSongList();
  },
  methods: {
    getSongList(e) {
      let data = {
        limit: 20,
        cat: e === null ? "" : e,
      };
      songList(data).then((res) => {
        res.playlists.map((item) => {
          if (item.playCount > 10000) {
            item.playCount =
              item.playCount
                .toString()
                .substr(0, item.playCount.toString().length - 4) + "万";
          }
        });
        this.songLists = res.playlists;
        // songMenu().then(res=>{
        //     console.log(res);
        // })
      });
    },
    cutNav(e) {
      this.getSongList(e)
    },
  },
};
</script>

<style lang="scss" scoped>
.hot_header {
  margin-top: 20px;
  border-radius: 10px;
  padding: 15px;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  .lf {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  .rg {
    color: #fff;
    margin-left: 20px;
    i {
      font-size: 14px;
      color: rgb(201, 164, 42);
      margin-right: 10px;
      // margin-left: 20px;
    }
    span {
      border: 1px solid rgb(201, 164, 42);
      color: rgb(201, 164, 42);
      font-size: 12px;
      padding: 4px 15px;
      border-radius: 20px;
      display: inline-block;
      margin-bottom: 20px;
    }
    .int {
      color: #eee;
      font-size: 12px;
      margin-top: 10px;
    }
  }
  .bg {
    // background-size: 100;
    filter: blur(30px);
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    transform: scale(1.2);
    background-size: 100% 100%;
  }
}
.list_nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 0;
  .lf {
    border: 1px solid #ccc;
    color: #333;
    font-size: 12px;
    padding: 4px 15px;
    border-radius: 20px;
    display: inline-block;
    cursor: pointer;
  }
  .rg {
    span {
      font-size: 10px;
      display: inline-block;
      padding: 0 26px;
      color: #666;
      border-right: 1px solid #eee;
      cursor: pointer;
      &:last-child {
        border: none;
        padding-right: 0;
      }
    }
  }
}
.content_list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  img {
    width: 100%;
    height: 100%;
    // object-fit: cover;
    border-radius: 4px;
  }
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
    height: 84%;
    // margin: 0 10px;
    border-radius: 6px;
    margin-right: 14px;
    border: 1px solid #eee;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    .btm {
      position: absolute;
      bottom: 5px;
      left: 5px;
      color: #ddd;
      font-size: 12px;
      i {
        margin-right: 5px;
        font-size: 10px;
      }
    }
    .top {
      position: absolute;
      top: 5px;
      right: 5px;
      color: #ddd;
      font-size: 12px;
      i {
        font-size: 10px;
        margin-right: 5px;
      }
    }
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
</style>
