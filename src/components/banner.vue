<template>
  <div id="banner">
    <transition-group name="images" tag="ul">
      <li
        v-for="(item, index) in images"
        :key="index"
        v-show="index === currentIndex"
      >
        <img :src="item" alt="banner-item" />
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: ["banner01.jpg", "banner02.jpg", "banner03.jpg", "banner04.jpg"],
      url: "",
      images_length: "",
      timer: "",
      currentIndex: 0,
    };
  },
  mounted() {
    this.images = this.images.map((item) => {
      return require("@/assets/img/" + item);
    });
    this.showInterval();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    // getImgUrl(icon) {
    //   return require("@/assets/img/" + icon);
    // },

    // 轮播
    showInterval() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 3000);
    },

    autoPlay() {
      if (this.currentIndex == this.images.length) {
        clearInterval(this.timer);
      }
      this.currentIndex++;
    },
  },
};
</script>

<style lang="less" scoped>
#banner {
  // overflow: hidden;
  position: relative;
}
#banner li {
  position: absolute;
}

.images-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.images-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.images-enter {
  transform: translateX(100%)
}

.images-leave {
  transform: translateX(0)
}
</style>
