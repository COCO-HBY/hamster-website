<template>
  <!-- 蒙版  -->
  <transition name="fade">
    <div class="pop-mask" v-if="show">
      <div class="pop-box">
        <img :src="photo" alt="photo" />
        <h4>{{ msg }}</h4>
        <div class="btn-list">
          <button @click="btnConfirm">确定</button>
          <button @click="btnCancle">取消</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      msg: "",
      photo: "",
      confirmFunc: "",
      //   cancleFunc: "",
    };
  },
  methods: {
    btnConfirm() {
      this.confirmFunc();
      this.show = false;
    },
    btnCancle() {
      //   this.cancleFunc();
      this.show = false;
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
// 渐变过渡
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

div.pop-mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
div.pop-box {
  width: 400px;
  height: 220px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  padding: 20px;
  position: relative;
}
div.pop-box > img {
  width: 170px;
  height: 220px;
  float: left;
}
div.pop-box h4{
    font-size: 22px;
    margin-top:60px;
}
div.pop-box div.btn-list {
    margin-top: 100px;
}
div.pop-box div.btn-list button{
  font-size: 18px;
  color: #fff;
  margin-right: 20px;
  padding: 4px 10px;
  border-radius: 5px;
  background-color: #625e48;
}
</style>
