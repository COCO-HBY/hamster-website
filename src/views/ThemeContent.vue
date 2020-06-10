<template>
  <div id="themes-content">
    <div class="banner">
      <img src="../assets/img/banner04.jpg" alt="" />
    </div>
    <div class="content">
      <div class="themes-title">
        ————————
        <h4>{{ title }}</h4>
        ————————
      </div>
      <p class="meta">
        <span class="date">{{ date }}</span
        ><span class="posted"
          >Posted by <a href="#">{{ posted }}</a></span
        >
      </p>
      <div style="clear: both;">&nbsp;</div>
      <div class="entry">
        <p>
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import mixinLoading from "../mixins/mixin-loading";
export default {
  mixins: [mixinLoading],
};
</script>

<style>
#themes-content {
  background: url(../assets/img/img04.jpg) repeat-y left top;
  
}
div.themes-title {
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
