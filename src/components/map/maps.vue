<template>
  <div id="dituContent"></div>
</template>
<script>
import { initMap } from "./map.js";

export default {
  data() {
    return {};
  },
  mounted() {
    // console.log("maps loading");
    this.$nextTick(()=>{
      console.log("next");
      initMap("dituContent");
    })
  },
};
</script>
<style lang="less" scoped>
.iw_poi_title {
  color: #cc5522;
  font-size: 25px;
  font-weight: bold;
  overflow: hidden;
  padding-right: 13px;
  white-space: nowrap;
}
.iw_poi_content {
  font: 12px arial, sans-serif;
  overflow: visible;
  padding-top: 4px;
  white-space: -moz-pre-wrap;
  word-wrap: break-word;
}
#dituContent {
  width: 600px;
  height: 500px;
  // border: #ccc solid 1px;
}
</style>
