<template>
  <div class="silder-wrap">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="sider sider-1">
          
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sider sider-left sider-2">
          
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sider sider-3">
          
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
// eslint-disable-next-line
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1, // 每一個畫面有幾個swiper-slide
        spaceBetween: 0, // swiper-slide間格
        loop: true, // 無限循環
        autoplay: { // 自動撥放-delay延遲
          delay: 4500,
        },
        pagination: { // 頁碼
          el: '.swiper-pagination',
          clickable: true, // 點擊頁碼可跳轉
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_custom.scss';

.silder-wrap {
  position: relative;
}
.swiper-container {
  width: 100%;
  height: 500px;
  @media (max-width: 767px) {
    height: 400px;
  }
}
.sider {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    flex-direction: column;
  }
}
.sider-left {
  flex-direction: row-reverse;
  @media (max-width: 767px) {
    flex-direction: column;
  }
}
.sider-1 {
  background-image: url('../assets/image/banner-1.jpg');
}
.sider-2 {
  background-image: url('../assets/image/banner-2.jpg');
}
.sider-3 {
  background-image: url('../assets/image/banner-3.jpg');
}
</style>
