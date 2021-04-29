<template>
  <div class="musicContent">
    <div class="music_content" v-if="songList.playlist">
      <div class="header">
        <img class="lf" :src="songList.playlist.coverImgUrl" alt="" />
        <div class="rg">
          <div class="title">
            <span>歌单</span>
            <p>{{ songList.playlist.name }}</p>
          </div>
          <div class="msg">
            <img :src="songList.playlist.creator.avatarUrl" alt="" />
            <p class="name">{{ songList.playlist.creator.nickname }}</p>
            <span>2021-04-27创建</span>
          </div>
          <div class="btn_box">
            <div class="item1 item">
              <i class="iconfont icon-bofang"></i>
              <span>播放全部</span>
            </div>
            <div class="item">
              <i class="iconfont icon-shoucang"></i>
              <span>收藏({{ songList.playlist.subscribedCount }})</span>
            </div>
            <div class="item">
              <i class="iconfont icon-fenxiang"></i>
              <span>分享({{ songList.playlist.shareCount }})</span>
            </div>
            <div class="item">
              <i class="iconfont icon-xiazai"></i>
              <span>下载全部</span>
            </div>
          </div>
          <div class="data">
            <div class="list">标签： {{ songList.playlist.tags[0] }}</div>
            <div class="list">
              <span>歌曲数：{{ songList.playlist.trackCount }}</span>
              <span>播放数：{{ songList.playlist.playCount }}</span>
            </div>
            <div class="list">简介：{{ songList.playlist.description }}</div>
          </div>
        </div>
      </div>

      <div class="music_list">
        <div class="nav">
          <span class="on">歌曲列表</span>
          <span>评论</span>
          <span>收藏者</span>
        </div>
        <div class="list_tab">
          <div class="tab_nav list">
            <div class="item1"></div>
            <div class="item2">音乐标题</div>
            <div class="item3">歌手</div>
            <div class="item4">专辑</div>
            <div class="item5">时长</div>
          </div>
          <div
            class="list"
            v-for="(item, index) in songList.playlist.tracks"
            :key="index"
          >
            <div class="item1">
              <span>{{ index + 1}}</span>
              <i class="iconfont icon-xinaixin"></i>
              <i class="iconfont icon-xiazai"></i>
            </div>
            <div class="item2">{{item.name}}</div>
            <div class="item3">{{item.ar[0].name}}</div>
            <div class="item4">{{item.al.name}}</div>
            <div class="item5">05:00</div>
          </div>
          <!-- <div class="list">
            <div class="item1">
              <span>01</span>
              <i class="iconfont icon-xinaixin"></i>
              <i class="iconfont icon-xiazai"></i>
            </div>
            <div class="item2">歌曲1</div>
            <div class="item3">back number</div>
            <div class="item4">啊这</div>
            <div class="item5">05:00</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { musicItem } from "../api/api";
export default {
  data() {
    return {
      songList: [],
    };
  },
  mounted() {
    this.getSongItem();
  },
  methods: {
    getSongItem() {
      let data = {
        id: 4924299113,
      };
      musicItem(data).then((res) => {
        console.log(res);
        this.songList = res;
      });
    },
    toNum(num) {
      console.log(num);
    },
  },
};
</script>

<style lang="scss" scoped>
.musicContent {
  position: fixed;
  top: 55px;
  left: 200px;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  // padding: 0 30px;
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
.header {
  display: flex;
  padding: 0 30px;
  .lf {
    width: 200px;
    height: 200px;
    border-radius: 6px;
  }
  .rg {
    margin-left: 30px;
    .title {
      display: flex;
      align-items: center;
      span {
        border: 1px solid #c62f2f;
        color: #c62f2f;
        padding: 0px 6px;
        font-size: 12px;
        border-radius: 4px;
      }
      p {
        font-size: 22px;
        font-weight: bold;
        color: #333;
        margin-left: 10px;
      }
    }
    .msg {
      display: flex;
      align-items: center;
      font-size: 13px;
      margin: 15px 0;
      .name {
        color: rgb(26, 126, 184);
        margin: 0 8px;
        cursor: pointer;
      }
      span {
        color: #999;
      }
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
    .btn_box {
      display: flex;
      .item {
        padding: 4px 10px;
        border-radius: 25px;
        border: 1px solid #ddd;
        color: #333;
        font-size: 13px;
        margin-right: 10px;
        cursor: pointer;
        i {
          color: #666;
          margin-right: 4px;
        }
      }
      .item1 {
        color: #fff;
        background: #c62f2f;
        border: none;
        i {
          border-radius: 50%;
          border: 1px solid #fff;
          padding: 3px 3px 3px 6px;
          color: #fff;
          font-size: 10px;
          transform: scale(0.8);
          display: inline-block;
        }
      }
    }
    .data {
      margin-top: 20px;
      .list {
        color: #999;
        font-size: 12px;
        margin-top: 6px;
        span {
          margin-right: 20px;
        }
      }
    }
  }
}
.music_list {
  .nav {
    padding-left: 30px;
    // border-bottom: 1px solid #eee;
    margin-top: 30px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 30px;
      right: 30px;
      height: 1px;
      background: #eee;
    }
    span {
      font-size: 14px;
      padding: 4px;
      display: inline-block;
      margin-right: 20px;
      color: #333;
      &.on {
        color: #c62f2f;
        border-bottom: 2px solid #c62f2f;
      }
    }
  }
  .list_tab {
    .list {
      display: flex;
      padding: 8px 0;
      padding-left: 30px;
      font-size: 12px;
      color: #666;
      &:nth-child(even) {
        background: #f5f5f5;
      }
      .item1 {
        width: 6%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px;

        i {
          font-size: 12px;
          cursor: pointer;
        }
        .icon-xinaixin {
          margin-right: -8px;
        }
        .icon-xiazai {
          font-size: 14px;
        }
      }
      .item2 {
        width: 40%;
      }
      .item3 {
        width: 20%;
      }
      .item4 {
        width: 20%;
      }
      .item5 {
        width: 10%;
      }
    }
    .tab_nav {
      color: #999;
      padding: 12px 0;
      padding-left: 30px;
    }
  }
}
.music_content {
  margin: 20px 0 10vh;
}
</style>
