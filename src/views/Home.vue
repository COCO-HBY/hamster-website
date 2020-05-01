<template>
  <div id="home">
    <div id="logo">
      <h1>Hamster Land</h1>
      <p>by <a>Guangzhou</a></p>
    </div>
    <div id="container">
      <div id="nav">
        <ul>
          <li class="current_li">
            <router-link to="/homePage">首页</router-link>
          </li>
          <li><router-link to="/themes">小宠趣事</router-link></li>
          <li><router-link to="/adopt">领养仓鼠</router-link></li>
          <li><router-link to="/about">关于仓鼠</router-link></li>
          <li><router-link to="/contact">联系我们</router-link></li>
        </ul>
        <div id="search"><input type="text" /></div>
      </div>
      <router-view ></router-view>
    </div>
    <div id="footer-content">
      <div id="hamster-sina">
        <img src="../assets/img/sina.jpg" alt="" />
        <div>
          <h4>官方微博</h4>
          <p>关注官方微博，精彩活动抢先获得</p>
          <button type="button">关注</button>
        </div>
      </div>
      <div id="hamster-wechat">
        <img src="../assets/img/wechat.jpg" alt="" />
        <div>
          <h4>小宠公众号</h4>
          <p>扫二维码，一手资讯抢先到</p>
          <button type="button">微信号：hby313</button>
        </div>
      </div>
      <div id="hamster-app">
        <img src="../assets/img/app.jpg" alt="" />
        <div>
          <h4>小宠APP</h4>
          <p>超级有爱的小宠交流平台</p>
          <button type="button">iPhone下载</button>
          <button type="button">Android下载</button>
        </div>
      </div>
    </div>
    <div id="footer">
      <p>
        &copy; 2020-2025 Hamster Website - All Rights Reserved. Developed by
        <a href="#" rel="nofollow">Snoozer</a>.
      </p>
    </div>
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
  width: 306px;
  // background-color: pink;
}
#nav ul {
  // width: 245px;
  height: 340px;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(../assets/img/img02.jpg) no-repeat left top;
}
#nav ul li {
  padding: 5px 20px;
  background: url(../assets/img/img10.jpg) repeat-x left bottom;
}
#nav ul li a {
  display: block;
  padding: 0px 0px 0px 35px;
  background: url(../assets/img/img13.jpg) no-repeat left 4px;
  color: #bd778e;
}
#search {
  height: 70px;
  margin-left: 11px;
  background: url(../assets/img/img12.jpg) no-repeat left top;
}
#search input {
  height: 30px;
  width: 240px;
  margin-left: 26px;
  margin-top: 20px;
  font-size: 22px;
  background-color: #b3ce81;
  // display: none;
}
#footer {
  overflow: hidden;
  width: 1000px;
  height: 70px;
  margin: 0 auto;
  padding-top: 15px;
  font-size: 14px;
  text-align: center;
  color: #9c9781;
  background: url(../assets/img/img07.jpg) no-repeat left top;
}

#footer-content {
  width: 1000px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: url(../assets/img/img05.jpg) no-repeat left top;
}
#footer-content > div {
  width: 28%;
  height: 150px;
  margin-left: 10px;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

#footer-content p {
  font-size: 12px;
}
#footer-content button {
  padding: 2px;
  border-radius: 5px;
}
#footer-content > div > div {
  width: 50%;
  margin-left: 10px;
}
</style>
