<template>
  <div id="themes-page">
    <div class="banner">
      <img src="../assets/img/banner04.jpg" alt="" />
    </div>
    <div class="themes">
      <div class="themes-title">
        ————————
        <h4>{{title}} <img src="../assets/img/guazi.jpg" alt="" /></h4>
        ————————
      </div>

      <ul class="theme-list">
        <li class="theme" v-for="item in themes" :key="item.id">
          <h4 class="title"><a href="#">{{item.title}} </a></h4>
          <p class="meta">
            <span class="date">{{item.date}}</span
            ><span class="posted">Posted by <a href="#">{{item.posted}}</a></span>
          </p>
          <div style="clear: both;">&nbsp;</div>
          <div class="entry">
            <p>
              {{item.content}}
            </p>
            <p class="links">
              <a href="#">Read More</a>
            </p>
          </div>
        </li>
      </ul>
      <ul class="pagination">
        <li><a href="#">«</a></li>
        <li><a href="#" :class="{active: index}" >1</a></li>
        <li><a href="#">2</a></li>
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
  data(){
    return{
      // timer:'',
      title: '小宠趣事',
      themes:[
        {
          id: 'th-1',
          title: '宠物仓鼠的饲养概要',
          date: 'April 06, 2019',
          posted: 'Saphir',
          content: '仓鼠为啮齿目仓鼠亚科（Cricetinae）动物的统称，全世界大约有7属20种。'+
          '本期读书笔记将选择其中作为家养宠物的3属5种仓鼠（以及一个杂交种）进行讲解，'+
          '分别是：叙利亚仓鼠（Mesocricetusauratus），为仓鼠亚科中仓鼠属（Mesocricetus）动物。坎贝尔仓鼠（Phodopus campbelli）'
        },
        {
          id: 'th-2',
          title: '宠物仓鼠的饲养概要',
          date: 'April 06, 2019',
          posted: 'Saphir',
          content: '仓鼠为啮齿目仓鼠亚科（Cricetinae）动物的统称，全世界大约有7属20种。'+
              '本期读书笔记将选择其中作为家养宠物的3属5种仓鼠（以及一个杂交种）进行讲解，分别是：'+
              '叙利亚仓鼠（Mesocricetusauratus），为仓鼠亚科中仓鼠属（Mesocricetus）动物。坎贝尔仓鼠（Phodopuscampbelli），为仓鼠亚科毛足鼠属（Phodopus）动物。'+
              '加卡利亚仓鼠（Phodopussungorus），为仓鼠亚科毛足鼠属（Phodopus）动物。罗布罗夫仓鼠（Phodopusroborovskii），为仓鼠亚科毛足鼠属（Phodopus）动物。'+
              '中国仓鼠（Cricetulusgriseus），为仓鼠亚科仓鼠属（Cricetulus）动物。 所有宠物仓鼠均为曙暮性动物，其中叙利亚和中国仓鼠为严格的独居动物，'+
              '而其他可作为宠物的纯种仓鼠均有不同程度的群居属性。在实际饲养过程中，同一物种既可以单独饲养也可以成群饲养。如果考虑成群饲养同种鼠，那么饲主应当了解每只仓鼠的性格并在饲养方式上及时作出适当的调整。'+
              '对于杂交的侏儒仓鼠（Phodopus sungorus campbelli）则不建议成群饲养。'
        },
        {
          id: 'th-3',
          title: '宠物仓鼠的饲养概要',
          date: 'April 06, 2019',
          posted: 'Saphir',
          content: '仓鼠为啮齿目仓鼠亚科（Cricetinae）动物的统称，全世界大约有7属20种。'+
          '本期读书笔记将选择其中作为家养宠物的3属5种仓鼠（以及一个杂交种）进行讲解，'+
          '分别是：叙利亚仓鼠（Mesocricetusauratus），为仓鼠亚科中仓鼠属（Mesocricetus）动物。坎贝尔仓鼠（Phodopus campbelli）'
        },
      ],
      index: null
    }
  },
  mixins:[mixinLoading],
  mounted() {
    this.index = true
  },
};
</script>
<style lang="less" scoped>
#themes-page {
  background: url(../assets/img/img04.jpg) repeat-y left top;
}
div.themes-title {
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
}
div.themes-title img {
  margin-right: 3px;
}
.themes {
  padding: 18px 50px;
}

// .themes-list {
// }
// .themes-sort {
//   width: 306px;
//   height: 300px;
//   background-color: pink;
// }
.theme .title {
  padding: 0px 0px 10px 0px;
  text-transform: lowercase;
  letter-spacing: -1px;
  font-weight: bold;
}

.theme .title a {
  border: none;
  color: #625e48;
}
.theme .meta {
  overflow: hidden;
  background: #ede8ca;
  margin-bottom: 20px;
  padding: 5px 10px 5px 10px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: bold;
}
.theme .entry {
  padding: 0px 0px 20px 0px;
  border-bottom: 1px dashed #dcd4a7;
  text-align: justify;
}
.theme .entry p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 14px;
}
.links {
  padding-top: 10px;
  font-size: 13px;
  font-weight: bold;
}
// 分页
ul.pagination {
  padding: 0;
  margin: 20px 0 0 0;
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
