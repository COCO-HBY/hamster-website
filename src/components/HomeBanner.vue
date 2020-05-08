<template>
  <div class="carousel">
    <transition-group tag="ul" class="slide" name="image">
      <li v-for="(image, index) in imgs" :key="index" v-show="index === mark">
        <img :src="image" />
      </li>
    </transition-group>
    <div class="bullet">
      <span
        v-for="(item, index) in imgs.length"
        :class="{ active: index === mark }"
        @click="change(index)"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mark: 0,
      timer: null,
      imgs: ["banner01.jpg", "banner02.jpg", "banner03.jpg", "banner05.jpg"],
    };
  },

  mounted() {
    //在DOM加载完成后，加载图片模块
    this.imgs = this.imgs.map((item) => {
      return require("@/assets/img/" + item);
    });
    this.play();
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === this.imgs.length) {
        this.mark = 0;
        return;
      }
    },
    play() {
      if(this.timer){
        this.stop();
      }
      this.timer = setInterval(this.autoPlay, 5000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.mark = index;
      this.play();
    },
  },
};
</script>

<style scoped>
.carousel {
  overflow: hidden;
  width: 685px;
  height: 340px;
  position: relative;
}
.carousel li {
  position: absolute;
}
.bullet {
  width: 100%;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
}

span {
  width: 10px;
  height: 10px;
  background: white;
  display: inline-block;
  margin-right: 0.5rem;
  border-radius: 50%;
}

.active {
  background: #900000;
}

.image-enter-active {
  transform: translateX(0);
  transition: all 1.5s ease;
}

.image-leave-active {
  transform: translateX(-100%);
  transition: all 1.5s ease;
}

.image-enter {
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}
</style>
