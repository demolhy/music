<template>
  <div class="footer">
    <div class="play_icon">
      <i class="icon1 iconfont icon-xiayishou1"></i>
      <i class="iconfont icon-bofang"></i>
      <i class="icon1 iconfont icon-xiayishou"></i>
    </div>
    <div class="progress">
      <span>00:00</span>
      <p>
        <i></i>
      </p>
      <span>04:00</span>
      <div class="volume">
        <i class="iconfont icon-yinliang"></i>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  height: 50px;
  z-index: 10;
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  .play_icon {
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
      p{
        width: 5vw;
        margin: 0 5px;
      }
    }
  }
}
</style>