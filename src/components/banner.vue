<template>
  <div>
    <img :src="url" alt="banner" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "banner01.jpg",
        "banner02.jpg",
        "banner03.jpg",
        "banner04.jpg",
      ],
      url:'',
      images_length: '',
      timer:'',
    };
  },
  mounted() {
    this.url = this.getImgUrl(this.images[0]);
    this.showInterval()
  },
  beforeDestroy(){
      clearInterval(this.timer);
  },
  methods: {
    getImgUrl(icon) {
      return require("@/assets/img/" + icon);
    },
    // 轮播
    showInterval(){
        let _this = this;
        let i = 0;
        this.timer = setInterval(() => {
            _this.url = _this.getImgUrl(_this.images[i++])
            if(i == _this.images.length){
                clearInterval(_this.timer);
                _this.showInterval();
            }
        }, 3000);
    }
  },
};
</script>
