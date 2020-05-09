export default {
  data(){
    return{
      timer: "",
    }
  },
  mounted() {
    let _this = this;
    this.$nextTick(() => {
      _this.timer = setTimeout(() => {
        _this.$store.commit("updateLoadingStatus", { isLoading: false });
        clearTimeout(_this.timer);
      }, 500);
    });
  },
};
