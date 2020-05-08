<template>
  <div id="adopt">
    <div class="adopt-banner">
      <img src="../assets/img/banner03.jpg" alt="banner" />
    </div>
    <div class="adopt-content">
      <div class="adopt-title">
        <div class="line"></div>
        <h4>❤ 领养代替购买 ❤</h4>
        <div class="line"></div>
      </div>
      <ul class="hamster-list">
        <li class="hamster-item" v-for="item in infos" :key="item.id">
          <img :src="getImgUrl(item.photo)" alt="" />
          <div>
            <p>name: {{ item.name }}</p>
            <p>sex: {{ item.sex }}</p>
            <p>age: {{ item.age }}</p>
            <p>favorite: {{ item.favorite }}</p>
            <p>address: {{ item.address }}</p>
            <button>申请领养</button>
          </div>
        </li>
      </ul>
      <ul class="pagination">
        <li><a href="#">«</a></li>
        <li><a href="#">1</a></li>
        <li><a class="active" href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">»</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import mixinLoading from '../mixins/mixin-loading'
export default {
  data() {
    return {
      infos: [
        {
          id: 1,
          name: "肠粉",
          sex: "公",
          age: "3个月",
          favorite: " 南瓜子 面包虫",
          address: "广州 增城区",
          photo: "adopt01.jpg",
        },
        {
          id: 2,
          name: "团子",
          sex: "母",
          age: "2个月",
          favorite: " 南瓜子",
          address: "广州 天河区",
          photo: "adopt02.jpg",
        },
        {
          id: 3,
          name: "肠粉",
          sex: "公",
          age: "3个月",
          favorite: " 南瓜子 面包虫",
          address: "广州 增城区",
          photo: "adopt03.jpg",
        },
      ],
      timer: "",
    };
  },

  methods: {
    getImgUrl(icon) {
      return require("@/assets/img/" + icon);
    },
  },
  mixins:[mixinLoading],
  mounted() {
  },
};
</script>
<style lang="less" scoped>
div.adopt-content {
  padding: 30px 50px 50px 50px;
  background: url(../assets/img/img04.jpg) repeat-y left top;
}

#adopt div.adopt-title {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#adopt div.line {
  width: 100px;
  background-color: #000;
  height: 1px;
  margin-top: 5px;
}
#adopt h4 {
  font-size: 26px;
  padding: 5px;
}

// 列表
ul.hamster-list {
  overflow: hidden;
}
li.hamster-item {
  width: 70%;
  height: 230px;
  overflow: hidden;
  margin-bottom: 20px;
  padding: 10px;
  position: relative;
  
}

li.hamster-item button {
  font-size: 18px;
  color: #fff;
  padding: 4px 6px;
  border-radius: 5px;
  background-color: #625e48;
}
li.hamster-item:nth-child(odd) button {
  position: absolute;
  bottom: 15px;
  left: 50%;
}
li.hamster-item:nth-child(even) button {
  position: absolute;
  bottom: 15px;
  right: 50%;
}
li.hamster-item:nth-child(odd) {
  background: #ede8ca;
  // float: left;
  box-shadow: 10px 10px 5px #bbb;
  animation: odd 1.5s ease 1;
}
li.hamster-item:nth-child(even) {
  background: #f3e5ae;
  float: right;
  text-align: right;
  box-shadow: -10px 10px 5px #bbb;
  animation: even 1.5s ease 1;
}
li.hamster-item:nth-child(odd) > img {
  width: 170px;
  height: 230px;
  float: left;
  margin-right: 20px;
}
li.hamster-item:nth-child(even) > img {
  width: 170px;
  height: 230px;
  float: right;
  margin-left: 20px;
}

@keyframes odd {
  0% {
    transform: translate(70%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes even {
  0% {
    transform: translate(-70%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}


// 分页
ul.pagination {
  padding: 0;
  margin: 30px 0 0 0;
  text-align: right;
}

ul.pagination li {
  display: inline;
}

ul.pagination li a {
  color: #625e48;
  padding: 8px 16px;
  border-radius: 5px;
}
ul.pagination li a.active {
  background-color: #84b700;
  color: white;
  border-radius: 5px;
}

ul.pagination li a:hover:not(.active) {
  background-color: #ede8ca;
}
</style>
