<template>
  <div id="contact">
    <div>
      <img src="../assets/img/banner.jpg" alt="banner" />
    </div>
    <div class="contact-content">
      <img src="../assets/img/contact-icon.jpg" alt="icon" />
      <div class="contact-title">
        <div class="line"></div>
        <h4>联系我们</h4>
        <div class="line"></div>
      </div>
      <p>美好的陪伴来自温暖的生命</p>
      <div class="show-map">
        <maps></maps>
        <div class="contact-info">
          <p>
            联系人：黄小姐
          </p>
          <p>微信： hby313</p>
          <p>邮箱： 41364855@qq.com</p>
          <p>地址： 广东广州天河</p>
          <img src="../assets/img/wechat.jpg" alt="contact.wechat" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
       timer: "",
    }
  },
  mounted() {
    let _this = this;
    // console.log("contact loaded");
    this.$nextTick(() => {
      // console.log("contactloading");
      _this.timer = setTimeout(() => {
        _this.$store.commit("updateLoadingStatus", { isLoading: false });
        clearTimeout(_this.timer);
      }, 500);
    });
  },
  components: {
    'maps': () => import('../components/map/maps')
  },
};
</script>
<style lang="less" scoped>
#contact {
  background: url(../assets/img/img04.jpg) repeat-y left top;
}
#contact .contact-content {
  padding: 30px 30px 50px 30px;
}
#contact div.contact-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
#contact div.line {
  width: 100px;
  background-color: #000;
  height: 1px;
  margin-top: 5px;
}
#contact h4 {
  font-size: 26px;
  padding: 5px;
}
.contact-content > img {
  display: block;
  margin: 0 auto;
}
.contact-content > p {
  font-size: 16px;
  color: #999;
  text-align: center;
  margin-bottom: 30px;
}
.show-map {
  display: flex;
  justify-content: space-between;
}
div.contact-info {
  width: 300px;
}
div.contact-info img {
  margin-top: 10px;
}
</style>
