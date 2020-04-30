<template>
  <div class="home">
    <div id="nav">
      <router-link to="/homePage">Home</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/themes">Themes</router-link> |
      <router-link to="/adopt">Adopt</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact us</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
