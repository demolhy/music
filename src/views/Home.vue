<template>
  <div class="home">
    <div class="page_nav">
      <ul>
        <li
          @click="toDetail(index)"
          :class="li_on == index ? 'on':''"
          v-for="(item,index) in li_list"
          :key="index"
        >{{item}}</li>
      </ul>
    </div>
    <div class="content">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
      <!-- <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img
            src="http://p1.music.126.net/WXrqJFTt5NwDaJm4JuGPNw==/109951165297673385.jpg?imageView&quality=89"
            alt
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://p1.music.126.net/Ez1tY_KZltigzD8kEw_Piw==/109951165297680934.jpg?imageView&quality=89"
            alt
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://p1.music.126.net/jCPFWW1cKbrYuh841c85vQ==/109951165296405373.jpg?imageView&quality=89"
            alt
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://p1.music.126.net/gWYPtajUYlEIG7aKdX4_wg==/109951165298241414.jpg?imageView&quality=89"
            alt
          />
        </swiper-slide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>-->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// @ is an alias to /src
import "swiper/swiper-bundle.css";

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      li_on: 0,
      li_list: ["个性推荐", "歌单", "主播电台", "排行榜", "歌手", "最新音乐"],
      swiperOption: {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    toDetail(e) {
      console.log(e);
      this.li_on = e;
    },
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper;
  //   },
  // },
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
.swiper {
  height: 360px;
  .swiper-slide {
    background-position: center;
    background-size: cover;
    &.slide-1 {
      background-image: url("http://p1.music.126.net/WXrqJFTt5NwDaJm4JuGPNw==/109951165297673385.jpg?imageView&quality=89");
    }
    &.slide-2 {
      background-image: url("http://p1.music.126.net/WXrqJFTt5NwDaJm4JuGPNw==/109951165297673385.jpg?imageView&quality=89");
    }
    &.slide-3 {
      background-image: url("http://p1.music.126.net/WXrqJFTt5NwDaJm4JuGPNw==/109951165297673385.jpg?imageView&quality=89");
    }
    &.slide-4 {
      background-image: url("http://p1.music.126.net/WXrqJFTt5NwDaJm4JuGPNw==/109951165297673385.jpg?imageView&quality=89");
    }
    &.slide-5 {
      background-image: url("http://p1.music.126.net/WXrqJFTt5NwDaJm4JuGPNw==/109951165297673385.jpg?imageView&quality=89");
    }
  }
}
</style>
