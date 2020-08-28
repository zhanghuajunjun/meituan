<template>
  <div>
    <div class="top_box flex-j-c">
      <div class="flex-j-sb top_nav">
        <div class="flex-cent">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dingwei" />
          </svg>
          <div class="position">{{positions.city}}</div>
          <div class="switch_city hover">切换城市</div>
          <div class="d-flex">
            <div class="recommend">[</div>
            <div class="recommend_city hover">新津县</div>
            <div class="recommend_city hover">崇州</div>
            <div class="recommend_city hover">彭州</div>
            <div class="recommend">]</div>
          </div>
          <div class="login hover" @click="login">立即登录</div>
          <div class="register hover" @click="register">注册</div>
        </div>
        <div class="flex-cent">
          <div class="pos-re parent">
            <div class="top_title myhover">我的美团</div>
            <div class="mymeituan pos-ab else">
              <div class="marg-tops hover">我的订单</div>
              <div class="marg-tops hover">我的收藏</div>
              <div class="marg-tops hover">抵用券</div>
              <div class="marg-tops hover">账户设置</div>
            </div>
          </div>
          <div class="top_title hover">手机APP</div>
          <div class="pos-re parent">
            <div class="top_title hover myhover">商家中心</div>
            <div class="BusinessCenter pos-ab else">
              <div class="marg-tops hover">美团餐饮商户中心</div>
              <div class="marg-tops hover">登陆商家中心</div>
              <div class="marg-tops hover">美团只能收银</div>
              <div class="marg-tops hover">我想合作</div>
              <div class="marg-tops hover">手机免费开店</div>
              <div class="marg-tops hover">餐饮代理商招募</div>
              <div class="marg-tops hover">商家申请开票</div>
              <div class="marg-tops hover">免费合作美团排队</div>
            </div>
          </div>
          <div class="pos-re parent">
            <div class="top_title hover myhover">美团规则</div>
            <div class="rule pos-ab else">
              <div class="marg-tops hover">规则中心</div>
              <div class="marg-tops hover">规则目录</div>
              <div class="marg-tops hover">规则评议元</div>
            </div>
          </div>
          <div class="pos-re parent">
            <div class="top_title myhover hover">商家导航</div>
            <div class="daohang pos-ab flex-j-sa">
              <div>
                <div style="font-size: 14px; text-align: center;" class="paddten">酒店旅游</div>
                <div class="flex-j-c">
                  <div class="wid1">
                    <div v-for="(item,index) in arr1" :key="index">
                      <div class="navdetail hover">{{item}}</div>
                    </div>
                  </div>
                  <div class="wid1">
                    <div v-for="(item,index) in arr2" :key="index">
                      <div class="navdetail hover">{{item}}</div>
                    </div>
                  </div>
                  <div class="wid1">
                    <div v-for="(item,index) in arr3" :key="index">
                      <div class="navdetail hover">{{item}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style="font-size: 14px; text-align: center;" class="paddten">吃美食</div>
                <div class="flex-j-c">
                  <div class="wid1">
                    <div v-for="(item,index) in arr4" :key="index">
                      <div class="navdetail hover">{{item}}</div>
                    </div>
                  </div>
                  <div class="wid1">
                    <div v-for="(item,index) in arr5" :key="index">
                      <div class="navdetail hover">{{item}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style="font-size: 14px; text-align: center;" class="paddten">看电影</div>
                <div class="wid2">
                  <div v-for="(item,index) in arr6" :key="index">
                    <div class="navdetail hover">{{item}}</div>
                  </div>
                </div>
              </div>
              <div>
                <div style="font-size: 14px; text-align: center;" class="paddten">手机应用</div>
                <div class="d-flex">
                  <div v-for="(item,index) in imge" :key="index">
                    <img :src="item" alt class="app_img hover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-j-c box1">
      <div class="mid pos-re">
        <div class="logo_box">
          <img
            src="http://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            @click="onClick"
            alt
            class="logo cur"
          />
        </div>
        <div class="search_box">
          <input type="text" placeholder="搜索商家或地点" />
          <div class="search_icon flex-cent">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-j-c">
      <div class="content">
        <div class="province">
          <div style="margin-right:20px">按省份选择：</div>
          <el-select v-model="province" placeholder="省份" @change="onChange" class="select">
            <el-option v-for="item in provinces" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select v-model="city" placeholder="城市" class="select" :disabled="disable">
            <el-option v-for="item in citys" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <div style="margin-left:30px">直接搜索：</div>
          <el-select
            v-model="value"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入城市名或拼音"
            :remote-method="remoteMethod"
            :loading="loading"
          >
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </div>
        <div class="hot_city">
          <div>热门城市：</div>
          <div v-for="item in hotCitys" :key="item.id" class="hots_item">
            <div v-if="item.name == '市辖区'">{{item.province.slice(0,item.name.length-1)}}</div>
            <div v-else>{{item.name.slice(0,item.name.length-1)}}</div>
          </div>
        </div>
        <div class="hot_city">
          <div>最近访问：</div>
          <div v-for="item in hotCitys" :key="item.id" class="hots_item">
            <div v-if="item.name == '市辖区'">{{item.province.slice(0,item.name.length-1)}}</div>
            <div v-else>{{item.name.slice(0,item.name.length-1)}}</div>
          </div>
        </div>
        <div class="hot_city">
          <div style="margin-right: 20px;">按拼音首字母选择：</div>
          <div v-for="(item,index) in retrieval" :key="index" class="retrieval">
            <a :href="`#${index}`">{{item}}</a>
          </div>
        </div>
        <div>
          <div
            v-for="(item,index) in cities"
            :key="item.id"
            class="d-flex cities"
            @mouseenter="enter(index)"
            :class="{'backg':currentIndex===index}"
            @mouseleave="leave"
          >
            <div class="letter" :id="index">{{item.id}}</div>
            <div class="d-flex f-f-warp" style="width:900px">
              <div
                v-for="(item1,index1) in item.name"
                :key="index1"
                class="city_item"
                :class="{'hotcity':item1.hot}"
              >{{item1.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import city from "../../city";
export default {
  name: "",
  props: {},
  data() {
    return {
      positions: {},
      arr1: ["国际机票", "经济型酒店", "公寓", "青年旅社", "农家院"],
      arr2: ["火车票", "主题酒店", "豪华酒店", "度假酒店"],
      arr3: ["民宿", "商务酒店", "客栈", "别墅"],
      arr4: ["烤鱼", "烧烤", "火锅"],
      arr5: ["特色小吃", "自助餐", "代金券"],
      arr6: [
        "热映电影",
        "热门影院",
        "热映电影口碑榜",
        "最受期待电影",
        "国内票房榜",
        "北美票房榜",
        "电影排行榜",
      ],
      imge: [
        require("../iamge/meituan.png"),
        require("../iamge/waimai.png"),
        require("../iamge/shuidi.png"),
        require("../iamge/dianping.png"),
        require("../iamge/maoyan.png"),
      ],
      provinces: [],
      province: "",
      city: "",
      id: "",
      disable: true,
      citys: [],
      searchcity: "",
      hotCitys: [],
      allCity: city,
      cities: [],
      retrieval: [],
      currentIndex: "",
      options: [],
      value: [],
      list: [],
      loading: false,
    };
  },
  components: {},
  methods: {
    getData() {
      this.$api
        .city(this.id)
        .then((res) => {
          this.citys = res.data.city;
        })
        .catch((err) => {});
    },
    getHotData() {
      this.$api
        .hotCity()
        .then((res) => {
          this.hotCitys = res.data.hots;
        })
        .catch((err) => {});
    },
    onChange(value) {
      this.id = value;
      this.disable = false;
      this.getData();
    },
    enter(index) {
      this.currentIndex = index;
    },
    leave() {
      this.currentIndex = "";
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return (
              item.spell.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
              item.name.indexOf(query) > -1
            );
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    register() {
      this.$router.push("/register");
    },
    login() {
      this.$router.push("/login");
    },
    onClick() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.positions = this.$route.query.positions;
    this.$api
      .province()
      .then((res) => {
        this.provinces = res.data.province;
      })
      .catch((err) => {});
    this.getHotData();
    for (let i in this.allCity.data.cities) {
      this.retrieval.push(i);
      let obj = {};
      obj.id = i;
      obj.name = this.allCity.data.cities[i];
      this.cities.push(obj);
    }
    // 获取对象的值 Object.keys()获取对象的键
    let arr = Object.values(this.allCity.data.cities);
    arr.map((item) => {
      item.map((item1) => {
        this.list.push(item1);
      });
    });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.top_box {
  width: 100%;
  height: 35px;
  background: #f8f8f8;
}
.top_nav {
  width: 960px;
}
.icon {
  width: 12px;
  height: 12px;
}
.position {
  color: #666666;
  font-size: 12px;
}
.switch_city {
  color: #666666;
  font-size: 12px;
  padding: 0 2px;
  margin: 0 4px;
  border: 1px solid #eeeeee;
}
.recommend_city {
  color: #999999;
  font-size: 12px;
  margin: 0 4px;
}
.recommend {
  color: #999999;
  font-size: 12px;
}
.top_left {
  display: flex;
  align-items: center;
}
.top_title {
  padding: 12px 14px;
  color: #999999;
  font-size: 12px;
}
.box1 {
  background: white;
}
.mid {
  width: 960px;
  height: 114px;
  display: flex;
}
.logo_box {
  padding: 28px 60px 40px 0px;
  width: 220px;
}
.logo {
  width: 126px;
  height: 46px;
}
.search_box {
  padding: 28px 0 0;
  display: flex;
}
input {
  padding: 15px;
  height: 8px;
  width: 400px;
  border-radius: 4px 0 0 4px;
  border: 1px solid #e5e5e5;
}
.search_icon {
  width: 80px;
  height: 40px;
  background: #ffc300;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
.icon-sousuo {
  width: 18px;
  color: #222222;
  font-weight: 600;
}
.mymeituan {
  width: 76px;
  text-align: center;
  right: 0px;
  top: 37px;
}
.BusinessCenter {
  width: 110px;
  text-align: center;
  right: 0px;
  top: 37px;
}
.rule {
  width: 76px;
  right: 0px;
  text-align: center;
  top: 37px;
}
.daohang {
  padding: 20px 0;
  width: 960px;
  right: 0px;
  top: 37px;
  background: white;
  // border: 1px solid #e5e5e5;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 100;
  visibility: hidden;
}
.else {
  padding-bottom: 12px;
  font-size: 12px;
  color: #999999;
  background: white;
  // border: 1px solid #e5e5e5;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  visibility: hidden;
  z-index: 99;
}
.parent:hover .myhover {
  box-shadow: 0 -3px 5px 0 rgba(0, 0, 0, 0.1);
  // border-left: 1px solid #e5e5e5;
  background: white;
  // border-top: 1px solid #e5e5e5;
  // border-right: 1px solid #e5e5e5;
  z-index: 100;
  color: orange;
}
.parent:hover .mymeituan {
  visibility: visible;
}
.parent:hover .BusinessCenter {
  visibility: visible;
}
.parent:hover .rule {
  visibility: visible;
}
.parent:hover .daohang {
  visibility: visible;
}
.app_img {
  width: 60px;
  height: 60px;
  margin-left: 10px;
}
.login {
  font-size: 12px;
  color: orange;
  margin: 0 20px;
}
.register {
  font-size: 12px;
  color: #999999;
}
.content {
  width: 910px;
  padding: 20px;
  margin-top: 20px;
}
.province {
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.select {
  width: 150px;
  margin-right: 20px;
}
.ipt {
  width: 200px;
}
.hot_city {
  padding: 30px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.hots_item {
  margin-left: 20px;
}
.retrieval {
  margin-right: 23px;
}
.city_item {
  padding: 10px 20px;
  font-size: 14px;
  color: #666666;
}
.letter {
  background: #ffd000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.cities {
  padding: 10px;
}
.backg {
  background: #eee;
  border-radius: 10px;
}
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  outline: none;
  background: none;
  text-decoration: none;
  color: #000;
}
.hotcity {
  color: #ff6600;
}
.city_item:hover {
  cursor: pointer;
  color: #000000;
}
</style>