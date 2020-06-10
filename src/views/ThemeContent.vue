<template>
  <div id="themes-content">
    <div class="banner">
      <img src="../assets/img/banner04.jpg" alt="" />
    </div>
    <div class="content">
      <div class="themes-title">
        ————————
        <h4>{{ themes[index].title }}</h4>
        ————————
      </div>
      <p class="meta">
        <span class="date">{{ themes[index].date }}</span
        ><span class="posted"
          >Posted by <a href="#">{{ themes[index].posted }}</a></span
        >
      </p>
      <div style="clear: both;">&nbsp;</div>
      <div class="entry">
        <p>
          {{ themes[index].content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import mixinLoading from "../mixins/mixin-loading";
export default {
  mixins: [mixinLoading],
  data() {
    return {
      themes: [
        {
          id: "1",
          title: "欢迎来到小宠仓鼠营地",
          date: "March 06, 2020 ",
          posted: "Snoozer",
          content:' 我们专注于宠物仓鼠的一切，包括它们的种类，饮食习惯，生活习惯，生存环境等。'+
              '对于如何选择仓鼠，如何提供正确的饲养环境，选购仓鼠的用品，一些仓鼠常见的疾病等都会在本网站找到。'+
              '如果你喜欢仓鼠，并且已经饲养着小宠，欢迎关注我们科养频道。'+
              '如果你想领养仓鼠，或者有意向饲养它们，请关注我们的领养频道。'   
        },
        {
          id: "2",
          title: "宠物仓鼠种类",
          date: "April 06, 2019 ",
          posted: "Saphir",
          content:
            "仓鼠为啮齿目仓鼠亚科（Cricetinae）动物的统称，全世界大约有7属20种。" +
            "本期读书笔记将选择其中作为家养宠物的3属5种仓鼠（以及一个杂交种）进行讲解，分别是：" +
            "叙利亚仓鼠（Mesocricetusauratus），为仓鼠亚科中仓鼠属（Mesocricetus）动物。坎贝尔仓鼠（Phodopuscampbelli），为仓鼠亚科毛足鼠属（Phodopus）动物。" +
            "加卡利亚仓鼠（Phodopussungorus），为仓鼠亚科毛足鼠属（Phodopus）动物。罗布罗夫仓鼠（Phodopusroborovskii），为仓鼠亚科毛足鼠属（Phodopus）动物。" +
            "中国仓鼠（Cricetulusgriseus），为仓鼠亚科仓鼠属（Cricetulus）动物。 所有宠物仓鼠均为曙暮性动物，其中叙利亚和中国仓鼠为严格的独居动物，" +
            "而其他可作为宠物的纯种仓鼠均有不同程度的群居属性。在实际饲养过程中，同一物种既可以单独饲养也可以成群饲养。如果考虑成群饲养同种鼠，那么饲主应当了解每只仓鼠的性格并在饲养方式上及时作出适当的调整。" +
            "对于杂交的侏儒仓鼠（Phodopus sungorus campbelli）则不建议成群饲养。",
        },
        {
          id: "3",
          title: "宠物仓鼠的饲养概要",
          date: "April 06, 2019",
          posted: "Saphir",
          content:
            "仓鼠为啮齿目仓鼠亚科（Cricetinae）动物的统称，全世界大约有7属20种。" +
            "本期读书笔记将选择其中作为家养宠物的3属5种仓鼠（以及一个杂交种）进行讲解，" +
            "分别是：叙利亚仓鼠（Mesocricetusauratus），为仓鼠亚科中仓鼠属（Mesocricetus）动物。坎贝尔仓鼠（Phodopus campbelli）",
        },
      ],
      index: ''
    };
  },
  created(){
    this.index = this.$route.query.id
    // console.log(this.index)
  }
};
</script>

<style scoped>
#themes-content {
  background: url(../assets/img/img04.jpg) repeat-y left top;
}
div.themes-title {
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
}
.content .title {
  padding: 0px 0px 10px 0px;
  text-transform: lowercase;
  letter-spacing: -1px;
  font-weight: bold;
}
.content {
  padding: 18px 50px;
}
.meta {
  overflow: hidden;
  background: #ede8ca;
  margin-bottom: 20px;
  padding: 5px 10px 5px 10px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bold;
}
.entry {
  padding: 0px 0px 20px 0px;
  text-align: justify;
}
.entry p {
  overflow: hidden;
  font-size: 16px;
}
</style>
