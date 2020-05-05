<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: "",
    };
  },
  mounted() {
    let _this = this;
    this.$nextTick(() => {
      console.log("Adoptloading");
      _this.timer = setTimeout(() => {
        _this.$store.commit("updateLoadingStatus", { isLoading: false });
        clearTimeout(_this.timer);
      }, 500);
    });
  },
};
</script>
