<template>
  <div id="homePage">
    <banner></banner>
    <div id="page">
      <div id="sidebar">
        <div id="search">
          <input type="text" />
        </div>
        <div id="adopt">
          <div class="adopt-info">
            <h4>Do You Like Me</h4>
            <div class="adopt-img">
              <img src="../assets/img/adopt01.jpg" alt="picture" />
            </div>
            <div class="information">
              <p>Name: 肠粉</p>
              <p>Sex: 公</p>
              <p>Age: 3个月</p>
              <p>Favorite: 南瓜子 面包虫</p>
              <p>Address: 广州 增城区</p>
            </div>
            <button>申请领养</button>
          </div>
        </div>
      </div>

      <div id="content">
        <div class="themes">
          <h2 class="title"><a href="#">欢迎来到小宠仓鼠营地 </a></h2>
          <p class="meta">
            <span class="date">March 06, 2020 </span
            ><span class="posted">Posted by <a href="#">Snoozer</a></span>
          </p>
          <div style="clear: both;">&nbsp;</div>
          <div class="entry">
            <p>
              我们专注于宠物仓鼠的一切，包括它们的种类，饮食习惯，生活习惯，生存环境等。
              对于如何选择仓鼠，如何提供正确的饲养环境，选购仓鼠的用品，一些仓鼠常见的疾病等都会在本网站找到。
              如果你喜欢仓鼠，并且已经饲养着小宠，欢迎关注我们科养频道。
              如果你想领养仓鼠，或者有意向饲养它们，请关注我们的领养频道。
            </p>
            <p class="links">
              <a href="#">Read More</a
              >&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"
                >Comments</a
              >
            </p>
          </div>
        </div>
        <div class="themes">
          <h2 class="title"><a href="#">宠物仓鼠的饲养概要 </a></h2>
          <p class="meta">
            <span class="date">April 06, 2019 </span
            ><span class="posted">Posted by <a href="#">Saphir</a></span>
          </p>
          <div style="clear: both;">&nbsp;</div>
          <div class="entry">
            <p>
              仓鼠为啮齿目仓鼠亚科（Cricetinae）动物的统称，全世界大约有7属20种。
              本期读书笔记将选择其中作为家养宠物的3属5种仓鼠（以及一个杂交种）进行讲解，分别是：
              叙利亚仓鼠（Mesocricetus
              auratus），为仓鼠亚科中仓鼠属（Mesocricetus）动物。
              坎贝尔仓鼠（Phodopus
              campbelli），为仓鼠亚科毛足鼠属（Phodopus）动物。
              加卡利亚仓鼠（Phodopus
              sungorus），为仓鼠亚科毛足鼠属（Phodopus）动物。
              罗布罗夫仓鼠（Phodopus
              roborovskii），为仓鼠亚科毛足鼠属（Phodopus）动物。
              中国仓鼠（Cricetulus
              griseus），为仓鼠亚科仓鼠属（Cricetulus）动物。
              所有宠物仓鼠均为曙暮性动物，其中叙利亚和中国仓鼠为严格的独居动物，
              而其他可作为宠物的纯种仓鼠均有不同程度的群居属性。在实际饲养过程中，
              同一物种既可以单独饲养也可以成群饲养。如果考虑成群饲养同种鼠，
              那么饲主应当了解每只仓鼠的性格并在饲养方式上及时作出适当的调整。
              对于杂交的侏儒仓鼠（Phodopus sungorus ×
              campbelli）则不建议成群饲养。
            </p>
            <p class="links">
              <a href="#">Read More</a
              >&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"
                >Comments</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../components/HomeBanner.vue";
export default {
  components: {
    banner,
  },
};
</script>
<style lang="less" scoped>
/* 左右边框 */
#page {
  width: 1000px;
  margin: 0px auto;
  display: flex;
  background: url(../assets/img/img04.jpg) repeat-y left top;
}
#search {
  display: inline-block;
  height: 70px;
  width: 306px;
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
#adopt {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 6%;
  width: 89%;
  height: 550px;
  border-radius: 2%;
  background-color: #f3e5ae;
}
.adopt-info {
  width: 79%;
  margin: 0 auto;
  text-align: center;
}
.adopt-info h4{
  margin: 10px 0;
}
#adopt img {
  width: 220px;
  height: 300px;
  border: 1px solid #625e48;
}
#adopt .information p{
  text-align: left;
  font-size: 16px;
}
.adopt-info button{
  margin: 10px 0;
  font-size: 18px;
  color: #fff;
  padding: 5px 8px;
  background-color: #625e48;
}

#content {
  width: 650px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 0px 25px 25px 25px;
}
#content .themes {
  margin-top: 30px;
}
.themes .title {
  padding: 0px 0px 10px 0px;
  text-transform: lowercase;
  letter-spacing: -1px;
  font-weight: bold;
}

.themes .title a {
  border: none;
  color: #625e48;
}
.themes .meta {
  overflow: hidden;
  background: #ede8ca;
  margin-bottom: 20px;
  padding: 5px 10px 5px 10px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: bold;
}
.themes .entry {
  padding: 0px 0px 20px 0px;
  border-bottom: 1px dashed #dcd4a7;
  text-align: justify;
}
// webkit私有 只得在移动端和高版本 -webkit- 系列(Chrome，Safari)浏览器使用。
.themes .entry p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}

.links {
  padding-top: 20px;
  font-size: 13px;
  font-weight: bold;
}
</style>
