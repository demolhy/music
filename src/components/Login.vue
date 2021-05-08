<!-- 组件说明 -->
<template>
  <div v-if="hide" class="login_box">
    <div class="login">
      <div v-if="login">
        <h5>登录</h5>
        <input type="text" placeholder="请输入账号" />
        <input type="password" placeholder="请输入密码" />
        <button>登录</button>
        <span @click="cut">注册</span>
        <i @click="hideBox" class="hide iconfont icon-cha"></i>
      </div>
      <div v-if="reg">
        <h5>注册</h5>
        <input type="text" placeholder="请输入账号" />
        <input type="password" placeholder="请输入密码" />
        <button>注册</button>
        <span @click="cuts">已有账号？前往登录</span>
        <i @click="hideBox" class="hide iconfont icon-cha"></i>
      </div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "Login",
  props: {},
  data() {
    return {
      hide: false,
      login: true,
      reg: false,
    };
  },
  methods: {
    hideBox() {
      this.hide = false;
    },
    show() {
      console.log("触发");
      this.hide = true;
    },
    cut() {
      this.reg = true;
      this.login = false;
    },
    cuts() {
      this.reg = false;
      this.login = true;
    },
  },
  mounted() {
    this.$bus.$on("login", this.show);
  },
};
</script>

<style lang="scss" scoped>
.login_box {
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
}
.login {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  background: #fff;
  padding: 20px 50px;
  padding-bottom: 30px;
  // box-shadow: 1px 1px 10px #eee;
  text-align: center;
  transition: all 1s;

  &.on {
    display: block;
  }
  &.hide {
    animation: hide 0.5s forwards;
  }
  h5 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
  input {
    border: 1px solid #eee;
    padding: 10px 20px;
    border-radius: 6px;
    display: block;
    margin-bottom: 20px;
    outline: none;
    width: 200px;
  }
  button {
    background: #c62f2f;
    color: #fff;
    border: none;
    width: 100%;
    padding: 8px 0;
    border-radius: 6px;
  }
  .hide {
    position: absolute;
    right: 10px;
    top: 15px;
    color: #999;
    cursor: pointer;
  }
  span {
    font-size: 14px;
    margin-top: 10px;
    display: inline-block;
    cursor: pointer;
  }
}
@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>
