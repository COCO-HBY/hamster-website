<template>
  <div id="app">
    <!-- -->
    <loading :isLoad="isLoading"></loading>
    <router-view />
  </div>
</template>
<script>
import loading from './components/Loading'
export default {
  components:{
    loading
  },
  computed:{
    isLoading(){
      return this.$store.state.isLoading;
    }
  }
}
</script>
<style lang="less">
</style>
