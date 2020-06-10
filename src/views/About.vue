<template>
  <div id="about-page">
    <div class="banner">
      <img src="../assets/img/banner01.jpg" alt="" />
    </div>
    <div class="about">
      <div class="tab">
        <ul>
          <li class="container" v-for="item in tabData" :key="item.id">
            <input type="radio" name="check" :checked="item.checked" :id="item.id"/><label
              :for="item.id"
              >{{ item.label }}</label
            >
            <div class="content" v-if="item.type == 1">
              <a class="content-1" v-for="li in item.data" :key="li.text">
                <img :src="li.img" :alt="li.text" />
                <span>{{ item.data.text }}</span>
              </a>
            </div>
            <div class="content" v-if="item.type == 2">
              <ul>
                <li v-for="i in item.data" :key="i">
                  {{i}}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import mixinLoading from "../mixins/mixin-loading";
export default {
  data() {
    return {
      // timer: "",
      tabData: [
        {
          id: "tab-1",
          label: "仓鼠种类",
          type: "1",
          checked: "checked",
          data: [
            { img: require("../assets/img/sanxian.jpg"), text: "三线" },
            { img: require("../assets/img/yinhu.jpg"), text: "银狐" },
            { img: require("../assets/img/zicang.jpg"), text: "紫仓" },
            { img: require("../assets/img/buding.jpg"), text: "布丁" },
            { img: require("../assets/img/laogonggong.jpg"), text: "老公公" },
            { img: require("../assets/img/naicha.jpg"), text: "奶茶" },
            { img: require("../assets/img/mixiong.jpg"), text: "米熊" },
          ],
        },
        {
          id: "tab-2",
          label: "仓鼠用品",
          type: "1",
          data: [
            { img: require("../assets/img/longzi.png"), text: "笼子" },
            { img: require("../assets/img/yushi.png"), text: "浴室" },
            { img: require("../assets/img/paolun.png"), text: "跑轮" },
            { img: require("../assets/img/xiaowu.png"), text: "躲避屋" },
            { img: require("../assets/img/yinshuiqi.png"), text: "饮水器" },
            { img: require("../assets/img/shipen.png"), text: "食盆" },
            { img: require("../assets/img/guandao.png"), text: "管道" },
          ],
        },
        {
          id: "tab-3",
          label: "仓鼠疾病",
          type: "2",
          data: [
            '湿尾：腹泻水便，便便成灰白色，且伴有恶臭。仓鼠食欲不振，精神萎靡。行走或者坐下的时候会显得弓着背部状似驼背。严重情况下还会便血以及直肠脱垂。湿尾症一般病发48小时后就可导致仓鼠死亡，所以在确认病情后应及时进行治疗。',
            '伪冬眠：伪冬眠的现象经常发生在入冬后，当饲养仓鼠的环境温度低于15摄氏度，仓鼠就非常有可能发生伪冬眠。如果此时不进行保温，生命就有危险了',
            '中暑：表现为情绪反常，通常表现为情绪不安，甚至焦躁；还会流口水，根据病情下巴会有不同程度的变湿；体温有些高，托在手上可以感受到热量（类似于平时人用手抚摸额头判断是否发热一般）；正常生活节奏完全打乱，会出现不吃不喝的现象；精神萎靡不振，嗜睡情况根据中暑程度的不同会有所加深（严重的话，不断戳摇，仓鼠都没反应',
            '失序症：近亲繁殖的导致的病症。发病时仓鼠会不断地转圈、后空翻、倒仰着走，直到力竭而亡。',
          ],
        },
        {
          id: "tab-4",
          label: "仓鼠疾病",
          type: "2",
          data: [
            '禁止喂食人吃的食物，盐分过高，各种调味料，会增加鼠子的身体负担',
            '禁止晒太阳，鼠子非常怕热，容易中暑，使用散热片或者大理石散热',
            '禁止水洗，可使用浴砂，鼠子会自己洗澡或者口水浴',
            '禁止合笼，会导致鼠子打架产生伤亡或者过度生育繁殖',
            '请勿将鼠子饲养在过度狭小的空间，而且空间中至少配有滚轮，水瓶，食盆，小窝等',
            '请勿给仓鼠饮用生水'
          ],
        },
      ],
    };
  },

  mixins: [mixinLoading],
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
#about-page {
  background: url(../assets/img/img04.jpg) repeat-y left top;
  width: 100%;
}

div.about {
  margin-left: 12px;
  margin-top: -4px;
}

// 标签页2
.about .tab {
  width: 99%;
  height: 450px;
  overflow: hidden;
}
.tab > ul {
  position: relative;
  display: flex;
}
.tab ul li {
  flex: 1;
  border-right: 1px solid #fff;
}
.tab ul li:last-child {
  border-right: none;
}

.tab ul li input {
  display: none;
}
input + label {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #ede8ca;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  color: #5e5a3f;
}
input + label + div {
  display: none;
  position: absolute;
  left: 0;
  top: 50px;
  padding-top: 30px;
  padding-left: 60px;
  width: 95%;
  flex-flow: row wrap;
}
/* input选中状态时候对应的label的样式 */
input:checked + label {
  // background: rgb(114, 158, 4);
  background: #fff;
  color: #5e5a3f;
}
/* input选中时候显示对应的div */
input:checked + label + div {
  display: flex;
  justify-content: flex-start;
}

.content-1 {
  display: inline-block;
  width: 100px;
  margin-right: 80px;
  margin-bottom: 50px;
  text-align: center;
  color: #5e5a3f;
  line-height: 120%;
  cursor: pointer;
  border: 1px solid #fff;
}
.content-1:hover {
  border: 1px solid green;
}

li.container > div > ul {
  padding: 0 50px 0 25px;
}
li.container > div > ul > li {
  list-style-type: disc;
}
</style>
