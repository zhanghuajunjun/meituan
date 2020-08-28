<template>
  <div class="box">
    <div class="top_box flex-j-c">
      <div class="flex-j-sb top_nav">
        <div class="flex-cent">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dingwei" />
          </svg>
          <div class="position">{{positions.city}}</div>
          <div class="switch_city hover" @click="city">切换城市</div>
          <div class="d-flex">
            <div class="recommend">[</div>
            <div class="recommend_city hover">新津县</div>
            <div class="recommend_city hover">崇州</div>
            <div class="recommend_city hover">彭州</div>
            <div class="recommend">]</div>
          </div>
          <div v-if="user === ''" class="d-flex">
            <div class="login hover" @click="login">立即登录</div>
            <div class="register hover" @click="register">注册</div>
          </div>
          <div v-else class="d-flex">
            <div class="login hover">{{user}}</div>
            <div class="register hover">退出</div>
          </div>
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
          <img src="http://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="logo" />
        </div>
        <div class="search_box">
          <input type="text" placeholder="搜索商家或地点" @keydown.enter="search" v-model="keyword" />
          <div class="search_icon flex-cent" @click="search">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-j-c box1">
      <div class="footer">
        <div class="nav allclassify">全部分类</div>
        <div class="flex-cent">
          <div class="nav">美团外卖</div>
          <div class="nav">猫眼电影</div>
          <div class="nav">美团酒店</div>
          <div class="nav">民宿/公寓</div>
          <div class="nav">商家入职</div>
          <div class="nav">美团公益</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    positions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
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
        require("../../iamge/meituan.png"),
        require("../../iamge/waimai.png"),
        require("../../iamge/shuidi.png"),
        require("../../iamge/dianping.png"),
        require("../../iamge/maoyan.png"),
      ],
      user: "",
      keyword: "",
    };
  },
  components: {},
  methods: {
    city() {
      this.$router.push({
        path: "/city",
        query: { positions: this.positions },
      });
    },
    register() {
      this.$router.push("/register");
    },
    login() {
      this.$router.push("/login");
    },
    search() {
      if (this.keyword !== "") {
        console.log(this.keyword);
        this.$router.push({
          path: "/search",
          query: { keyword: this.keyword, city: this.positions.city },
        });
      }
    },
  },
  mounted() {
    this.$api
      .crumbs(this.positions.city)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
    let user = localStorage.getItem("username");
    if (user) {
      this.user = user;
    }
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  box-shadow: 10px 5px 10px #eeeeee;
}
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
.footer {
  display: flex;
  width: 960px;
}
.allclassify {
  border-top: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  padding-top: 15px !important;
  margin-top: -15px;
  width: 160px;
  margin-right: 20px;
}
.nav {
  padding: 0 20px 20px;
  color: #222222;
  font-weight: 600;
  font-size: 15px;
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
</style>