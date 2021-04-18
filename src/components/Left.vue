<template>
  <div class="left_nav">
    <!-- <div class="nav">
      <div class="title">推荐</div>
      <div class="box">
        <div class="item on">
          <i class="iconfont icon-yinle"></i>
          <span>发现音乐</span>
        </div>
        <div class="item">
          <i class="iconfont icon-diantai"></i>
          <span>私人FM</span>
        </div>
        <div class="item">
          <i class="iconfont icon-zhibobofangshexiangjitianxianxianxing"></i>
          <span>视频</span>
        </div>
        <div class="item">
          <i class="iconfont icon-pengyou"></i>
          <span>朋友</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="title">我的音乐</div>
      <div class="box">
        <div class="item">
          <i class="iconfont icon-gedan"></i>
          <span>本地音乐</span>
        </div>
        <div class="item">
          <i class="iconfont icon-xiazai"></i>
          <span>下载管理</span>
        </div>
        <div class="item">
          <i class="iconfont icon-yunpan"></i>
          <span>我的音乐云盘</span>
        </div>
        <div class="item">
          <i class="iconfont icon-huabanfuben"></i>
          <span>我的收藏</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="title">创建的歌单</div>
      <div class="box">
        <div class="item">
          <i class="iconfont icon-xinaixin"></i>
          <span>我喜欢的音乐</span>
        </div>
      </div>
    </div>-->
    <div class="nav" v-for="(item,index) in nav" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="box">
        <div @click="toPage(items.key)" class="item" :class="tab == items.key ? 'on':''" v-for="(items,indexs) in item.content" :key="indexs">
          <i class="iconfont" :class="items.icon"></i>
          <span>{{items.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: "left",
  props: {},
  data() {
    return {
      tab: 1,
      nav: [
        {
          title: "推荐",
          content: [
            {
              key: 1,
              icon: "icon-yinle",
              name: "发现音乐"
            },
            {
              key: 2,
              icon: "icon-diantai",
              name: "私人FM"
            },
            {
              key: 3,
              icon: "icon-zhibobofangshexiangjitianxianxianxing",
              name: "视频"
            },
            {
              key: 4,
              icon: "icon-pengyou",
              name: "朋友"
            }
          ]
        },
        {
          title: "我的音乐",
          content: [
            {
              key: 5,
              icon: "icon-gedan",
              name: "本地音乐"
            },
            {
              key: 6,
              icon: "icon-xiazai",
              name: "下载管理"
            },
            {
              key: 7,
              icon: "icon-yunpan",
              name: "我的音乐云盘"
            },
            {
              key: 8,
              icon: "icon-huabanfuben",
              name: "我的收藏"
            }
          ]
        },
        {
          title: "创建的歌单",
          content: [
            {
              key: 9,
              icon: "icon-xinaixin",
              name: "我喜欢的音乐"
            }
          ]
        }
      ]
    };
  },
  methods: {
      toPage(e){
          this.tab = e
      }
  },
};
</script>

<style lang="scss" scoped>
.left_nav {
  position: fixed;
  left: 0;
  top: 55px;
  width: 200px;
  background: #f5f5f7;
  bottom: 0;
  overflow-y: auto;
  border-right: 1px solid #ddd;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 2px;
    height: 1;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e1e1e2;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  .nav {
    margin-bottom: 10px;
    .title {
      padding: 6px 10px;
      font-size: 12px;
      color: #999;
    }
    .item {
      padding: 8px 15px;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      i {
        color: #666;
        line-height: 1;
      }
      i.icon-xinaixin {
        font-size: 12px;
      }
      span {
        margin-left: 8px;
        font-size: 12px;
        color: #666;
      }
    }
    .item.on {
      background: #e6e7ea;
      i {
        color: #333;
      }
      span {
        color: #333;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: #c62f2f;
        width: 3px;
      }
    }
  }
}
</style>