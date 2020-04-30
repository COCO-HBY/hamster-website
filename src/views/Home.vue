<template>
  <div id="home">
    <div id="logo">
      <h1>Hamster</h1>
      <p>by <a>Guangzhou</a></p>
    </div>
    <div id="container">
      <div id="nav">
        <ul>
          <li><router-link to="/homePage">Home</router-link></li>
          <li><router-link to="/themes">Themes</router-link></li>
          <li><router-link to="/adopt">Adopt</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <router-view />
    </div>
    <!-- <div id="nav">
      <ul>
        <li><router-link to="/homePage">Home</router-link></li>
        <li><router-link to="/themes">Themes</router-link> </li>
        <li><router-link to="/adopt">Adopt</router-link></li>
        <li><router-link to="/about">About</router-link> </li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <router-view /> -->
    <div id="footer-content"></div>
    <div id="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="less" scoped>
#home {
  margin: 0 auto;
  padding: 0;
}
//  logo
#logo {
  width: 1000px;
  height: 110px;
  margin: 0px auto;
  padding: 0;
  color: #79350a;
  background: url(../assets/img/img01.jpg) no-repeat left top;
}
#logo h1 {
  margin: 10px 0px -10px 0px;
  padding: 10px 0px 0px 40px;
  font-size: 50px;
  color: #79350a;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#logo p {
  margin: 0px;
  padding: 0px 0px 0px 40px;
  font-size: 26px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
#logo a {
  border: none;
  background: none;
  color: #34312c;
}
#container {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
#nav {
  width: 290px;
  height: 340px;
  background-color: pink;
}
#nav ul {
  width: 228px;
  height: 340px;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(../assets/img/img02.jpg) no-repeat left top;
}
#nav ul li {
  padding: 5px 10px;
  background: url(../assets/img/img10.jpg) repeat-x left bottom;
}
#nav ul li a{
  display: block;
	padding: 0px 0px 0px 30px;
	background: url(../assets/img/img09.jpg) no-repeat left 9px;
	color: #BD778E;
}
#footer {
  overflow: hidden;
  width: 1000px;
  height: 70px;
  margin: 0 auto;
  background: url(../assets/img/img07.jpg) no-repeat left top;
}

#footer-content {
  width: 1000px;
  height: 150px;
  margin: 0 auto;
  background: url(../assets/img/img05.jpg) no-repeat left top;
}
</style>
